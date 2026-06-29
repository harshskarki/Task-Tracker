document.addEventListener('DOMContentLoaded', () => {
            // State variables
            let tasks = JSON.parse(localStorage.getItem('proTasks')) || [];
            let currentFilter = 'all';

            // DOM Elements
            const taskInput = document.getElementById('taskInput');
            const addTaskBtn = document.getElementById('addTaskBtn');
            const taskList = document.getElementById('taskList');
            const emptyState = document.getElementById('emptyState');
            const controls = document.getElementById('controls');
            const itemsLeft = document.getElementById('itemsLeft');
            const filterBtns = document.querySelectorAll('.filter-btn');
            const clearCompletedBtn = document.getElementById('clearCompleted');
            const themeToggle = document.getElementById('themeToggle');

            // --- Theme Logic ---
            let isDarkMode = localStorage.getItem('darkMode') === 'true';
            
            function applyTheme() {
                if (isDarkMode) {
                    document.body.setAttribute('data-theme', 'dark');
                    themeToggle.textContent = '☀️';
                } else {
                    document.body.removeAttribute('data-theme');
                    themeToggle.textContent = '🌙';
                }
            }
            
            applyTheme(); // Apply on load

            themeToggle.addEventListener('click', () => {
                isDarkMode = !isDarkMode;
                localStorage.setItem('darkMode', isDarkMode);
                applyTheme();
            });


            // --- Core App Logic ---
            function saveTasks() {
                localStorage.setItem('proTasks', JSON.stringify(tasks));
            }

            function render() {
                taskList.innerHTML = '';
                
                // Filter tasks based on current selection
                let filteredTasks = tasks;
                if (currentFilter === 'active') {
                    filteredTasks = tasks.filter(task => !task.completed);
                } else if (currentFilter === 'completed') {
                    filteredTasks = tasks.filter(task => task.completed);
                }

                // Render tasks
                filteredTasks.forEach(task => {
                    const li = document.createElement('li');
                    li.className = `task-item ${task.completed ? 'completed' : ''}`;
                    
                    li.innerHTML = `
                        <div class="checkbox"></div>
                        <span class="task-text">${task.text}</span>
                        <button class="delete-btn">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <polyline points="3 6 5 6 21 6"></polyline>
                                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                <line x1="10" y1="11" x2="10" y2="17"></line>
                                <line x1="14" y1="11" x2="14" y2="17"></line>
                            </svg>
                        </button>
                    `;

                    // Toggle Complete
                    const toggleArea = li.querySelectorAll('.checkbox, .task-text');
                    toggleArea.forEach(el => {
                        el.addEventListener('click', () => {
                            task.completed = !task.completed;
                            saveTasks();
                            render();
                        });
                    });

                    // Delete Task
                    li.querySelector('.delete-btn').addEventListener('click', () => {
                        tasks = tasks.filter(t => t.id !== task.id);
                        saveTasks();
                        render();
                    });

                    taskList.appendChild(li);
                });

                // Update UI based on state
                const activeCount = tasks.filter(t => !t.completed).length;
                itemsLeft.textContent = `${activeCount} item${activeCount !== 1 ? 's' : ''} left`;

                if (tasks.length === 0) {
                    emptyState.style.display = 'block';
                    controls.style.display = 'none';
                } else {
                    emptyState.style.display = 'none';
                    controls.style.display = 'flex';
                }
            }

            // Add new task
            function addTask() {
                const text = taskInput.value.trim();
                if (text === '') return;

                tasks.push({
                    id: Date.now(),
                    text: text,
                    completed: false
                });

                taskInput.value = '';
                saveTasks();
                render();
            }

            // Event Listeners
            addTaskBtn.addEventListener('click', addTask);
            
            taskInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') addTask();
            });

            clearCompletedBtn.addEventListener('click', () => {
                tasks = tasks.filter(t => !t.completed);
                saveTasks();
                render();
            });

            filterBtns.forEach(btn => {
                btn.addEventListener('click', (e) => {
                    filterBtns.forEach(b => b.classList.remove('active'));
                    e.target.classList.add('active');
                    currentFilter = e.target.dataset.filter;
                    render();
                });
            });

            // Initial Render
            render();
        });