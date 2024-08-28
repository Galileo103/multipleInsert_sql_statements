SQL INSERT Statement Converter
This Node.js script converts multiple INSERT INTO SQL statements into a single INSERT INTO statement with multiple VALUES clauses. This is useful for optimizing SQL queries by consolidating multiple inserts into a single query, which can improve performance and simplify maintenance.

Table of Contents
Installation
Usage
Examples
Error Handling
Contributing
License
Installation
Ensure you have Node.js installed on your system.

Clone the repository or download the script file.

Install any required dependencies (though in this case, there are none beyond Node.js core modules).

bash
Copy code
npm install
Usage
Prepare your input file: Create a file named input.txt in the same directory as the script. This file should contain the multiple INSERT INTO SQL statements you wish to merge.

Run the script: Execute the script using Node.js.

bash
Copy code
node convert_multipleInsert_sql_statements.js
Check the output: The script will create or overwrite a file named output.txt in the same directory with the consolidated INSERT INTO statement.

Examples
Example input.txt
sql
Copy code
INSERT INTO employees (name, position, salary) VALUES ('John Doe', 'Developer', 75000);
INSERT INTO employees (name, position, salary) VALUES ('Jane Smith', 'Manager', 85000);
INSERT INTO employees (name, position, salary) VALUES ('Emily Johnson', 'Designer', 72000);
Result in output.txt
sql
Copy code
INSERT INTO employees (name, position, salary) VALUES
('John Doe', 'Developer', 75000),
('Jane Smith', 'Manager', 85000),
('Emily Johnson', 'Designer', 72000);
Error Handling
The script includes error handling for common issues:

Input File Not Found: If input.txt does not exist in the directory, an error will be thrown.
SQL Format Errors: If the VALUES keyword is missing or the SQL statements are not correctly formatted, the script will notify you of the issue.
Empty Input: If no valid INSERT INTO statements are found, an error will be reported.
Contributing
If you would like to contribute to this project, please fork the repository and submit a pull request with your changes. For bug reports and feature requests, please open an issue on the project's GitHub page.

License
This project is licensed under the MIT License. See the LICENSE file for details.
