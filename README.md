# My Next.js App

This is a full-stack web application built with Next.js 13. It supports user registration and login.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

## API Routes

The application has the following API routes:

- `/api/auth/login`: Handles user login. It takes a request with a username and password, validates them, and returns a response with a session token if the login is successful.
- `/api/auth/register`: Handles user registration. It takes a request with a username, email, and password, validates them, and creates a new user in the database if the registration is successful.
- `/api`: The root API endpoint. It returns a response with a message indicating that the API is working.

## Pages

The application has the following pages:

- `/`: The home page. It may display a welcome message and links to the login and registration pages.
- `/login`: The login page. It contains a form for the user to enter their username and password and submit them to the login API endpoint.
- `/register`: The registration page. It contains a form for the user to enter their username, email, and password and submit them to the registration API endpoint.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

Enjoy building your Next.js app!