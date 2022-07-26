import React from 'react'   

const NewsItem = (props) => {
    let  {title, description, imageUrl, newsUrl} = props;
  
    return (
    <div className="my-3">
     <div className="card" style={{width: "18rem"}}>
   <img src={imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}...</h5>
    <p className="card-text">{description}...</p>
    <a href={newsUrl} target="_blank" class="btn btn sm btn-primary" rel="noreferrer">Read more</a>
  </div>
</div>
      </div>
  );
};

export default NewsItem