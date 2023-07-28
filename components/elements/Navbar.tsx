import React from "react";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react"

const Navbar = () => {
  const { data: session } = useSession()
  return (
    <nav className="fixed w-full z-20 top-0 left-0 text-white">
      <div className="flex  flex-wrap items-center  p-6 lg:px-16  justify-stretch">
        <Link href="/" passHref className="flex items-center flex-1">
          <img src="/logo.png" className="h-12 mr-3" alt="IMAGEWISE" />
          <span className="font-pro self-center text-2xl font-semibold whitespace-nowrap dark:text-white">IMAGEWISE</span>
        </Link>
        <div className="flex-1 flex md:order-2 justify-end">
          {!session ? (
            <a
              href={`/api/auth/signin`}
              className="text-white hidden lg:flex"
              onClick={(e) => {
                e.preventDefault()
                signIn("google")
              }}
            >
              Sign in with Google
            </a>
          ) : <button
            className="text-white hidden lg:flex"
            onClick={(e) => {
              signOut()
            }}
          >
            LOGOUT
          </button>
          }
          <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
          </button>
        </div>
        <div className="flex-1 m-auto items-center justify-center hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:border-gray-700">
            <li>
              {!session ? (
                <a
                  href={`#features`}
                  className="text-white hidden lg:flex"
                >
                  Features
                </a>
              ) : <Link href="/features" >
                Features
              </Link>
              }
            </li>
            <li>
              <a
                href={`/#demo`}
                className="text-white hidden lg:flex"
              >
                Demo
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;