import React from 'react';
import ReactMarkdown from 'react-markdown';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'


const RequestView = (props) => {
    let request;
    if (Object.keys(props.requests).length === 0) {
        return (<p>LOADING REQUEST...</p>)
    } else {
        request = props.requests.data.find( (request) => {
        return request.number === parseInt(props.match.params.id)
        })
      }
    return <div>
              <Link className='back'to='/PullRequests'>Back to Index</Link>
              <h1>{request.title}</h1>
              <h1>#{request.number}</h1>
              <a href={request.user.html_url}><img className='user-pic'src={request.user.avatar_url}/></a>
              <h4>Posted by: {request.user.login} on {request.created_at}</h4>
              <ReactMarkdown className='body'source={request.body} />
          </div>
}

export default RequestView