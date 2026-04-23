# Experiment 8 – Student CRUD REST API Using Flask

## Aim
To develop RESTful APIs using **Python Flask** for performing **CRUD operations on student data**, test the APIs using **Postman**, and deploy the backend on **Render** to obtain a public demo link.

---
- **Create Student (POST /students/)**  
  Adds a new student record to the in‑memory list using JSON data sent from the client.
  ![alt text](<Screenshot 2026-02-25 100431.png>)
- **Read All Students (GET /students/)**  
  Returns the complete list of all students currently stored in memory.
   ![alt text](<Screenshot 2026-02-25 100518.png>)
- **Read Single Student (GET /students/<id>)**  
  Fetches and displays the details of one student identified by its unique `id`.
  ![alt text](<Screenshot 2026-02-25 100536.png>)
- **Update Student (PUT /students/<id>)**  
  Modifies an existing student’s information (name, age, course) based on the JSON body.
   ![alt text](<Screenshot 2026-02-25 100633.png>)
- **Delete Student (DELETE /students/<id>)**  
  Removes a student with the given `id` from the in‑memory list and returns the deleted data.
   ![alt text](<Screenshot 2026-02-25 103145.png>)
---
## 🎯 Learning Outcomes

- Understood how to **set up and configure a Flask application** for building RESTful APIs.  
- Learned to map **HTTP methods (GET, POST, PUT, DELETE)** to corresponding **CRUD operations** on a Student resource.   
- Gained hands‑on experience in **sending and receiving JSON data**, setting headers, and debugging API requests using **Postman**.  
- Learned to structure a backend project using **Blueprints and separate route files** for better code organization and reusability.    
- Successfully deployed the application on the **Render** platform and obtained a **public demo URL**, completing the full cycle from development to cloud deployment.
---