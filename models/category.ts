import {
  Association,
  DataTypes,
  HasManyGetAssociationsMixin,
  HasManyAddAssociationMixin,
  HasManyHasAssociationMixin,
  HasManyCountAssociationsMixin,
  HasManyCreateAssociationMixin,
  Model,
  Optional,
} from 'sequelize'

interface CategoryAttributes {
  id: number
  name: string
}

export class Category extends Model<CategoryAttributes, Optional<CategoryAttributes, 'id'>>
  implements CategoryAttributes {
  public id!: number
  public name!: string

  // timestamps provided by sequelize
  public readonly createdAt!: Date
  public readonly updatedAt!: Date

  public getParents!: HasManyGetAssociationsMixin<Category>
  public addParent!: HasManyAddAssociationMixin<Category, number>
  public hasParent!: HasManyHasAssociationMixin<Category, number>
  public countProjects!: HasManyCountAssociationsMixin
  public createParent!: HasManyCreateAssociationMixin<Category>

  public readonly parents?: Category[]

    public static associations: {
      parents: Association<Category, Category>
    }
}

export const categoryInit = {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: new DataTypes.STRING(128),
    allowNull: false,
  },
}
