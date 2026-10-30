# React Todo App

A simple and responsive Todo application built with React. Manage your daily tasks by adding, editing, completing, and deleting todos. All tasks are automatically saved in your browser using localStorage.

## 🌐 Live Demo

**[Try the App](https://react-simple-todo-app1.netlify.app/)**

## ✨ Features

- **Add Tasks** – Create new tasks with unique IDs.
- **Edit Tasks** – Modify existing tasks with Save and Cancel options.
- **Complete Tasks** – Mark tasks as completed.
- **Delete Tasks** – Remove unwanted tasks.
- **Filter Tasks** – Switch between All, Open, and Completed tasks.
- **Task Counter** – View the number of tasks in each category.
- **Local Storage** – Keep your tasks saved even after refreshing the page.
- **Empty State** – Display a message when no tasks are available.

## 🛠️ Tech Stack

- **React** – Building the user interface
- **JavaScript (ES6+)** – Application logic
- **CSS** – Styling
- **Vite** – Development and build tool
- **localStorage** – Browser-based data persistence
- **Netlify** – Hosting and deployment

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/EmirB25/react-todo-app.git
```

### 2. Navigate to the project directory

```bash
cd react-todo-app
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Open the local URL displayed in your terminal.

## 📁 Project Structure

```text
src/
├── components/
│   ├── Header.jsx
│   ├── Tabs.jsx
│   ├── TodoInput.jsx
│   ├── TodoList.jsx
│   └── TodoCard.jsx
├── App.jsx
├── App.css
├── index.css
└── main.jsx
```

## ⚙️ How It Works

The application uses React's `useState` hook to manage tasks and the selected filter.

- Each task receives a unique ID using `crypto.randomUUID()`.
- The `map()` method updates existing tasks.
- The `filter()` method removes tasks and filters them by completion status.
- The `useEffect` hook loads previously saved tasks from localStorage when the app starts.
- Changes are saved to localStorage whenever a task is added, edited, completed, or deleted.

All data is stored locally in the user's browser, so no backend or database is required.

## 🌍 Deployment

The application is deployed on Netlify.

**Live Website:** https://react-simple-todo-app1.netlify.app/

## 📄 License

This project was created for learning and practicing React.
