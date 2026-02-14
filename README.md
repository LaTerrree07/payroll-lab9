/* Simple Payroll System */

This project is a simple Payroll System made using HTML, CSS, and JavaScript, and the main goal is to practice DOM manipulation by making the webpage respond to user actions instead of just doing calculations in the console. The system reads the employee name, hours worked, hourly rate, tax percentage, and other deductions from the form, then computes the payroll using the formulas gross = hours × rate, taxDeduction = gross × (taxPercent ÷ 100), and netPay = gross − taxDeduction − otherDeductions. After submitting, the record is inserted into the payroll table using JavaScript DOM methods, and the summary section updates automatically (Employees, Total Gross, Total Deductions, and Total Net). The project also allows editing a record by loading the selected row’s values back into the form and saving changes, deleting a record while updating the totals, and clearing all records at once. Overall, this lab helped me practice handling form inputs, converting values properly, updating HTML elements dynamically, and managing simple data using an array while keeping the UI clean and easy to use.

/* What This Project Can Do */

The payroll system lets the user add payroll records, automatically calculate gross pay, tax deduction, and net pay, and display everything in a table that updates instantly. It also includes edit, delete, and clear-all features so the data can be updated and managed without reloading the page, and the summary totals always stay accurate after every action.

/* Payroll Formula Used */

The calculations follow three simple steps: gross = hours × rate, taxDeduction = gross × (taxPercent ÷ 100), and netPay = gross − taxDeduction − otherDeductions, then the summary totals are computed by adding all records’ gross, deductions, and net values.

/* Technologies Used */

This project uses HTML for the structure, CSS for the layout and design, and JavaScript for all payroll computations and DOM manipulation, without using any external libraries or frameworks.
