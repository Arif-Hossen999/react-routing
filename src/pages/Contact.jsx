import React from 'react'
import { useNavigate } from 'react-router-dom'

const Contact = () => {
  const navigate = useNavigate()
  return (
    <div>
      <h1>Contact Page</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi nostrum voluptatibus aliquid consectetur et ipsa vel autem vitae delectus fuga? Inventore tempora blanditiis omnis at beatae fugit harum dolor amet!</p>
      <button onClick={() => navigate("/")}>Go to Home</button>
    </div>
  )
}

export default Contact
