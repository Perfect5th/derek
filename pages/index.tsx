import {GetServerSideProps} from 'next'
import * as React from 'react'

import {Category} from '../models/category'
import {initialize} from '../models'
import Box from './box'


// initializes the DB
// TODO: don't do this here.
export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const sequelize = initialize('sqlite', 'database/db.sqlite')
    await sequelize.sync()
    return {props: {categories: await Category.findAll()}}
  } catch (error) {
    console.error(error)
    return {props: {categories: []}}
  }
}

const HomePage: (props: {categories: Category[], sessions: Record<string, unknown>[]}) => React.ReactNode =
  ({categories, sessions}) => (
    <ul>
      <Box/>
      <Box/>
      <Box/>
      <Box/>
      {categories.length > 0 && "Categories exist"}
      {sessions && sessions.map((session, i) => (
        <li key={i}>{session.name}</li>
      ))}

      <style jsx>{`
        @tailwind base;

        // Add global base styles here

        @tailwind components;
        @tailwind utilities;
      `}</style>
    </ul>
  )

export default HomePage
