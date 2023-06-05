# BenFood

This is a small clone of snappfood.ir built using React, Redux Toolkit (RTK), TypeScript, and Tailwind CSS. The project utilizes infinite scroll view to provide a seamless browsing experience for users. It is dockerized to simplify the deployment process and ensure consistency across different environments.

## Technologies, Why These Technologies?

React offers a rich ecosystem of libraries and tools, making it an excellent choice for building interactive web applications. Its component-based architecture promotes code reusability, making it easier to maintain and scale the project.

Redux Toolkit (RTK) simplifies the implementation of Redux, which is beneficial for managing the application's state. RTK's efficient Redux slice creation and built-in tools for managing asynchronous actions make it well-suited for this project's needs.

TypeScript adds static typing to JavaScript, enabling better code organization, improved IDE tooling, and reduced runtime errors. With TypeScript, the project can benefit from early detection of type-related issues, leading to more robust code.

PNPM's approach to package management allows for efficient sharing of dependencies among multiple projects. This helps reduce disk space usage and speeds up the installation process, providing a smoother development experience.

Tailwind CSS streamlines the styling process by providing a comprehensive set of utility classes. Its utility-first approach allows for quick prototyping and customization, making it an excellent fit for rapidly developing UI components.

## Getting Started

To run the project using Docker, follow these steps:

Make sure you have Docker installed on your system.

Clone the repository:

```bash
git clone git@github.com:benyaminbeyzaie/benfood.git
cd benfood
```

```bash
docker build -t food-website .
docker run -p 80:80 food-website
```

For local development without Docker, follow these steps:

```bash

pnpm install
pnpm dev
```
