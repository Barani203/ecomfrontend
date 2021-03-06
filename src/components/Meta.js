import React from 'react'
import { Helmet }  from 'react-helmet'

const Meta = ({title, description, keywords}) => {
    return (
        <Helmet>
        <title>
            {title} 
        </title>
            <meta 
                name='description' 
                content={description} 
            />
            <meta 
                name='keywords' 
                content={keywords}
            />
        </Helmet>
    )
}

Meta.defaultProps = {
    title: 'Welcome to e Market',
    description:'By cheap products in a hand range',
    keywords: 'electronics, by electronics, iPhone, laptop'
}

export default Meta
