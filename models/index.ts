import {Dialect, Sequelize} from 'sequelize'

import {Category, categoryInit} from './category'

// Initiate the connection to sqlite3 database
export const initialize = (dialect: Dialect, storage: string): Sequelize => {
  const sequelize = new Sequelize({dialect, storage})

  Category.init(categoryInit, {tableName: 'categories', sequelize})
  Category.belongsToMany(Category, {
    as: 'parents',
    through: 'category_parents',
  })

  return sequelize
}
