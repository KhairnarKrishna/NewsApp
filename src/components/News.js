import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class news extends Component {

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
    };
  };

  async componentDidMount(){
    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=de425bb483c3442aa249a91fac773eed";
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({articles: parsedData.articles})
  };

  render() {
    return (
      <div className="container my-3">
        <h2>Pigeon News - Top Headlines</h2>

        <div className="row">
        {this.state.articles.map((element)=>{
          return <div className="col-md-3"key={element.url}>
                  <NewsItem
                    title={element.title?element.title.slice(0, 45):""}
                    description={element.description?element.description.slice(0, 88):""}
                    imgUrl={element.urlToImage?element.urlToImage:"https://www.livemint.com/lm-img/img/2024/04/27/1600x900/Q4_results_2024_Yes_Bank_Q4_results_today_1714186347125_1714186347357.jpg"}
                    newsUrl={element.url?element.url:""}
                  />
                </div>
        })}

          
        </div>
      </div>
    );
  }
}

export default news;
