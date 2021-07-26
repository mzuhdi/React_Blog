import React from 'react'
import { useHistory } from 'react-router-dom'

const NotFound = () => {

    const history = useHistory();

    return (
        <div className="not-found">
            <h2>Sorry</h2>
            <p>The page you're looking for is not found</p>
            <button onClick={() => history.push('/')}>Back to hompage</button>
        </div>
    )
}

export default NotFound
