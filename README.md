## List Shopping Project

### Overview
The List Shopping project application is built using modern techniques and advanced capabilities of TypeScript with Node.js.

### Features
- User-friendly interface for managing shopping lists.
- Categories predefined in the database: Cleaning Products, Cheese, Fruits and Vegetables, Meat and Fish, and Baked Goods.
- Functionality to save user-generated shopping lists to the database.

### Technologies Used
- **Backend**: TypeScript with Node.js
- **ORM**: Sequelize
- **Database**: SQL Server
- **Cloud Services**: AWS RDS for data storage
- **Containerization**: Docker

### Installation and Running Instructions
npm install
npm start


### Steps to Run the Project

1. **Clone the Repository**
   ```bash
   git clone https://github.com/t-hirsh/Shopping_list-backend.git
  cd Shopping_list-backend
   ```

Setup Environment Variables
Duplicate the entire contents of env.example into a file named .env in the root directory.

3. **Install Dependencies**
   Run the following command to install the required packages:
   ```bash
   npm install
   npm start
   ```

5. **Access the Application**
   Open your browser and navigate to `http://localhost:6868`.

### Additional Features
- Implemented AWS RDS for cloud data storage, ensuring data persistence and scalability.
- Created a Dockerfile for containerizing the application, allowing for easy deployment and management.

### Conclusion
This project serves as a practical example of modern web application development using TypeScript, Node.js, and cloud technologies. Further enhancements can be made based on user feedback and requirements
