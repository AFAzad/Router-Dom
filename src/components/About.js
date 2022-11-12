import React from "react";

import { Link } from "react-router-dom";

function About() {
  return (
    <>
      <h1>This is About Page</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam autem,
        porro eaque dolor distinctio quia, ipsa doloribus maiores necessitatibus
        sunt vero neque maxime ipsum praesentium quo vitae! Ad iusto cumque
        libero asperiores officiis mollitia! Fugiat modi fugit corporis autem,
        voluptatibus tempore! Quidem deleniti voluptatem vitae iste provident?
        Facilis quaerat, blanditiis hic dolorum earum recusandae! Soluta
        officiis molestias doloremque repellat excepturi!
      </p>
      <li>
        <Link to="/User/Abul">Abul</Link>
      </li>
      <li>
        <Link to="/User/Umar">Umar</Link>
      </li>
      <Link to="/">Go to Home Page</Link>
    </>
  );
}

export default About;
