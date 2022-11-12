import {Link} from 'react-router-dom'
function Error(){
    return(
        <div>
            <h1>Opps ! Page not fount</h1>
            <Link to="/">Go to Home Page</Link>
        </div>
    )
}

export default Error