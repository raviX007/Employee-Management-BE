 module.exports = app => {
  const employees = require("../controllers/employee.controller.js"); // Updated controller name

  var router = require("express").Router();

  
  router.post("/", employees.create);

  
  router.get("/", employees.findAll);

  
  router.get("/:emp_id", employees.findOne); // Updated parameter name

 
  router.put("/:emp_id", employees.update); // Updated parameter name

  
  router.delete("/:emp_id", employees.delete); // Updated parameter name

  
  app.use("/api/employees", router); // Updated API endpoint
};
