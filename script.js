// JavaScript code to add interactivity

// Wait for the DOM content to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Get all project elements
    const projects = document.querySelectorAll(".project");
  
    // Add click event listener to each project
    projects.forEach(project => {
      project.addEventListener("click", function() {
        // Toggle the 'active' class to show/hide project description
        this.classList.toggle("active");
      });
    });
  });
  