## Herbal Garden
Herbal Garden is a full-stack web application featuring a 3D interactive garden environment. The frontend is built with React and Three.js, providing immersive visualization and interaction with garden plants and characters. The backend is a Node.js/Express API server with MongoDB for data storage, handling user authentication, plant data management, and file uploads.

## Features
User authentication (signup, login) with JWT
Interactive 3D garden/world visualization using React Three Fiber and Three.js
Plant and user data management via RESTful API
Real-time chat panel integration
File uploads and storage using AWS S3
Responsive UI with Tailwind CSS and Framer Motion animations
Protected routes and role-based access control
 
## Tech Stack
Frontend: React, Vite, React Router, React Three Fiber, Three.js, Tailwind CSS, Framer Motion
Backend: Node.js, Express, MongoDB, Mongoose, JWT, AWS SDK, Multer
Tools: Vite, Nodemon, Axios

## Getting Started

Prerequisites
Node.js (v20.x recommended)
MongoDB instance (local or cloud)
AWS account with S3 bucket (for file storage)


## Backend Setup

1. Navigate to the backend directory:
cd backend

3. Install dependencies:
npm install

4. Create a .env file with the following variables:
PORT=your_backend_port
MONGODB_URI=your_mongodb_connection_string
AWS_ACCESS_KEY_ID=your_aws_access_key
AWS_SECRET_ACCESS_KEY=your_aws_secret_key
AWS_REGION=your_aws_region
AWS_S3_BUCKET=your_s3_bucket_name
JWT_SECRET=your_jwt_secret

5. Start the backend server:
 npm run dev

## Frontend Setup

1. Navigate to the herbal-garden directory:
cd herbal-garden

2. Install dependencies:
npm install

3.Start the frontend development server:
npm run dev

4. Open your browser and go to http://localhost:5173

## Folder structure

backend/               # Backend API server
  controllers/         # Route controllers for users and plants
  db/                  # Database connection setup
  middlewares/         # Express middlewares (auth, file upload, etc.)
  models/              # Mongoose models (User, Plant)
  routes/              # API route definitions
  storage/             # Local storage (if any)
  index.js             # Backend server entry point

herbal-garden/         # Frontend React app
  src/
    api/               # API call utilities
    components/        # React components (auth, navbar, chat, etc.)
    context/           # React context providers
    layout/            # Layout components
    model/             # 3D models and assets
    pages/             # React pages (Home, World, About, NotFound)
    routes/            # Route components (ProtectedRoute)
    lib/               # Utility functions
  public/              # Static assets
  index.html           # Frontend entry HTML
  package.json         # Frontend dependencies and scripts

## License

This project is licensed under the MIT License.

---

This README provides an overview, setup instructions, and folder structure to help developers get started with the Herbal Garden project.

