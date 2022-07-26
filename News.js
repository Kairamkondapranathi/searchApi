import React, {useEffect, useState} from 'react'
import NewsItem from './NewsItem'

const News = ({ data }) => {
  const [articles, setArticals] = useState([]);
  //const [loading, setLoading] = useState(true)

  const updateNews = async () => {
    const url = "https://newsapi.org/v2/everything?q=apple&from=2022-07-05&to=2022-07-05&sortBy=popularity&apiKey=9da497e0530c4fd6abffcdead497fd45";
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticals(parsedData.articles);
    //setLoading(false)
  };

  useEffect(() => {
    updateNews();
  }, []);

  useEffect(() => {
    if (data.length > 0) {
      setArticals(data);
    }
  }, [data]);

  return (
    <div className="container my-3">
      <h1>Top Headlines</h1>
      <div className="row">
        {articles.map((element) => {
          return (
            <div className="col-md-4" key={element.url}>
              <NewsItem
                title={element.title ? element.title.slice(0, 45) : ""}
                description={
                  element.description ? element.description.slice(0, 88) : ""
                }
                imageUrl={element.urlToImage}
                newsUrl={element.url}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default News