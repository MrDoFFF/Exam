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
    </div>
  )
}

export default NotFoundPage
