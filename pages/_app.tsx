import { ThemeProvider } from "./theme";
import "./../styles/globals.css"
import Layout from "../components/layout";

// @ts-ignore
export default function MyApp<any>({ Component, pageProps }) {
    return (
        <ThemeProvider>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ThemeProvider>
    )

}

function getInitialProps() {
    console.log('SADSA__')
}
