import * as React from 'react'
import { Category } from '../models/category'



const HomePage = ({sessions}) => {
  
  return (
    <ul>
      { Category && "Category exists"}
      {sessions && sessions.map(session => (
        <li>{session.name}</li>
      ))}
    </ul>
  )
}

export default HomePage
