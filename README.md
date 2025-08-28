# 👋 Introducing FOODO 
## 📖 Overview  

**FOODO** is a modern food ordering web app built with **React + Parcel bundler** on the frontend and **Node.js + Express** on the backend.  
It fetches live restaurant and menu data from **Swiggy APIs**, styled with **TailwindCSS**, and uses **Redux Toolkit** for state management.  

The goal is to simulate a real-world **Swiggy/Zomato clone** where users can:  
- Browse restaurants  
- View menus & dishes  
- Add items to cart (via Redux)  
- Navigate smoothly with React Router  

---

## 🚀 Features  

✅ Browse restaurants with real-time data (via Swiggy APIs)  
✅ View menus of each restaurant  
✅ Responsive & clean UI with TailwindCSS  
✅ Fast builds + Hot Module Reloading (HMR) using Parcel  
✅ State management using Redux Toolkit  
✅ Routing with React Router DOM  
✅ Backend API proxy (to bypass CORS issues)  
✅ Unit & Integration tests using Jest + RTL  

---

## 🛠 Tech Stack  

### **Frontend**  
- React (18)  
- React Router DOM (v6)  
- Redux Toolkit (state management)  
- React Icons  
- TailwindCSS (styling)  
- Parcel (bundler)  

### **Backend**  
- Node.js  
- Express.js  
- Node-Fetch (for API calls)  
- CORS  

### **Testing**  
- Jest  
- React Testing Library  
- Babel-Jest  

---

⚡ Installation & Setup

1️⃣ Clone the repository
git clone https://github.com/khushi-gupta-tech/React.git
cd React

2️⃣ Install dependencies
npm install

3️⃣ Run development (Frontend + Backend together)
npm run dev


👉 This will start:

Backend → http://localhost:5000

Frontend → http://localhost:1234

4️⃣ Run separately (optional)

Frontend only:

npm start


Backend only:

npm run backend

5️⃣ Build for production
npm run build

🧪 Running Tests

Unit + Integration tests are written using Jest + React Testing Library.

Run tests:

npm test


Watch mode:

npm run watch-test

✅ That’s it! You now have FOODO running on your local machine 🎉

