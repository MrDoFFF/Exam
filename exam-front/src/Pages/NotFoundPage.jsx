import React from 'react'
import { Helmet } from 'react-helmet'

function NotFoundPage() {
  return (
    <div>
      <Helmet>
                <meta charSet="utf-8" />
                <title>404</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <h1 style={{position:'absolute', top:'50%' , left:'50%'}}>404 not found page</h1>
    </div>
  )
}

export default NotFoundPage
