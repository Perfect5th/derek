import * as fs from 'fs'
import {initialize} from '..'

import {Category} from '../category'

const DB_FILE = `database/${(new Date()).getTime()}.test.sqlite`

let sequelize

beforeAll(() => {
  // Create the database connection and init models
  sequelize = initialize('sqlite', DB_FILE)
})

afterAll(() => {
  // Close the database connection and delete the sqlite db test file.
  sequelize.close()
  fs.unlink(DB_FILE, err => {if (err) throw err})
})

test('Sqlite3 database syncs Category Model.', async () => {
  await Category.sync()
})

test('Create a Category with no parents.', async () => {
  await Category.create({name: 'Test Category'})
})
