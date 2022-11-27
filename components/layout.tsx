import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {useThemeContext} from "../pages/theme";

import Link from 'next/link'

// @ts-ignore
export default function Layout({ children }) {

    // @ts-ignore
    const [theme, setTheme] = useThemeContext();

    return (
        <>
            <div className="gradient">
                <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">

                    <div className="pl-4 flex items-center">
                        <div className="toggleColour no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
                        >

                            LANDING aa{theme}
                        </div>
                    </div>

                    <div className="block lg:hidden pr-4">
                        <button id="nav-toggle"
                                className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-800 hover:border-teal-500 appearance-none focus:outline-none">
                            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <title>Menu</title>
                                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                            </svg>
                        </button>
                    </div>

                    <div
                        className="w-full flex-grow lg:flex  lg:w-auto hidden lg:block mt-2 lg:mt-0 lg:bg-transparent text-black p-4 lg:p-0 z-20 bg-gray-100"
                        id="nav-content">
                        <ul className="list-reset lg:flex justify-end flex-1 items-center">
                            <li className="mr-3">
                                    <Link className="inline-block py-2 px-4 text-black font-bold no-underline"  href="/about" prefetch={false}>About Us</Link>
                            </li>
                            <li className="mr-3">

                                <Link href="/1"  className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4"
                              >link</Link>
                            </li>
                            <li  className="mr-3">
                                <Link className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4"
                                      href="/2"  >link</Link>
                            </li>
                        </ul>
                        <button id="navAction"
                                className="mx-auto lg:mx-0 hover:underline font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75 bg-white text-gray-800">Action
                        </button>
                    </div>
                </div>

            </div>

            <style jsx>{`

.gradient {
    background:linear-gradient(90deg,#33a3d5 0%,#71da51 100%)
}


    @media (min-width: 1024px)
.container {
    max-width: 1024px;
}

@media (min-width: 768px)
.container {
    max-width: 768px;
}

.container {
    max-width: 640px;
}

        p {
          color: blue;
        }
      `}</style>

            <main>{children}</main>
        </>
    )
}
