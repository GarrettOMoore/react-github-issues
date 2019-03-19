import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const PullRequests = (props) => {
  console.log("pull requesta", props)
    let pulls = '';
    if (Object.keys(props.requests.data).length === 0) {
        return (<p>LOADING PULL REQUESTS...</p>)
      } else {
        pulls = props.requests.data.map( (pull, index) => {
           return (
            <div className='info-main'>
                <Link className='link'to={`/PullRequests/${pull.number}`}><p className='title'key={index}>{pull.title } <FontAwesomeIcon className='link-icon' icon="link"/></p></Link>
                <a href={pull.user.html_url}><img className='user-pic'src={pull.user.avatar_url}/></a>
                <p className='user' key={index}> Posted By: {pull.user.login} on {pull.created_at} </p>
            </div>
           )
        })
      }

    return (
        <div>
          <h1 className='header'>PULL REQUESTS</h1>
          <a href='#bottom'><FontAwesomeIcon className='arrow' icon="arrow-alt-circle-down"/></a>
          {pulls}
        </div>
    )
}

export default PullRequests