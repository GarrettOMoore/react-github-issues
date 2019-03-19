import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Landing = (props) => {
    return (
        <div>
            <h1 className='header'><FontAwesomeIcon icon="coffee"/>  GITHUB ISSUES  <FontAwesomeIcon icon="coffee"/></h1>
            <button><Link className='button'to='/Show'>GO TO ISSUES</Link></button> <br/>
            <button><Link className='button'to='/PullRequests'>GO TO PULL REQUESTS</Link></button>
        </div>
    )
}
export default Landing