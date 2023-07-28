import { myImageCollection } from "../../../lib/image"
import NextAuth from "next-auth";
import { getSession } from "next-auth/react";
export default async function handler(req, res) {
  const session = await getSession({ req });
  try {
    let data = await myImageCollection(session.user.email)
    res.status(200).json(data)
  } catch (error) {
    res.status(500).json({ message: "ISE" })
  }
}