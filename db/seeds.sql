-- insert placeholder data
INSERT INTO department (name) VALUES
    ('Engineering'),
    ('Finance'),
    ('Legal'),
    ('Human Resources'),
    ('Sales'),
    ('Marketing');

INSERT INTO role (title, salary, dept_id) VALUES
    ('Software Engineer', 120000.00, 1),
    ('Accountant', 90000.00, 2),
    ('Account Manager', 110000.00, 2),
    ('Lawyer', 150000.00, 3),
    ('Legal Team Lead', 100000.00, 3),
    ('Human Resource Executive', 80000.00, 4),
    ('Salesperson', 70000.00, 5),
    ('Sales Lead', 78000.00, 5),
    ('Public Relations', 67000.00, 6),
    ('Chief Marketing Officer', 85000.00, 6);

INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES
    ('Jane', 'Doe', 1, null),
    ('Mike', 'Chan', 2, 3),
    ('Rodriquez', 'Ashley', 3, null),
    ('Lawson', 'Jerry', 4, null),
    ('Harry', 'Wanda', 5, 4),
    ('Lucas', 'Scotty', 6, null),
    ('Young', 'Miranda', 7, 8),
    ('Brand', 'Lisa', 8, null),
    ('Hurt', 'Jason', 9, 10),
    ('Russell', 'Sydney', 10, null),
    ('Long', 'Miranda', 9, 10);