import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {

 //use constructor for the class rander

  constructor() {
    super();
    this.state = {
      articles: [],
      page: 1,
      loading: false,
    };
  }

  //use life cycle method for the fatch the api

  async componentDidMount() {
    let Url =
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=77719c4419594f18b76ec8e3dd22ae61";
    let data = await fetch(Url);
    let parseddata = await data.json();
    console.log(parseddata);

    this.setState({
      articles: parseddata.articles,
      totalResults: parseddata.totalResults,
    });
  }

  // here previous button logic

  PreviousButton = async () => {
    console.log("previous");
    let Url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=77719c4419594f18b76ec8e3dd22ae61&page=${
      this.state.page - 1
    }&pagesize=20`;
    let data = await fetch(Url);
    let parseddata = await data.json();

    this.setState({
      articles: parseddata.articles,
      page: this.state.page - 1,
    });
  };

  // here next button logic

  NextButton = async () => {
    console.log("next");

    if (this.state.page + 1 > Math.ceil(this.state.totalResults / 20)) {
      //use math.ceil for the round of the total page size  cuz render the page equal number of page size
    } else {
      let Url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=77719c4419594f18b76ec8e3dd22ae61&page=${
        this.state.page + 1
      }&pagesize=20`;
      let data = await fetch(Url);
      let parseddata = await data.json();
      console.log(parseddata);

      this.setState({
        articles: parseddata.articles,
        page: this.state.page + 1,
      });
    }
  };

  render() {
    return (
      <>
        <div className="container my-3">
          <h2>NEWSHUB - Top news here</h2>
          <div className="d-flex flex-row flex-wrap">
            {this.state.articles.map((element) => {
              return (
                <div className="col-md-04 my-3 mx-3 flex-1" key={element.url}>
                  <NewsItem
                    title={element.title}
                    description={element.description}
                    ImageUrl={element.urlToImage}
                    url={element.url}
                  />
                </div>
              );
            })}
            <div className="container d-flex justify-content-between">
              <button
                type="button "
                class="btn btn-dark "
                onClick={this.PreviousButton}
              >
                Previous
              </button>
              <button
                type="button"
                class="btn btn-dark"
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
