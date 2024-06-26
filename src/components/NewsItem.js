import React, { Component } from 'react'

export class NewsItem extends Component {


  render() {
    let {title, description, imgUrl, newsUrl} = this.props;
    return (
      <div className='container my-3'>
        <div className="card" style={{width: "18rem"}}>
          <img src={imgUrl} className="card-img-top" alt="..." style={{width:"100%", height: "200px"}} />
          <div className="card-body">
            <h5 className="card-title">{title} ...</h5>
            <p className="card-text">{description} ...</p>
            <a href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
