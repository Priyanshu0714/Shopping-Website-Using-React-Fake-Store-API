# 🛍️ React Shopping Website

This is a **React-based Shopping Website** built as part of a front-end internship assignment. It integrates with the [Fake Store API](https://fakestoreapi.com/) to showcase product listings, authentication, cart functionality, and responsive UI.

---

## 🔗 Live Demo

🌐 [View Live Project](https://your-deployed-link.vercel.app/)  
📁 [View GitHub Repository](https://github.com/yourusername/react-shopping-site)

---

## 📌 Features

### ✅ 1. **Login Page**
- Simple login form with username & password
- Authentication via `/auth/login` endpoint
- JWT token stored in `localStorage`
- Redirect to product listing on success

### 🏠 2. **Product Listing Page**
- Fetch and display all products using `/products`
- Filter products by category
- Search bar for quick lookup (optional)
- Mobile-first responsive grid layout

### 📄 3. **Product Detail Page**
- Display product image, title, description, and price
- "Add to Cart" functionality

### 🛒 4. **Cart Page**
- View all added items
- Update item quantity or remove products
- Display total price
- Checkout with confirmation popup (disappears after 4s)

### 🔗 5. **Header / Navigation**
- Navigation links: Home | Cart | Logout
- Show cart item count in the header
- Logout clears JWT and redirects to login

---

## ⚙️ Tech Stack

- **React.js** (with Vite/CRA)
- **React Router v6+**
- **React Hooks**
- **Optional:** Context API for cart state
- **CSS:** Plain CSS with mobile-first responsive design

---

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/react-shopping-site.git
cd react-shopping-site
