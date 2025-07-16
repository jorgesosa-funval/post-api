import { DataTypes, Model, Sequelize } from "sequelize";
import { sequelize } from "../../database/sequelize.js";

export class Products extends Model {}

/**
     * Configuración del campo id: 🚀
     *   - **type**: 'DataTypes.BIGINT' 🛠️
     *   - **BIGINT**: Utilizado para almacenar números enteros grandes. 📊 
     *   - Nota: Usa el mismo tipo de dato para llaves foráneas (ej: 'id BIGINT UNSIGNED'). 🔑
     *   - **autoIncrement**: true 🔄
     *   - Incrementa automáticamente el valor cada vez que se inserta un nuevo registro. 📈
     *   - **primaryKey**: true 🏷️
     *   - Define este campo como la clave primaria de la tabla. 🗂️
*/
 
Products.init(
  {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    cost: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    stock: {
        type:DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    status: {
        type: DataTypes.BOOLEAN,
        allowNull: false, 
        defaultValue: true
    } 
  },
  {
    sequelize,
    modelName: "products",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);
