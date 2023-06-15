import React from 'react'
import Middle1 from './Middle1'
import Ready from './Ready'


const Section = () => {
  return (
    <div>
        <Middle1 size={600}  color="#F2ECE8" image="https://transfergalaxy.com/media/4503836/othergirl.jpg" img={true}/>
        <Middle1 size={500}  image="https://transfergalaxy.com/images/rebranding/security-check.svg"/>
        <Ready size={400} color="#e69655" image="https://transfergalaxy.com/images/rebranding/security-check.svg"/>
       
    </div>
  )
}

export default Section
