# Online Bookstore Project

This project is an online bookstore built with **React**, **PrimeReact**, and **PrimeFlex**. Users can browse books, view detailed information, add books to their shopping cart, and proceed through the checkout process with basic form validation.

## Features

- **Book Listing**: Display a list of available books for users to browse.
- **Search Functionality**: Search for books by title or author.
- **Book Details**: View details of a specific book, including author, price, and description.
- **Shopping Cart**: Add books to the shopping cart, update quantities, and see the total price.
- **Checkout Process**: Fill out user details and credit card information during checkout, with input validation using Regex.
- **Cart Management**: Clear the shopping cart manually or after completing a checkout.
- **Responsive Design**: Optimized for all screen sizes, ensuring a smooth user experience on mobile, tablet, and desktop devices.

## Technologies

- **React**: Frontend library used to build the user interface.
- **PrimeReact**: UI component library for React that provides pre-built, customizable components.
- **PrimeFlex**: Flexbox-based CSS utility framework for responsive design.
- **React Router**: Enables navigation between different pages (Home, Book Details, Cart, Checkout).
- **MockAPI**: Simulated API for fetching book data.

## Components Overview

### 1. **Home.jsx**
   - Displays a list of books with the ability to search by title or author.
   - Each book is shown as a card, including the book’s image, title, author, and price.
   - Uses **PrimeReact** components such as `Card` and `InputText`.

### 2. **BookDetails.jsx**
   - Shows detailed information about a selected book.
   - Includes the book's cover image, title, author, price, and a button to add it to the shopping cart.
   - Uses **PrimeReact** components for a responsive and styled layout.

### 3. **ShoppingCart.jsx**
   - Displays items added to the shopping cart along with their quantity and price.
   - Allows users to remove items from the cart or proceed to checkout.
   - Calculates and displays the total price of the items in the cart.

### 4. **Checkout.jsx**
   - Provides a form for users to input their name, surname, credit card number, CVV, and expiry date.
   - Includes input validation using **Regex** to ensure correct format for credit card numbers and other details.
   - After a successful form submission, the shopping cart is cleared, and the user is notified.

### 5. **CartContent.jsx**
   - Manages the state of the shopping cart, allowing books to be added, removed, and the cart to be cleared.
   - Uses React’s `useContext` to provide global state management for the cart across the application.
