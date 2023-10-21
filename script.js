
    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault(); // Prevent the default link behavior (page reload)

            // Remove the "active" class from all links
            navLinks.forEach(link => link.classList.remove("active"));

            // Add the "active" class to the clicked link
            this.classList.add("active");
        });
    });

