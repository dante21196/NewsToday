import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';
export default class News extends Component {
static defaultProps = {
  country: "in",
  category: "business",
  pageSize: 8,
  
}  
static propTypes={
  country:PropTypes.string,
  category: PropTypes.string,
  pageSize: PropTypes.number
}

 async updateNews(){
 
  console.log(this.state.page+ "update News");
  let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=35a26bd897ee402195c7d08efaf2e463&page=${this.state.page}&pageSize=${this.props.pageSize}`;
  console.log(url)
  this.setState({loading : true})
  let data=await fetch(url);
  let parsedData= await data.json();
  
  this.setState({
      articles : parsedData.articles,
      loading: false,
      totalResults : parsedData.totalResults,
        }
  )
  
 }
    async componentDidMount(){
      
       this.updateNews()
    }
  prevPage= async ()=>{
   
        
        await this.setState({page: this.state.page-1 });
        console.log(this.state.page + "Prev Page")
        this.updateNews()    
  }
  nextPage = async ()=>{
    
       await this.setState({page: this.state.page+1});
        console.log(this.state.page + "Next Page")
        this.updateNews()
        
        
    
  }
  // changeCountry = async (country)=>{
  //   if(this.state.page<Math.ceil(this.state.totalResults/this.props.pageSize))
  //   {
  //     let url=`https://newsapi.org/v2/top-headlines?country=${country}&category=${this.props.category}&apiKey=35a26bd897ee402195c7d08efaf2e463&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
       
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
  fetchMoreData = async()=>{
    
    await this.setState({page: this.state.page+1})
    console.log(this.state.page+ "scroll News");
  let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=35a26bd897ee402195c7d08efaf2e463&page=${this.state.page}&pageSize=${this.props.pageSize}`;
  console.log(url)
  this.setState({loading : true})
  let data=await fetch(url);
  let parsedData= await data.json();
  
  await this.setState({
      articles : this.state.articles.concat(parsedData.articles),
      loading: false,
      totalResults : parsedData.totalResults,
        }
  )
  
  }
  
constructor(props){
super(props);

this.state={
   articles : [],
   loading : false,
   totalResults : 0,
   page: 1

}
document.title = `${this.props.category} - News Today`
}
  render() {
    
    return (
     <>
      
    <h1 className='text-center my-3'>News Today: Top {this.props.category} Headlines</h1>
    
      <InfiniteScroll
    dataLength={this.state.articles.length}
    next={this.fetchMoreData}
    hasMore={true}
    loader={<Spinner/>}
    scrollableTarget="scrollableDiv"
  >
  <div className="container my-2">
    <div className="row my-3">
        {this.state.articles?.map((element) => {
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
}
