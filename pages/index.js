import React from 'react'
import { withData } from 'next-apollo-hoc'

@withData
export default class extends React.Component {
  render() {
    return (
      <div className="container">
        <h1>Home page</h1>
      </div>
    )
  }
}
