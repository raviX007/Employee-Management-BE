// module.exports = (sequelize, Sequelize) => {
//   const Tutorial = sequelize.define("tutorial", {
//     title: {
//       type: Sequelize.STRING
//     },
//     description: {
//       type: Sequelize.STRING
//     },
//     published: {
//       type: Sequelize.BOOLEAN
//     }
//   });

//   return Tutorial;
// };
// const { Sequelize, DataTypes } = require('sequelize');
// const sequelize = new Sequelize({
//   dialect: 'postgres', // Use the appropriate dialect for your database
//   host: 'localhost',
//   username: 'postgres',
//   password: 'root',
//   database: 'postgres'
// });

module.exports = (sequelize, Sequelize) => {
  const Employee = sequelize.define("employee", {
  emp_id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  emp_name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  emp_sal: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  dept_name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  dept_id: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  emp_phn: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
},{
  
  tableName:'employees',
});

return Employee;
};
