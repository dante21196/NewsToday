
import './App.css';
import React,{Component} from 'react'
import News from './components/News'
import Navbar from './components/Navbar'
import {
   BrowserRouter as Router,
  Routes,
  Route,
  useLocation
  
} from 'react-router-dom'
// import LoadingBar from 'react-top-loading-bar';
function AppRoutes() {
  const location = useLocation();

  return (
    <Routes key={location.pathname}>
      <Route path="/" element={<News  pagesize={8} country="in" category="general" />} />
      <Route path="/business" element={<News  pagesize={8} country="in" category="business" />} />
      <Route path="/entertainment" element={<News  pagesize={8} country="in" category="entertainment" />} />
      <Route path="/health" element={<News  pagesize={8} country="in" category="health" />} />
      <Route path="/science" element={<News  pagesize={8} country="in" category="science" />} />
      <Route path="/sports" element={<News  pagesize={8} country="in" category="sports" />} />
      <Route path="/technology" element={<News  pagesize={8} country="in" category="technology" />} />
    </Routes>
  );
}

export default class App extends Component{
  // state={
  //   progress : 0
  // }
  // setProgress=(progess)=>{
  //    this.setState({
  //     progess : progess
  //    })
  // }

render(){
    return (
      <>
        <Router>
          <Navbar />
          {/* <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        onLoaderFinished={() => this.setProgress(0)}
      /> */}
          <AppRoutes />
        </Router>
      </>
    );
  }
}






