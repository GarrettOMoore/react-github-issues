import React, { Component } from 'react';
import Landing from './Landing'
import Show from './Show'
import ShowOne from './ShowOne'
import PullRequests from './PullRequests'
import RequestView from './RequestView'
import axios from 'axios'
import navimg from './nav.png'
import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare, faCoffee, faArrowAltCircleDown, faLink} from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheckSquare, faCoffee, faArrowAltCircleDown, faLink)

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      return: {},
      pulls: {}
    }
  }



  componentDidMount() {

    // function getOpenIssues() {
    //     let url = 'https://api.github.com/repos/facebook/react/issues?page=1&per_page=100'
    //     return axios.get(url)
    //   }

    // function getClosedIssues() {
    //   let url = 'https://api.github.com/repos/facebook/react/issues?state=closed'
    //   return axios.get(url)
    // }

    // function getPullRequests() {
    //   let url = 'https://api.github.com/repos/facebook/react/pulls?page=1&per_page=100'
    //   return axios.get(url)
    // }
    
    // axios.all([getOpenIssues(), getClosedIssues(), getPullRequests()])
    //   .then(axios.spread(function (open, closed, pulls) {
    // console.log("AXIOS DOUBLE CALL COMPLETE")
    // this.setState({
    //     open: open,
    //     closed: closed
    //     pulls: pulls
    //   })
    // }).catch(err => console.log(err)));

    let url = 'https://api.github.com/repos/facebook/react/issues?page=1&per_page=100'
    axios.get(url).then( response => {
      console.log("ALL", response)
      this.setState({
        return: response
      })
    }).catch(err => console.log(err))



    let endPoint = 'https://api.github.com/repos/facebook/react/pulls?page=1&per_page=100'
    axios.get(endPoint).then( response => {
      console.log("second axios call finished")
      this.setState({
        pulls: response
      })
    }).catch(err => console.log(err))
  }

  render() {
    return (
      <Router>
      <div className="App">
      <img src={navimg} alt="Logo" />
        <nav>
          <Link className='header'to='/'>Home</Link>
        </nav>
        <Route exact path='/' component={Landing} />
        <Route exact path='/Show' render={ () => <Show issues={this.state.return} /> } />
        <Route exact path='/Show/:id' render={ (props) => <ShowOne issues={this.state.return} {...props} /> } />
        <Route exact path='/PullRequests' render={ () => <PullRequests requests={this.state.pulls} /> } />
        <Route exact path='/PullRequests/:id' render={ (props) => <RequestView requests={this.state.pulls} {...props} /> } />
      <a className='top'href='#'><FontAwesomeIcon id='bottom' icon="coffee"/></a>
      </div>
      </Router>
    );
  }
}

export default App;
