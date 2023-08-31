
INSERT INTO department (name)
VALUES ("R and D"),
       ("Sales"),
       ("Support"),
       ("Finance");

INSERT INTO role (title, salary, department_id)
VALUES ("Head of Engineering", 150000, 1),
       ("Software Engineer", 100000, 1),
       ("Hardware Engineer", 100000, 1),
       ("Sales - West Coast", 200000, 2),
       ("Sales - Midwest", 150000, 2),
       ("Sales - East Coast" 175000, 2),
       ("Customer Support", 50000, 3),
       ("IT", 75000, 3),
       ("Customer Support", 35000, 3),
       ("Accounting", 115000, 4)

INSERT INTO employee (id, fullName, role_id, manager_id)
VALUES (001, "Herbie Li", 1, )
       (002, "Lincoln Ferguson")
       (003, "Alexandria Crosby")
       (004, "Dale Larsen")
       (005, "Meghan York")
       (006, "Vinnie Copeland")
       (007, "Zahraa Leon")
       (008, "Renee Luna")
       (009, "Barnaby Alvarado")
       (010, "Walter Lucas")