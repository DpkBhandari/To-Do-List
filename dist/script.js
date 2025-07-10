// NavBar Functionality
{
  // 🔹 Navbar Toggle Logic
  const navLinks = document.querySelector("#nav-links");
  const nav_Bars = document.querySelector("#nav-bars");
  const body = document.querySelector("body");

  function ToggleBars(e) {
    navLinks.classList.toggle("hidden");
    e.stopPropagation();
  }

  function sideClick(e) {
    if (
      !navLinks.classList.contains("hidden") &&
      !navLinks.contains(e.target) &&
      !nav_Bars.contains(e.target)
    ) {
      navLinks.classList.add("hidden");
    }
  }

  document.body.addEventListener("click", sideClick);
  nav_Bars.addEventListener("click", ToggleBars);
}
// Selection Dropdown Functionality

{
  const menu = document.getElementById("projectDropdown");
  function toggleDropdown() {
    menu.classList.toggle("hidden");
  }
  menu.addEventListener("click", toggleDropdown);
}

// ToDo List Functionality
{
  document.addEventListener("DOMContentLoaded", () => {
    const taskName = document.querySelector("#taskInput");
    const post = document.querySelector("#postBtn");
    const list = document.querySelector("#taskList");

    post.addEventListener("click", (e) => {
      e.preventDefault(); // Prevent form submission if inside form

      const task = taskName.value.trim();
      if (task === "") return alert("Empty Task Can't Be Added");

      const newLi = document.createElement("li");
      newLi.className =
        "flex justify-between items-center bg-white px-4 py-3 rounded shadow text-black font-medium";

      const taskText = document.createElement("span");
      taskText.className = "flex-1";
      taskText.textContent = task;

      const cancel = document.createElement("button");
      cancel.className = "ml-4 hover:text-red-700";
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
  });
}

//DarkMode Functionality

{
  const body = document.querySelector("body");

  if (body.style.backgroundColor == "bg-grey-100") {
    console.error("hii");
  }
}
