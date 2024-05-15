// script.js
document.addEventListener("DOMContentLoaded", function() {
    const tabs = document.querySelectorAll(".tab-nav li a");
    const tabPanes = document.querySelectorAll(".tab-pane");
  
    tabs.forEach((tab) => {
      tab.addEventListener("click", (e) => {
        e.preventDefault();
        const target = e.target.getAttribute("href");
        const tabPane = document.querySelector(target);
  
        tabs.forEach((t) => t.classList.remove("active"));
        tab.classList.add("active");
  
        tabPanes.forEach((pane) => pane.classList.remove("active"));
        tabPane.classList.add("active");
      });
    });
  });