function deleteTask(taskNumber) {
  alert(
    `This action would remove the task ${taskNumber}.\nDo you want to continue`
  );
}

{
  /* <li class="container">
          <label class="label"
            >Task 1
            <input type="checkbox" checked="checked" />
            <span class="checkmark"></span>
          </label>
          <button type="submit">Edit</button>
          <button class="Delete" type="button" onclick="deleteTask(1)">
            Delete
          </button>
        </li> */
}

const tasks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const taskListContainer = document.getElementById("task-list-container");

let listItems = "";
for (let i = 0; i < tasks.length; i++) {
  listItems = `${listItems}
    <li class="container">
      <label class="label"
        >Task ${i}
        <input type="checkbox" ${i === 9 ? "checked='checked'" : ""} />
        <span class="checkmark"></span>
      </label>
      <button type="submit">Edit</button>
      <button class="Delete" type="button" onclick="deleteTask(1)">
        Delete
      </button>
    </li>
  `;
}

taskListContainer.innerHTML = listItems;
