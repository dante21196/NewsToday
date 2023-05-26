import React from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';
import { useState } from 'react';
import { useEffect } from 'react';
const News = (props) => {

  const [articles,setArticles]=useState([]);
  const [page,setPage]=useState(1);
  const [loading,setLoading]=useState(false);
  const [totalResults,setTotalResults]=useState(0);
  
 const updateNews= async()=>{
 
  let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=35a26bd897ee402195c7d08efaf2e463&page=${page}&pageSize=${props.pageSize}`;
  console.log(url)
  setLoading(true)
  let data=await fetch(url);
  let parsedData= await data.json();
  
  
      setArticles(parsedData.articles)
      setLoading(false)
      setTotalResults(parsedData.totalResults)
        
 
  
 }
   useEffect(()=>{
    updateNews()
   },[])
  const prevPage= async()=>{
   
        
    setPage(page-1)
        
        updateNews()    
  }
  const nextPage = async()=>{
    
       setPage(page+1)
        
        updateNews()
        
        
    
  }
  // changeCountry = async (country)=>{
  //   if(this.state.page<Math.ceil(this.state.totalResults/props.pageSize))
  //   {
  //     let url=`https://newsapi.org/v2/top-headlines?country=${country}&category=${props.category}&apiKey=35a26bd897ee402195c7d08efaf2e463&page=${this.state.page+1}&pageSize=${props.pageSize}`;
       
  //            this.setState({
  //         loading : true
  //       })
        

  //       let data=await fetch(url);
  //       let parsedData= await data.json();
  //       console.log(data);
  //       this.setState({
  //           articles : parsedData.articles,
  //           loading: false
  //       }
  //       )
     
  //   }
  // }
   const  fetchMoreData = async()=>{
    
    setPage(page+1)
  let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=35a26bd897ee402195c7d08efaf2e463&page=${page}&pageSize=${props.pageSize}`;
  console.log(url)
  setLoading(true)
  let data=await fetch(url);
  let parsedData= await data.json();
  
  
     setArticles(articles.concat(parsedData.articles))
      setLoading(false)
      setTotalResults(parsedData.totalResults)
        }
  
  
  
  

  
    
    return (
     <>
      
    <h1 className='text-center my-3'>News Today: Top {props.category} Headlines</h1>
    
      <InfiniteScroll
    dataLength={articles.length}
    next={fetchMoreData}
    hasMore={true}
    loader={<Spinner/>}
    scrollableTarget="scrollableDiv"
  >
  <div className="container my-2">
    <div className="row my-3">
        {articles.map((element) => {
            return <div className="col-md-4 my-3" key={element.url}>
                <NewsItem title={element.title} key={element.url}  description={element.description} imgUrl={element.urlToImage} newsUrl={element.url} author={element.author} details={element.publishedAt} source={element.source.name}/>
            </div>
            
            
        })}
      </div>
      </div>
      </InfiniteScroll> 
      
      </>
    )
  }



News.defaultProps = {
  country: "in",
  category: "business",
  pageSize: 8,
  
}  
News.propTypes = {
  country:PropTypes.string,
  category: PropTypes.string,
  pageSize: PropTypes.number
}

export default News;