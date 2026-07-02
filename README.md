# 🕓 Task Tracker

A modern and responsive task management application built using **HTML, CSS, and JavaScript**. This project helps users organize daily tasks efficiently with features like task filtering, dark mode, local storage persistence, and task completion tracking.

---

## 🚀 Live Demo

[![Live Demo](https://img.shields.io/badge/Live-Demo-green?style=for-the-badge)](https://task-tracker-inky-beta.vercel.app/)

---

## 🚀 Live Features

- ➕ Add new tasks
- ✅ Mark tasks as completed
- 🗑️ Delete individual tasks
- 📂 Filter tasks (All / Active / Completed)
- 🧹 Clear all completed tasks
- 🌙 Dark Mode / Light Mode toggle
- 💾 Persistent storage using LocalStorage
- 📱 Responsive design for desktop and mobile
- 📊 Live task counter
- 🎨 Modern UI with smooth animations

---

## 📸 Preview

### Light Mode
- Clean and minimal design
- Easy task management experience

### Dark Mode
- Eye-friendly interface
- Persistent theme preference

---

## 🛠️ Tech Stack

| Technology | Usage |
|------------|--------|
| HTML5 | Structure |
| CSS3 | Styling & Responsive Design |
| JavaScript (ES6) | Functionality |
| LocalStorage | Data Persistence |

---

## 📁 Project Structure

```bash
Pro-Task-Tracker/
│
├── task.html      # Main application page
├── task.css       # Styling and themes
├── task.js        # Application logic
└── README.md
```

---

## ⚙️ How It Works

### Adding Tasks
Users can:
- Click the **Add** button
- Press **Enter** key

Tasks are instantly stored in LocalStorage.

### Completing Tasks
Click on:
- Task text
- Checkbox

The task will be marked as completed.

### Filtering Tasks
Choose between:

- All
- Active
- Completed

to quickly organize your workflow.

### Dark Mode
Theme preference is saved automatically and restored on page refresh.

---

## 💾 Local Storage

The application stores:

### Tasks
```javascript
localStorage.setItem('proTasks', JSON.stringify(tasks));
```

### Theme Preference
```javascript
localStorage.setItem('darkMode', isDarkMode);
```

This ensures data remains available even after refreshing or reopening the browser.

---

## 🎯 Key Concepts Implemented

- DOM Manipulation
- Event Handling
- Array Methods (filter, forEach)
- Local Storage API
- Dynamic Rendering
- State Management
- CSS Variables
- Responsive UI Design

---

## 🔥 Future Improvements

- ✏️ Edit existing tasks
- 📅 Due dates
- 🔔 Notifications
- 📌 Task priorities
- 📊 Productivity dashboard
- ☁️ Cloud synchronization
- 👤 User authentication

---

## 🧠 Learning Outcomes

Through this project, I practiced:

- Building interactive web applications
- Managing application state
- Working with browser storage
- Creating reusable UI patterns
- Implementing dark mode themes
- Writing clean and maintainable JavaScript

---

## 👨‍💻 Author

**Harsh Karki**

Frontend Developer passionate about creating modern and user-friendly web applications.

Linked: https://www.linkedin.com/in/harshvardhan-singh-karki-a9316038a/

---

## 📄 License

This project is open-source and available under the MIT License.

---

### ⭐ If you like this project, consider giving it a star on GitHub!
