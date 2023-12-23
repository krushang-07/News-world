import React, { Component } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NewsItem from "./components/NewsItem";
//import NewsItem from "./components/NewsItem";

export class App extends Component {
  constructor() {
    super();
  //  this.se = this.se.bind(this);
   // this.f = this.f.bind(this);
    this.state = {
      articles: [],
      page: 1,
      loading: false,
      search: "",
     // resultSet: [],
    };
  }
  async se(value) {
    console.log(value);
    this.setState({ search: value });
  }
  async componentDidMount() {
    let Url =
      "https://newsapi.org/v2/everything?q=tesla&from=2023-11-18&sortBy=publishedAt&apiKey=77719c4419594f18b76ec8e3dd22ae61";
    let data = await fetch(Url);
    let parseddata = await data.json();
    console.log(parseddata);

    this.setState({
      articles: parseddata.articles,
      totalResults: parseddata.totalResults,
    });
  }

  async f() {
    setTimeout(() => {
      const result = this.state.articles.filter(
        (article) =>
          article.title.toLowerCase() === this.state.search.toLowerCase()
      );
      this.setState = {
        resultSet: result,

      };
      console.log(this.resultSet);
    }, 1000);
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <NavBar se={this.se} f={this.f} />
          {/* {this.state.articles.map((element) => {
            return <News key="home" pagesize={9} country="in" category="" />;
          })}
          ; */}
          {this.resultSet && this.resultSet.map((article) => (
            <NewsItem
              key={article.id}
              title={article.title}
              description={article.description}
              imageUrl={article.imageUrl}
              url={article.url}
              date={article.date}
              author={article.author}
            />
          ))}

          <Routes>
            {/* <Route
            exect path="/"
              element={this.state.articles.map((e) => {
              
              return (<NavBar search={e.source.name}/>);
            })}
         
            /> */}
            <Route
              exect
              path="/"
              element={
                <News key="home" pagesize={9} country="in" category="" />
              }
            />
            <Route
              exect
              path="/general"
              element={
                <News
                  key="general"
                  pagesize={9}
                  country="in"
                  category="general"
                />
              }
            />
            <Route
              exect
              path="/business"
              element={
                <News
                  key="business"
                  pagesize={9}
                  country="in"
                  category="business"
                />
              }
            />
            <Route
              exect
              path="/science"
              element={
                <News
                  key="science"
                  pagesize={9}
                  country="in"
                  category="science"
                />
              }
            />
            <Route
              exect
              path="/health"
              element={
                <News
                  key="health"
                  pagesize={9}
                  country="in"
                  category="health"
                />
              }
            />
            <Route
              exect
              path="/sports"
              element={
                <News
                  key="sports"
                  pagesize={9}
                  country="in"
                  category="sports"
                />
              }
            />
            <Route
              exect
              path="/entertainment"
              element={
                <News
                  key="entertainment"
                  pagesize={9}
                  country="in"
                  category="entertainment"
                />
              }
            />

            <Route
              exect
              path="/technology"
              key="technology"
              element={<News pagesize={9} country="in" category="technology" />}
            ></Route>
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
