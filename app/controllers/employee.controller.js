// const db = require("../models");
// const Tutorial = db.employee;
// const Op = db.Sequelize.Op;

// // Create and Save a new Tutorial
// exports.create = (req, res) => {
//   // Validate request
//   if (!req.body.title) {
//     res.status(400).send({
//       message: "Content can not be empty!"
//     });
//     return;
//   }

//   // Create a Tutorial
//   const tutorial = {
//     title: req.body.title,
//     description: req.body.description,
//     published: req.body.published ? req.body.published : false
//   };

//   // Save Tutorial in the database
//   Tutorial.create(tutorial)
//     .then(data => {
//       res.send(data);
//     })
//     .catch(err => {
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while creating the Tutorial."
//       });
//     });
// };

// // Retrieve all Tutorials from the database.
// exports.findAll = (req, res) => {
//   const title = req.query.title;
//   var condition = title ? { title: { [Op.iLike]: `%${title}%` } } : null;

//   Tutorial.findAll({ where: condition })
//     .then(data => {
//       res.send(data);
//     })
//     .catch(err => {
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while retrieving tutorials."
//       });
//     });
// };

// // Find a single Tutorial with an id
// exports.findOne = (req, res) => {
//   const id = req.params.id;

//   Tutorial.findByPk(id)
//     .then(data => {
//       res.send(data);
//     })
//     .catch(err => {
//       res.status(500).send({
//         message: "Error retrieving Tutorial with id=" + id
//       });
//     });
// };

// // Update a Tutorial by the id in the request
// exports.update = (req, res) => {
//   const id = req.params.id;

//   Tutorial.update(req.body, {
//     where: { id: id }
//   })
//     .then(num => {
//       if (num == 1) {
//         res.send({
//           message: "Tutorial was updated successfully."
//         });
//       } else {
//         res.send({
//           message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found or req.body is empty!`
//         });
//       }
//     })
//     .catch(err => {
//       res.status(500).send({
//         message: "Error updating Tutorial with id=" + id
//       });
//     });
// };

// // Delete a Tutorial with the specified id in the request
// exports.delete = (req, res) => {
//   const id = req.params.id;

//   Tutorial.destroy({
//     where: { id: id }
//   })
//     .then(num => {
//       if (num == 1) {
//         res.send({
//           message: "Tutorial was deleted successfully!"
//         });
//       } else {
//         res.send({
//           message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`
//         });
//       }
//     })
//     .catch(err => {
//       res.status(500).send({
//         message: "Could not delete Tutorial with id=" + id
//       });
//     });
// };

// // Delete all Tutorials from the database.
// exports.deleteAll = (req, res) => {
//   Tutorial.destroy({
//     where: {},
//     truncate: false
//   })
//     .then(nums => {
//       res.send({ message: `${nums} Tutorials were deleted successfully!` });
//     })
//     .catch(err => {
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while removing all tutorials."
//       });
//     });
// };

// // find all published Tutorial
// exports.findAllPublished = (req, res) => {
//   Tutorial.findAll({ where: { published: true } })
//     .then(data => {
//       res.send(data);
//     })
//     .catch(err => {
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while retrieving tutorials."
//       });
//     });
// };
const db = require("../models");
const Employee = db.employee; // Assuming your model is named "employee"
const Op = db.Sequelize.Op;

// Create and Save a new Employee
exports.create = (req, res) => {
  // Validate request
  if (!req.body.emp_name || !req.body.emp_sal || !req.body.dept_name || !req.body.dept_id || !req.body.emp_phn) {
    res.status(400).send({
      message: "All fields are required!"
    });
    return;
  }

  // Create an Employee
  const employee = {
    emp_name: req.body.emp_name,
    emp_sal: req.body.emp_sal,
    dept_name: req.body.dept_name,
    dept_id: req.body.dept_id,
    emp_phn: req.body.emp_phn
  };

  // Save Employee in the database
  Employee.create(employee)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Employee."
      });
    });
};

// Retrieve all Employees from the database.
exports.findAll = (req, res) => {
  const emp_name = req.query.emp_name;
  const emp_sal = req.query.emp_sal;
  const dept_name = req.query.dept_name;
  const dept_id = req.query.dept_id;
  const emp_phn = req.query.emp_phn;

  var condition = {
    [Op.and]: []
  };

  if (emp_name) {
    condition[Op.and].push({ emp_name: { [Op.iLike]: `%${emp_name}%` } });
  }

  if (emp_sal) {
    condition[Op.and].push({ emp_sal: emp_sal });
  }

  if (dept_name) {
    condition[Op.and].push({ dept_name: { [Op.iLike]: `%${dept_name}%` } });
  }

  if (dept_id) {
    condition[Op.and].push({ dept_id: dept_id });
  }

  if (emp_phn) {
    condition[Op.and].push({ emp_phn: emp_phn });
  }

  Employee.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving employees."
      });
    });
};

// Find a single Employee by emp_id
exports.findOne = (req, res) => {
  const emp_id = req.params.emp_id;

  Employee.findByPk(emp_id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Employee with emp_id=" + emp_id
      });
    });
};

// Update an Employee by emp_id
exports.update = (req, res) => {
  const emp_id = req.params.emp_id;

  Employee.update(req.body, {
    where: { emp_id: emp_id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Employee was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Employee with emp_id=${emp_id}. Maybe Employee was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Employee with emp_id=" + emp_id
      });
    });
};

// Delete an Employee by emp_id
exports.delete = (req, res) => {
  const emp_id = req.params.emp_id;

  Employee.destroy({
    where: { emp_id: emp_id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Employee was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Employee with emp_id=${emp_id}. Maybe Employee was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Employee with emp_id=" + emp_id
      });
    });
};

// Delete all Employees from the database.
// exports.deleteAll = (req, res) => {
//   Employee.destroy({
//     where: {},
//     truncate: false
//   })
//     .then(nums => {
//       res.send({ message: `${nums} Employees were deleted successfully!` });
//     })
//     .catch(err => {
//       res.status(500).send({
//         message: err.message || "Some error occurred while removing all employees."
//       });
//     });
// };

// Find all Employees with a specific department name
// exports.findAllByDeptName = (req, res) => {
//   const dept_name = req.params.dept_name;

//   Employee.findAll({ where: { dept_name: dept_name } })
//     .then(data => {
//       res.send(data);
//     })
//     .catch(err => {
//       res.status(500).send({
//         message: err.message || "Some error occurred while retrieving employees."
//       });
//     });
// };
