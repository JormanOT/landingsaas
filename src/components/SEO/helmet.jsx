import React from 'react'
import { Helmet } from 'react-helmet'

const helmet = ({ seo }) => {
    return (
        <Helmet>
            <title>{seo.title}</title>
            <meta name='description' content={seo.description} />
            <link rel="canonical" href={seo.canonical} />
            <meta property="og:type" content={seo.type} />
            <meta property="og:title" content={seo.title} />
            <meta property="og:description" content={seo.description} />
            <meta name="twitter:creator" content={seo.name} />
            <meta name="twitter:card" content={seo.type} />
            <meta name="twitter:title" content={seo.title} />
            <meta name="twitter:description" content={seo.description} />
        </Helmet>
    )
}

export default helmet