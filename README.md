# Ecommerce Application

This is a simple ecommerce application built with ReactJS, utilizing the `react-router-dom`, `phosphor-react`, `useContext`, and `useState` libraries. The main purpose of this project is to demonstrate the usage of `useContext` in a real-world scenario.

## Installation

To run this application locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/ecommerce-application.git
Navigate to the project directory:

bash
Copy code
cd ecommerce-application
Install the dependencies:

bash
Copy code
npm install
Start the application:

bash
Copy code
npm start
The application will run on http://localhost:3000 in your browser.

## Usage

To use the ecommerce application, follow these steps:

1. Browse the list of available products on the home page.
2. Click on a product to view its details.
3. To add a product to the cart, click the "Add to Cart" button on the product details page.
4. To update the quantity of a product in the cart, go to the cart page and adjust the quantity using the provided input field.
5. To remove a product from the cart, click the "Remove" button next to the product in the cart page.
6. The total price of the items in the cart will be displayed on the cart page.

The `useContext` hook is used to manage the state of the cart across multiple components without the need for prop drilling. The `useState` hook is used for managing local component states.
