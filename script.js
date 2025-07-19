

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('todo-form');
  const input = document.getElementById('todo-input');
  const list = document.getElementById('todo-list');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const taskText = input.value.trim();
    if (taskText !== '') {
      const li = document.createElement('li');
      li.textContent = taskText;

      // Toggle completed class
      li.addEventListener('click', () => {
        li.classList.toggle('completed');
      });

      // Delete button
      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'Delete';
      deleteBtn.style.marginLeft = '10px';
      deleteBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        list.removeChild(li);
      });

      li.appendChild(deleteBtn);
      list.appendChild(li);
      input.value = '';
    }
  });
});
