# RETAIL-UPFRONT 

## About the project

This project is an e-commerce web app that help user to choose all there needs at one place

- **Admin Control**:
  - Admin can manage the Product, Upload, edit, remove, stock change

- **User Control**:
  - User can SignIn, SignUp, Logout.
  - User can rate a add to cart a item with quantity and may increase and decrease the quantityt
  - There is search option in navbar where user can search product name, brand, type .
  - User can book place order a product with there shipping information

---

## Installation 

To set up the App on your local machine, follow these steps:

1. **Clone the Repository**:
    ```bash
    git clone https://github.com/warsi0707/Retail-upfront
    ```

2. **Install Dependecies**:
    ```bash
    cd backend
    npm install
    ```
    ```bash
    cd frontend
    npm install
    ```

3. **Set environment variable**:
    ```
    Setup environment varaible
    ```

3. **Run the Application**:
    ```
    cd frontend
    npm run dev
    ```
     ```
    cd backend
    npm start
    ```

---

## Technologies Used

- **Frontend**:
  - React.js: For building the user interface.
  - Redux: For managing state
  - React-Router: For navigation.
  - react-hot-toast: For pop-up status message.
  - Tailwind CSS: For styling components.
  - localstorage: For storing the user token, information and item carts


- **Backend**:
  - Node.js: For server-side logic.
  - Express.js: For building the RESTful API.
  - Multer: For uploading image

- **Database**:
  - Mongoose: For storing user and transaction data.

- **Authentication**:
  - JSON Web Tokens (JWT): For secure user authentication.

- **Others**:
  - Fetch: For making HTTP requests.
  - dotenv: For managing environment variables.
  - bcrypt: For password hashing.
  - cors: For connect backend and frontend

---



- **Others**:

![alt text](frontend/public/screenshot/setup.mov)