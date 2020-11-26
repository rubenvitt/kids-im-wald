import '../styles/globals.css'
import Image from "next/image";
import React from "react";
import {useRouter} from "next/router";
import {allRoutes} from "../routes";
import {PageContainer} from "../components/page-container.component";

function MyApp({Component, pageProps}) {
    const {route} = useRouter();
    const pageTitle = allRoutes.find(r => r.path === route && !r.hideTitle)?.title ?? '';
    return <>
        <PageContainer title={pageTitle}>
            <Component {...pageProps} />
        </PageContainer>
    </>
}

export default MyApp
