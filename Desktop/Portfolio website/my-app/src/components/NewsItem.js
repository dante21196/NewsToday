import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
    let {title,description,imgUrl,newsUrl,author,details,source} = this.props;
    

    return (
      <div>
        <div className="card" style={{width: '18rem'}}>
  <img className="card-img-top" src={imgUrl} alt="Card" />
  <div className="card-body">
  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    {source}
    <span className="visually-hidden">"Source"</span>
  </span>
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <p className="card-text">By {!author?"unknown":author} on {new Date(details).toGMTString()}</p>
    <a href={newsUrl} className="btn btn-primary">Read More</a>
  </div>
</div>
      </div>
    )
  }
}
