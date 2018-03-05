import React from 'react'
import Head from 'next/head'

import './style.scss'

export default Component => {
  return class extends React.PureComponent {
    render() {
      return (
        <main>
          <Head>
            <link rel="stylesheet" href="/_next/static/style.css" />
          </Head>
          <Component {...this.props} />
        </main>
      )
    }
  }
}
