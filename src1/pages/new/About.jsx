import React, { useState } from 'react'

const About = () => {

  // let name = "Simon";

  let [name, setName] = useState("Supgrade");

  function doSomething () {

    setName("Someone");
    console.log(name);
  }

  return (
    <div className="about">
      <h1>{name}</h1>
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Accusantium laudantium aliquid cum maxime obcaecati ut eligendi .
          <button onClick={doSomething}>Click</button>
      </div>
  )
}

export default About