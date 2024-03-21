
# Employee Management Node.js Rest api 

This is a simple Node.js application that demonstrates CRUD (Create, Read, Update, Delete) operations using PostgreSQL as the database. It uses the Sequelize ORM to interact with the database.

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/ravix007/Employee-Management-BE
   cd Node_crud
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Configure the database:

   - Create a PostgreSQL database.
   - Update the `config/db.config.js` file with your database connection details.

4. Run the application:

   ```bash
   npm start
   ```

5. Access the application:

   Open your web browser and navigate to `http://localhost:8080` to access the API endpoints.

## Endpoints

- `POST /api/employees`: Create a new employee.
- `GET /api/employees`: Retrieve all employees.
- `GET /api/employees/:emp_id`: Retrieve a single employee by emp_id.
- `PUT /api/employees/:emp_id`: Update an employee by emp_id.
- `DELETE /api/employees/:emp_id`: Delete an employee by emp_id.

## Troubleshooting

- If you encounter issues with database constraints or null values, double-check the model, controller, and database configuration for consistency.
- Review the database integrity constraints and default values.
- Use extensive logging to trace the flow of data and identify potential issues.

## Contributing

Contributions are welcome! If you find any bugs or want to add new features, feel free to open an issue or submit a pull request.



