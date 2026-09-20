📗 Table of Contents <a id="table-of-contents"></a>

- [📖 About the Project](#about-the-project)
  - [🛠 Built With](#built-with)
    - [Tech Stack](#tech-stack)
    - [Key Features](#key-features)
  - [🚀 Live Demo](#live-demo)
- [💻 Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Setup](#setup)
  - [Install](#install)
  - [Usage](#usage)
  - [Run tests](#run-tests)
  - [Deployment](#deployment)
- [👥 Authors](#authors)
- [🔭 Future Features](#future-features)
- [🤝 Contributing](#contributing)
- [⭐️ Show your support](#show-your-support)
- [🙏 Acknowledgements](#acknowledgements)
- [❓ FAQ (OPTIONAL)](#faq-optional)
- [📝 License](#license)

# 📖 About the Project <a id="about-the-project"></a>

# 📖 About the Project <a id="about-the-project"></a>

**Veyzo** is a modern e-commerce marketplace built with **React**, **Redux Toolkit**, **Axios**, and **SCSS**. The application allows sellers to showcase products and buyers to browse, search, filter, and purchase items through an intuitive shopping experience.

This project is being developed as a learning journey into modern React development. It follows production-ready architectural patterns including feature-based organization, Redux Toolkit for state management, a service layer for API communication, reusable custom hooks, and scalable component design.

The frontend currently consumes the **DummyJSON API**, with the intention of integrating a custom **Node.js/Express backend** later in development.

## 🛠 Built With <a id="built-with"></a>

### Tech Stack <a id="tech-stack"></a>

<details>
  <summary>Client</summary>
  - React
  - React Router
  - Redux Toolkit
  - React Redux
  - Axios
  - JavaScript (ES6+)
  - SCSS
  - HTML5
</details>

<details>
  <summary>Build Tool</summary>
  - Vite
</details>

<details>
  <summary>API</summary>
  - DummyJSON
</details>

## 🚀 Key Features <a id="key-features"></a>

- Product Listing
- Product Details
- Shopping Cart
- Client-side Pagination
- Product Search
- Category Filtering
- Product Sorting
- Responsive Navigation
- Redux Toolkit State Management
- Entity Adapter Normalized State
- Axios Service Layer
- Custom React Hooks
- Persistent Cart Storage (Local Storage)
- Reusable Components
- SCSS Architecture

[Back to top](#table-of-contents)

## 🏗 Project Architecture

```
Component
    │
    ▼
Custom Hook
    │
    ▼
Redux Selector
    │
    ▼
Redux Store
    │
    ▼
Slice
    │
    ▼
Async Thunk
    │
    ▼
Service Layer
    │
    ▼
Axios
    │
    ▼
REST API
```

The project follows a feature-based architecture with clear separation of concerns:

- **Components** are responsible for rendering UI.
- **Custom Hooks** encapsulate reusable business logic.
- **Selectors** provide access to Redux state.
- **Slices** manage application state.
- **Async Thunks** handle asynchronous operations.
- **Services** communicate with external APIs.
- **Axios** centralizes HTTP configuration.

[Back to top](#table-of-contents)

## 🚀 Live Demo <a id="live-demo"></a>

- [Live Demo Link](https://live-demo-link.com)

[Back to top](#table-of-contents)

## 💻 Getting Started <a id="getting-started"></a>

To get a local copy up and running, follow these steps.
Prerequisites <a id="prerequisites"></a>

> In order to run this project, you need:

- Node.js (v18+ recommended)
- npm
- Git

### Setup <a id="setup"></a>

> Clone this repository to your desired folder:

```sh
git clone https://github.com/kkasaija/veyzo.git
cd veyzo
```

### Install <a id="install"></a>

> Install the project dependencies:

- npm install

### Usage <a id="usage"></a>

> To start the development server, run:

- npm run dev
- The application will be available at the local development URL provided by Vite.

### Run tests <a id="run-tests"></a>

- Testing will be added as the project develops.
- npm test

### Deployment <a id="deployment"></a>

- Deployment information will be added once the project is ready for production.
- The application can be deployed using platforms such as Vercel or Netlify.

[Back to top](#table-of-contents)

### 📊 Development Progress <a id="development-progress"></a>

| Feature                | Status         |
| ---------------------- | -------------- |
| Project Setup          | ✅ Complete    |
| Routing                | ✅ Complete    |
| Layout Components      | ✅ Complete    |
| Hero Section           | ✅ Complete    |
| Product Listing        | ✅ Complete    |
| Product Details        | ✅ Complete    |
| Product Search         | ✅ Complete    |
| Category Filtering     | ✅ Complete    |
| Product Sorting        | ✅ Complete    |
| Client-side Pagination | ✅ Complete    |
| Shopping Cart          | ✅ Complete    |
| Local Storage          | ✅ Complete    |
| Redux Toolkit          | ✅ Complete    |
| Entity Adapter         | ✅ Complete    |
| Axios Integration      | ✅ Complete    |
| Product Services       | ✅ Complete    |
| Responsive Design      | 🚧 In Progress |
| Authentication         | ⏳ Planned     |
| Checkout               | ⏳ Planned     |
| Orders                 | ⏳ Planned     |
| Backend Integration    | ⏳ Planned     |
| Testing                | ⏳ Planned     |
| Deployment             | ⏳ Planned     |

[Back to top](#table-of-contents)

## 👥 Authors <a id="authors"></a>

👤 Kasaija Kenneth
GitHub: @kenn-ug
Twitter: @kenn_ug

[Back to top](#table-of-contents)

## 🔭 Future Features <a id="future-features"></a>

The following features are planned as the project develops:

- Wishlist
- User Authentication
- Protected Routes
- User Profiles
- Checkout System
- Order History
- Product Reviews
- Related Products
- Admin Dashboard
- Backend Integration
- Server-side Pagination
- Payment Integration
- Product Management
- Image Uploads
- Automated Testing
- CI/CD Pipeline

[Back to top](#table-of-contents)

## 🤝 Contributing <a id="contributing"></a>

Contributions, issues, and feature requests are welcome!

Feel free to check the issues page.

If you would like to contribute:

    Fork the project.
    Create a new branch.
    Make your changes.
    Commit your changes.
    Push your branch.
    Open a pull request.

[Back to top](#table-of-contents)

## ⭐️ Show your support <a id="show-your-support"></a>

If you like this project, please consider giving it a ⭐️ on GitHub.

Your support is greatly appreciated!

[Back to top](#table-of-contents)

## 🙏 Acknowledgements <a id="acknowledgements"></a>

I would like to thank the developers, open-source contributors, and communities whose resources and documentation help make this project possible.

[Back to top](#table-of-contents)

## ❓ FAQ <a id="faq-optional"></a>

### Why does the project use DummyJSON?

The frontend is being developed independently to focus on learning React and Redux Toolkit. A custom Express backend will replace DummyJSON later.

### Why Redux Toolkit instead of Context API?

Redux Toolkit provides a scalable architecture for managing application state and is better suited for larger applications.

### Is the backend complete?

No. The current focus is on building a production-quality frontend before integrating the backend.

### Is this project production ready?

Not yet. The frontend architecture follows production best practices, but authentication, checkout, orders, testing, and backend integration are still under development.

[Back to top](#table-of-contents)

## 📝 License <a id="license"></a>

This project is MIT licensed.

See the LICENSE file for more information.

[Back to top](#table-of-contents)
