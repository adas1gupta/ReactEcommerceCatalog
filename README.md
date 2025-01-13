# React E-Commerce Product Catalog

This project is a React-based E-Commerce Product Catalog that allows users to browse a list of products, add items to a cart, view their cart contents, and manage their cart.

## Features

- **Product Catalog**: Fetch and display products from the [Fake Store API](https://fakestoreapi.com/).
- **Add to Cart**: Allow users to add products to their cart with customizable quantities.
- **Cart Management**: View, update, and remove items from the cart.
- **Dynamic Header**: Display the total number of products in the cart.
- **React Router**: Navigate seamlessly between the product catalog and cart pages.

## Project Structure

```
src/
├── App.jsx              # Main application component
├── ProductPage.jsx      # Displays the product catalog
├── ProductCard.jsx      # Individual product card component
├── CartPage.jsx         # Displays the shopping cart
├── CartItem.jsx         # Individual cart item component
├── Header.jsx           # Header with cart summary
├── contexts.jsx         # Context for managing cart state
├── vite.config.js       # Vite configuration file
```

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```bash
   cd react-ecommerce-catalog
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and go to `http://localhost:5173`.

## Dependencies

- React
- React DOM
- React Router DOM
- Vite
- ESLint
- Prettier

## API

This project uses the [Fake Store API](https://fakestoreapi.com/) to fetch product data. The API provides sample product data, including title, price, description, image, and ratings.

## How It Works

1. **Product Catalog**:
   - Products are fetched from the Fake Store API on application load.
   - Each product is displayed as a card with details like title, price, description, and ratings.

2. **Cart Management**:
   - Users can add products to the cart with customizable quantities.
   - Cart contents are managed using React Context API.
   - Users can view and manage their cart items in the `CartPage` component.

3. **Routing**:
   - React Router DOM is used to navigate between the product catalog (`/`) and cart (`/cart`).

## Development Scripts

- **Start Development Server**:
  ```bash
  npm run dev
  ```

- **Build for Production**:
  ```bash
  npm run build
  ```

- **Preview Production Build**:
  ```bash
  npm run preview
  ```

- **Lint Code**:
  ```bash
  npm run lint
  ```

- **Format Code**:
  ```bash
  npm run format
  ```

## Future Enhancements

- Add user authentication.
- Implement persistent cart storage using local storage or a backend.
- Enhance product filtering and sorting options.
- Add a checkout page.

## License

This project is open-source and available under the [MIT License](LICENSE).

---

Enjoy building with the React E-Commerce Product Catalog!

