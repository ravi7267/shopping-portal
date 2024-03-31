Install dependencies:

 
 npm install
Start the server:

 
 npm start


 API Endpoints
Create Task
URL: /tasks
Method: POST
Request Body: JSON object with product_name, description, and price
Response: Created task object
Get All Tasks
URL: /tasks
Method: GET
Response: Array of task objects
Get Task by ID
URL: /tasks/:id
Method: GET
Response: Task object
Update Task
URL: /tasks/:id
Method: PUT
Request Body: JSON object with fields to update (product_name, description, price)
Response: Updated task object
Delete Task
URL: /tasks/:id
Method: DELETE
Response: Deleted task object
