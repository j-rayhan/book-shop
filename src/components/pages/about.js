"use strict"
import React, { Component } from 'react';

class About extends Component {
  render(){
    return (
      <div>
        <h1 className="text-center home-title">About</h1>
        <p>This is a Book Shop application build on React. I have built this
          for the complete React Web app Developer Course</p>
          <ul>
            <li>
              <a href="https://reactjs.org/"> React </a> - This was the JavaScript framework used.
            </li>
            <li>
              <a href="https://www.mongodb.com">MongoDB</a> - I used MongoDB to store and show data from
              <a href="http://mlab.com"> Mlab</a>.
            </li>
          </ul>
      </div>
    );
  }
};

export default About;
