import Head from "next/head"

import Navbar from "../components/Navbar"

const Layout = ({children, title, description}) =>
    <>
        <Head>
            <title>{title}</title>
            <meta name="description" content={description}/>
            <link rel="icon" href="/public/favicon.ico"/>
        </Head>
        <Navbar/>
        <main>{children}</main>
    </>

export default Layout
