import * as fs from 'fs'
import {Sequelize} from 'sequelize'

const DB_FILE = `database/${(new Date()).getTime()}.test.sqlite`

let testConn

beforeAll(() => {
  // Create the database connection.
  testConn = new Sequelize({
    dialect: 'sqlite',
    storage: DB_FILE,
  })
})

afterAll(() => {
  // Close the database connection and delete the sqlite db test file.
  testConn.close()
  fs.unlink(DB_FILE, err => {if (err) throw err})
})

test('Sqlite3 database is connectable', async () => {
  await testConn.authenticate()
})
