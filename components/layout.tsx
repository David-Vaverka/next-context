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
            <Link href="/about" prefetch={false}>About Us</Link>
            <Link href="/1" prefetch={false}>About Us 1</Link>
            <Link href="/2" prefetch={false}>About Us 2 {theme}</Link>
            dsads

            <main>{children}</main>
        </>
    )
}
