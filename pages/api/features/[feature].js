const cloudinary = require('cloudinary').v2;
const axios = require('axios');
const FormData = require("form-data");
import { createImage } from "../../../lib/image"
import { infoLoggedUser } from "../../../lib/user"
import { getSession } from "next-auth/react";

cloudinary.config({
    secure: true,
    cloud_name: process.env.CLOUDINARY_CLOUDNAME,
    api_key: process.env.CLOUDINARY_APIKEY,
    api_secret: process.env.CLOUDINARY_APISECRET
});
const formidable = require('formidable');
export const config = {
    api: {
        bodyParser: false,
    },
};

const postUrlLink = async (output_url, email, feature, cb) => {
    try {
        let id = "id" + Math.random().toString(16).slice(2)
        const { secure_url } = await cloudinary.uploader.upload(output_url, {
            public_id: id
        });
        await createImage({
            id,
            title: "Feature " + feature,
            feature: feature,
            image: secure_url,
            email
        })
        cb(id)
    } catch (error) {
        console.log(error);
    }
}


export default async function handler(req, res) {
    try {
        const session = await getSession({ req });
        const email = session.user.email
        const user = await infoLoggedUser(email)
        if (user.hint >= user.credit) {
            throw "Forbidden"
        }
        const axiosInstance = axios.create({
            headers: {
                'client-library': 'deepai-js-client',
                'api-key': process.env.DEEPAI_KEY
            },
        });
        const form = new FormData();
        const req_options = { withCredentials: true };
        if (form.getHeaders !== undefined) {
            req_options.headers = form.getHeaders();
        }
        if (req.method == "GET" && req.query.feature == "prompt-to-image") {
            let text = req.query.image
            form.append('text', text);
            const { data } = await axiosInstance.post(
                'https://api.deepai.org/api/text2img',
                form,
                req_options
            );
            let { output_url } = data
            await postUrlLink(output_url, email, req.query.feature, (id) => {
                let str = `/result/${id}`
                res.setHeader('Location', str);
                res.statusCode = 302
                return res.end();
            })
        } else if (req.method === 'POST' && (req.query.feature === "colorize" || req.query.feature === "fix-resolution")) {
            const form = new formidable.IncomingForm();
            form.parse(req, async (err, fields, files) => {
                try {
                    if (err) {
                        console.error('Error while parsing form data:', err);
                        res.status(500).json({ error: 'Error while parsing form data' });
                    } else {
                        let image
                        let info = {}
                        if (req.headers.url) {
                            image = req.headers.url
                        } else {
                            try {
                                const { filepath } = files.file[0]
                                const { secure_url, public_id, asset_id } = await cloudinary.uploader.upload(filepath, {
                                    use_filename: true,
                                    unique_filename: false,
                                    overwrite: true,
                                });
                                image = secure_url
                                info = { secure_url, public_id, asset_id }
                            } catch (error) {
                                throw error
                            }
                        }
                        let featurenya = "torch-srgan"
                        if (req.query.feature == "colorize") {
                            featurenya = "colorizer"
                        }
                        const { data } = await axiosInstance.post(
                            'https://api.deepai.org/api/' + featurenya,
                            { image },
                            req_options
                        );
                        let { output_url } = data
                        await postUrlLink(output_url, email, req.query.feature, (id) => {
                            let str = `/result/${id}`
                            return res.status(201).json({ redirect: str })
                        })
                    }
                } catch (error) {
                    console.log(error);
                    throw error
                }
            });
        } else {
            res.status(405).json({ error: 'Method not allowed' });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" })
    }
}




