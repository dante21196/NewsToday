import React, { Component } from 'react'
import loading from "./Search.gif"
export default class Spinner extends Component {
  render() {
    return (
      <div className='container text-center my-2'>
        <img src={loading} alt="..."/>
      </div>
    )
  }
}
