"use client"
import React, { useEffect, useState } from "react";
import Footer from "@elements/Footer";


const Page = () => {
  const [data, setData] = useState(new Array(6).fill({
    title: "#Loading",
    created: "",
    feature: "",
    actions: false
  }))
  useEffect(() => {
    fetch('/api/images/user')
      .then((response) => {
        if (response.ok) {
          return response.json()
        }
        throw response
      })
      .then(data => {
        let temp: any = []
        let obj = {
          title: "#",
          created: "",
          feature: "",
          actions: false
        }
        let n = (data.length >= 5) ? data.length : 6
        for (let i = 0; i < n; i++) {
          const element = data[i]
          if (element) {
            temp.push({ ...element, actions: true })
          } else {
            temp.push(obj)
          }
        }
        setData(temp)
      })
      .catch(err => {
        console.log(err);
      })
  }, [])




  return (
    <main className="pt-18 text-white bg-page flex h-min-screen md:h-screen w-screen flex-col">
      <div className=" lg:w-875 w-11/12 max-w-1260 lg:h-400 flex lg:flex-col flex-col-reverse m-auto items-center  md:items-center lg:flex-wrap content-between justify-between gap-4 lg:gap-0 lg:py-0 py-10">
        <table className="w-full text-sm text-left text-gray-500 ">
          <caption className="rounded-t-lg  p-5 text-lg font-semibold text-left text-gray-900 bg-white 0">
            My Collection of AI Image Generative @IMAGEWISE
            <p className="mt-1 text-sm font-normal text-gray-500">
              Featuring feature of Prompt to image, Fix resolution and Colorize.
            </p>
          </caption>
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3">
                Title
              </th>
              <th scope="col" className="px-6 py-3">
                Date
              </th>
              <th scope="col" className="px-6 py-3">
                Image
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="">
            {
              data.map((el, i) => {
                return (
                  <tr className={i == data.length - 1 ? "bg-white" : "bg-white border-b"}>
                    <th scope="row"
                      className={i == data.length - 1 ? "rounded-bl-lg px-6 py-4 font-medium text-gray-900 whitespace-nowrap" : "px-6 py-4 font-medium text-gray-900 whitespace-nowrap"}
                    >
                      {el.title}
                    </th>
                    <td className="px-6 py-3">
                      {el.created}
                    </td>
                    {
                      el.actions ?
                        <td className="px-6 py-3">
                          <img src={el.image} style={{ width: 20, height: 20, objectFit: "contain" }} />
                        </td> :
                        <td></td>
                    }
                    {
                      el.actions ?
                        <td
                          className={i == data.length - 1 ? "rounded-br-lg px-6 py-3 text-center " : "px-6 py-3 text-center "}
                        >
                          <a href={el.image} target="_blank" className="font-medium text-blue-600  hover:underline">Open</a>
                        </td> :
                        <td
                          className={i == data.length - 1 ? "rounded-br-lg px-6 py-3 text-center " : "px-6 py-3 text-center "}
                        ></td>
                    }

                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
      <Footer />
    </main>
  );
};

export default Page;
