import React, { Component } from "react";
import NewsItem from "./NewsItem";
import PropTypes from "prop-types";
//import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps = {
    //pagesize: 6,
    country: "in",
    category: "general",
  };

  PropTypes = {
    pagesize: PropTypes.number,
    country: PropTypes.string,
    category: PropTypes.string,
  };

  //use constructor for the class rander
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      page: 1,
     // loading: false,
      totalResults: 0,
    };

    document.title = `${this.props.category} - NewsHub`;
  }

  // for the refector the code and reduce the line of code

  async updatenews() {
    let Url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=77719c4419594f18b76ec8e3dd22ae61&pagesize=${this.props.pagesize}`;
    let data = await fetch(Url);
    let parseddata = await data.json();
    console.log(parseddata);

    this.setState({
      articles: parseddata.articles,
      totalResults: parseddata.totalResults,
    });
    // console.log(this.articles);
  }

  //use life cycle method for the fatch the api

  async componentDidMount() {
    this.updatenews();

    // let Url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=77719c4419594f18b76ec8e3dd22ae61&pagesize=${this.props.pagesize}`;
    // let data = await fetch(Url);
    // let parseddata = await data.json();
    // console.log(parseddata);

    // this.setState({
    //   articles: parseddata.articles,
    //   totalResults: parseddata.totalResults,
    // });
  }

  // here previous button logic

  PreviousButton = async () => {
    this.setState({
      // articles: parseddata.articles,
      page: this.state.page - 1,
    });

    this.updatenews();

    // console.log("previous");
    // let Url = `https://newsapi.org/v2/top-headlines?country=${
    //   this.props.country
    // }&category=${
    //   this.props.category
    // }&apiKey=77719c4419594f18b76ec8e3dd22ae61&page=${
    //   this.state.page - 1
    // }&pagesize=${this.props.pagesize}`;
    // let data = await fetch(Url);
    // let parseddata = await data.json();
  };

  // here next button logic

  NextButton = async () => {
    // console.log("next");

    this.setState({
      // articles: parseddata.articles,
      page: this.state.page + 1,
    });
    this.updatenews();

    // if (
    //   this.state.page + 1 >
    //   Math.ceil(this.state.totalResults / this.props.pagesize)
    // ) {
    //   //use math.ceil for the round of the total page size  cuz render the page equal number of page size
    // } else {
    //   let Url = `https://newsapi.org/v2/top-headlines?country=${
    //     this.props.country
    //   }&category=${
    //     this.props.category
    //   }&apiKey=77719c4419594f18b76ec8e3dd22ae61&page=${
    //     this.state.page + 1
    //   }&pagesize=${this.props.pagesize}`;
    //   let data = await fetch(Url);
    //   let parseddata = await data.json();
    //   console.log(parseddata);
  };
  // fetchMoreData = async () => {
  //   this.setState({
  //     page: this.state.page + 1,
  //   });
  //   let Url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=77719c4419594f18b76ec8e3dd22ae61&pagesize=${this.props.pagesize}`;
  //   let data = await fetch(Url);
  //   let parseddata = await data.json();
  //   console.log(parseddata);

  //   this.setState({
  //     articles: this.state.articles.concat(parseddata.articles),
  //     totalResults: parseddata.totalResults,
  //   });
  // };

  render() {
    return (
      <>
        <div className="container my-3 ">
          <h2 style={{ textAlign: "center" }}>
            NEWSHUB - Top news from {this.props.category}
          </h2>
          <div className="d-flex flex-row flex-wrap">
          
              {this.state.articles.map((element) => {
                return (
                  <div className="col-md-04 my-3 mx-3 flex-1" key={element.url}>
                    <NewsItem
                      title={element.title}
                      description={element.description}
                      ImageUrl={
                        !element.urlToImage
                          ? "http://3.bp.blogspot.com/_rlMwO0Lrlw4/TN78CQrVqYI/AAAAAAAAAMw/61P0Q4Uli30/s1600/NotAvailable.jpg"
                          : element.urlToImage
                      }
                      url={element.url}
                      author={element.author}
                      date={element.publishedAt}
                    />
                  </div>
                );
              })}
            <div className="container d-flex justify-content-between">
              <button
                type="button "
                className="btn btn-dark "
                onClick={this.PreviousButton}
                disabled={this.state.page < 1}
              >
                Previous
              </button>
              <button
                type="button"
                className="btn btn-dark"
                onClick={this.NextButton}
              >
                next
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default News;
