# Setting a Node.js Server and creating GET APIs

This project demonstrates the setup of a Node.js server with Express and the creation of 10 unique GET APIs.

## Prerequisites

Ensure you have the following installed:
- **nvm** (Node Version Manager)
- **Node.js** (managed via nvm)
- **npm** (Node Package Manager)

## Setup Instructions

1. **Install Node.js**:
   - Install nvm using the [official guide](https://github.com/nvm-sh/nvm#installing-and-updating).
   - Use nvm to install the latest stable Node.js version:
     ```bash
     nvm install --lts
     ```
   - Verify the installation:
     ```bash
     node -v
     npm -v
     ```

2. **Navigate to the Project Directory**:
   Extract the zip folder and navigate to the project directory:
   ```bash
   cd nodejs-server-assignment

3. **Install Dependencies: Install the required packages**:
   npm install


## Running the Server

1. **Start the server**:
   node server.js

   _The server will run on port 3000 by default._

## Testing APIs

   _Use tools like Postman or cURL to test the APIs._

   Example:
   curl http://localhost:3000/api/test
