import {Link} from 'react-router-dom'
import React from 'react'

function Home() {
  return <>
  <h1>This is Home Page</h1>
  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati, esse dolores? Eveniet velit quidem dolorum. Explicabo maxime ullam in mollitia, sapiente deleniti alias totam facilis a! Accusamus sed quis quidem a iure, animi magnam reiciendis nemo voluptas error ullam quos consequuntur ipsam at qui ipsa officiis enim voluptatum mollitia ratione!</p>
  <Link to="/About">Go to About Page</Link>
    </>
}

export default Home