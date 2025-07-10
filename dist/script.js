const taskName = document.querySelector("#taskInput");
const post = document.querySelector("#postBtn");
const list = document.querySelector("#taskList");

post.addEventListener("click", () => {
  const task = taskName.value.trim();
  if (task === "") return alert("Empty Task Can't Be Added");

  // Create new list item
  const newLi = document.createElement("li");
  newLi.className =
    "flex justify-between items-center bg-white p-3 rounded shadow text-black font-medium";

  const taskText = document.createElement("span");
  taskText.textContent = task;

  // Create cancel button
  const cancel = document.createElement("button");
  cancel.className = "ml-4 p-2 rounded hover:text-red-700";
  cancel.style.background = "transparent";
  cancel.style.border = "none";

  const icon = document.createElement("i");
  icon.className = "fa-regular fa-circle-xmark text-red-600 text-2xl";
  cancel.appendChild(icon);

  cancel.addEventListener("click", () => {
    newLi.remove();
  });

  newLi.appendChild(taskText);
  newLi.appendChild(cancel);
  list.appendChild(newLi);

  taskName.value = "";
});
