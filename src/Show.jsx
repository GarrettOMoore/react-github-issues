import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Show = (props) => {
    console.log("INDEX PAGE", props.issues.data)
    let titles = '';
    if (Object.keys(props.issues).length === 0) {
        return (<p>LOADING ISSUES...</p>)
      } else {
        titles = props.issues.data.map( (issue, index) => {
           return (
            <div className='info-main'>
                <Link className='link'to={`/Show/${issue.number}`}><p className='title'key={index}>{issue.title } <FontAwesomeIcon className='link-icon' icon="link"/></p></Link>
                <a href={issue.user.html_url}><img className='user-pic'src={issue.user.avatar_url}/></a>
                <p className='user' key={index}> Posted By: {issue.user.login} on {issue.created_at} </p>
            </div>
           )
        })
      }

    return (
        <div>
          <button><Link className='button'to='/Show'>OPEN ISSUES</Link></button> 
          <button><Link className='button'to='/Show'>CLOSED ISSUES</Link></button> 
        <h1 className='header'>100 Open Issues:</h1>
        <a href='#bottom'><FontAwesomeIcon className='arrow' icon="arrow-alt-circle-down"/></a>
        {titles}
        </div>
    )
}

export default Show