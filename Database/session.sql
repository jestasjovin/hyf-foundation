SELECT * FROM user;

SELECT name , email,phone FROM user;

SELECT name FROM user LIMIT 3;

SELECT * FROM user LIMIT 3;



SELECT * FROM user WHERE name = 'Pablo Kisbee';


SELECT * FROM task LIMIT 3;
SELECT * FROM status LIMIT 3;

SELECT * FROM status WHERE name = 'In progress';



SELECT * FROM user ORDER BY name;

SELECT * FROM task ORDER BY created DESC;

SELECT * FROM task ORDER BY created ASC;




SELECT * FROM task ORDER BY status_id, title;





-- JOINING
SELECT task.title, status.name
FROM task
JOIN status
ON task.status_id = status.id;







-- EXERCISE
--List the names and phones of all users.
SELECT name , phone FROM user;


--List all users, ordering them alphabetically by name.
SELECT * FROM user ORDER BY name;

--Find the name of the user with id = 10.
SELECT name FROM user where id=10;

--Find the 3 oldest tasks based on creation date.
SELECT * FROM task  ORDER  BY created  ASC limit 3;

--Find all tasks that have no description.
SELECT * FROM task where description IS NULL;

--Find all users whose email ends with .com.
SELECT * FROM user WHERE email LIKE '%.com';

--List the titles of all tasks that are not started.
SELECT task.title 
FROM task 
JOIN status ON task.status_id = status.id
WHERE  status.name = 'Not started';


--Find the tasks assigned to user 1 that are in progress.
--SELECT * 
--FROM task 
--JOIN status ON task.status_id = status.id
--WHERE user.id = 1 and status.name = 'In progress';

SELECT task.* 
FROM task 
JOIN status ON task.status_id = status.id
WHERE task.user_id = 1 AND status.name = 'In progress';



--Find tasks whose title contains database.
SELECT * FROM task WHERE title LIKE '%database%';

--List the names of users who have no phone number.
select * from user where phone is null;


--Show the five newest tasks by creation date, including their titles and creation dates.
select title, created from task order by created desc limit 5; 


--List tasks that are either not started or in progress, ordered by title.

select * from task 
JOIN status ON task.status_id = status.id
WHERE status.name = 'Not started' OR 'In progress';







-- UPDATING
--Change the status of task 1 to Done.
UPDATE task SET status_id =  3 WHERE id = 1;

--Change the description of task 2 to Write and test SELECT queries.
update task set description = "Write" where id = 2;

--Change the title of task 3 to Practice: Review query results.

UPDATE task SET title = 'Practice' WHERE id = 3;
SELECT title FROM task WHERE id = 3;


--Change the due date of task 4 to 2031-01-15.
update task set due_date = '2031-01-15' where id = 4;

--Change the phone number of user 1 to 12345678.
update user set phone = '12345678' where id = 1;

--Change the name of tag 1 to Practice.
update tag set name = "Practice" where id = 1;




--INSERTINGS
--Add a task titled Practice 1: Read SQL, with status Not started and assigned to user 1.
INSERT INTO task (title,status_id,user_id,created,updated) VALUES ("Practice 1: Read SQL",1,1,datetime('now'),datetime('now'));

--Add Practice 2: Write queries, with status Not started and a description of your choice.
INSERT INTO task (title,description,status_id,created,updated) VALUES ("Assignment","Finishing assignment",1,datetime('now'),datetime('now'));


--Add Practice 3: Review results, with status In progress and assigned to user 1.
UPDATE task SET status_id= 2 where user_id = 1;

--Add Practice 4: Plan a project, with status Not started and a due date of 2030-12-31.
INSERT INTO task (title,description,status_id,created,updated) VALUES ("Project","We are planning a project ! ",1,datetime('now'),datetime('now'));

--Add a user with a distinctive name and email address of your choice. Leave the optional phone number empty, and do not assign this user to any tasks.
INSERT INTO user (name,email) VALUES ("Jovine","jovine@jovine.jov");

--Add a tag with a distinctive name of your choice.
INSERT INTO tag (name) VALUES ("Just a tag");


SELECT * FROM user WHERE name = 'Jovine';

SELECT * FROM task order by created desc limit 3;

SELECT * FROM tag order by id asc;


--DELETE
--Delete the task you added for INSERT exercise 1.
DELETE FROM task
WHERE id = 18;
--Delete the user you added for INSERT exercise 5.
DELETE FROM user
WHERE id = 13;
DELETE FROM user
WHERE id = 14;
--Delete the tag you added for INSERT exercise 6.
DELETE FROM tag
WHERE id = 6;


--Exercise — Combine Everything
--Use the SQL operations you have learned.
--Add yourself as a new user in the user table. Remember that name and email are required.
INSERT INTO user (name,email) VALUES ("Jovine","jovine@jovine.jov");

--Find your new user's id.
SELECT id FROM user WHERE name = 'Jovine';

--Create 2 or more tasks assigned to yourself (use your id as the user_id).
INSERT INTO task (title,description,status_id,user_id,created,updated) VALUES ("Assignment 1","Do assignment 1",1,13,datetime('now'),datetime('now'));

INSERT INTO task (title,description,status_id,user_id,created,updated) VALUES ("Assignment 2","Do assignment 2",1,13,datetime('now'),datetime('now'));


--Update one of the tasks you created so its status is In Progress.
SELECT * FROM task order by created desc limit 2;

UPDATE task SET status_id =  2 WHERE id = 39;


--Retrieve only the title and description of all tasks assigned to you.
SELECT * FROM user WHERE name = 'Jovine';

select title,description from task where user_id = 13; 

--Delete a task that you no longer need.
DELETE FROM task
WHERE id = 40;

--Create a new table named practice_book with an INTEGER PRIMARY KEY called id, a required TEXT column called title, and an optional TEXT column called author. If that table already exists, choose another name and use it in the next step.
CREATE TABLE practice_book (
    id INTEGER PRIMARY KEY,
    title TEXT NOT NULL,
    author TEXT
);

--Insert a book into your new table, then use SELECT to check its id, title, and author. Refresh the Database Navigator and find the table.
INSERT INTO practice_book (title, author) VALUES ("The Bible","God");