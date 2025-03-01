document.addEventListener("DOMContentLoaded", function() {
    const app = document.getElementById("app");

    async function navigate(url) {
        if (url === "/") {
            history.pushState({ path: url }, "", url);
        }

        console.log(`Navigating to: ${url}`);

        try {
            const response = await fetch(`${route}.html`);
            if (response.ok) {
                app.innerHTML = await response.text();
                history.pushState({ path: url }, "", url);
            } else {
                app.innerHTML = "<h1>Error: 404 - Page not Found D:</h1>";
            }
        } catch(error) {
            console.error("Error loading page: ", error);
        }
    }

    document.querySelectorAll("nav a").forEach(function(link) {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const url = this.getAttribute("href");
            navigate(url);
        })
    })
    window.addEventListener("popstate", function(event) {
        navigate(event.state?.path || "/");
    })
    navigate(window.location.pathname);
})