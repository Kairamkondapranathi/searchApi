import './App.css';
import React, {Component} from 'react'
import NavBar from './components/NavBar';
import News from './components/News';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
    };
  }

  getArticles = (data) => {
    if(data.length > 0) {
      this.setState({
        articles: data,
      });
    } else {
      this.setState({
        articles: [],
      });
    }
   
  }

  render() {
    return (
      <div>
        <NavBar getArticles={this.getArticles} />
        <News data={this.state.articles}/>
      </div>
    );
  }
}


  
