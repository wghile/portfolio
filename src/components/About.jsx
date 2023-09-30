import React from 'react'

export default function About() {
  return (
    <div className='About'>
      <div id='edu'>
        <h2>
          Education
        </h2>
        <p id='section-title'>
          Per Scholas Software Engineering Training
        </p>
        <ul>
          <li>
            15-week course teaching React, Node, Express, design patterns & system architecture
          </li>
        </ul>
      </div>
      <div id='hobby'>
        <h2>
          Hobbies
        </h2>
        <p id='hobby-title'>
          Gardening, Reading, Hikes/Long Walks
        </p>
        <div id='images'>
          <img className='images' src='/images/garden.png' alt='Garden' />
          <img className='images' src='/images/walk.png' alt='Hike' />
        </div>
      </div>
    </div>
  )
}
