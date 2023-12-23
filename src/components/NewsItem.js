import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, ImageUrl, url, date, author } = this.props;
    return (
      <div>
        <div className="card" style={{ width: "25rem" }}>
          <img src={ImageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-title">

              {/* //add date and author and convert date into GMT string */}

              <small className="text-muter">
                By {!author ? "Unknown" : author} on
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a href={url} className="btn btn-sm btn-dark">
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
