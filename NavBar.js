import React, {useState, useEffect} from 'react'
import Category from './Country'
import Country from './Category'
import Search from './Search'

const NavBar = ({ getArticles }) => {
  const [selectedCountry, setSelectedCountry] = useState();
  const [selectedCategory, setSelectedCategory] = useState();
  const [articles, setArticals] = useState([]);

  const getCountry = (value) => {
    setSelectedCountry(value);
  };

  const getCategory = (value) => {
    setSelectedCategory(value);
  };

  const updateArticles = async () => {
    if (selectedCategory && selectedCountry) {
      const url = `https://newsapi.org/v2/top-headlines?country=${selectedCountry}&category=${selectedCategory}&apiKey=9da497e0530c4fd6abffcdead497fd45`;
      let data = await fetch(url);
      let parsedData = await data.json();
      setArticals(parsedData.articles);
    }
  };

  useEffect(() => {
    getArticles(articles);
  }, [articles]);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            News API
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <Category getCategory={getCategory} />
              </li>
              <li className="nav-item">
                <Country getCountry={getCountry} />
              </li>
              <li className="nav-item">
                <Search update={updateArticles} />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};



export default NavBar
