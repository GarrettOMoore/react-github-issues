import React from 'react';
import ReactMarkdown from 'react-markdown';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'


const ShowOne = (props) => {
    console.log("SHOW ONE", props.issues.data)
    console.log(props.match.params.id)
    let post;
    if (Object.keys(props.issues).length === 0) {
        return (<p>LOADING...</p>)
      } else {
        post = props.issues.data.find( (issue) => {
        return issue.number === parseInt(props.match.params.id)
        })
      }
    return <div>
              <Link className='back'to='/Show'>Back to Index</Link>
              <h1>{post.title}</h1>
              <h1>#{post.number}</h1>
              <a href={post.user.html_url}><img className='user-pic'src={post.user.avatar_url}/></a>
              <h4>Posted by: {post.user.login}</h4>
              <ReactMarkdown className='body'source={post.body} />
            </div>
}

export default ShowOne