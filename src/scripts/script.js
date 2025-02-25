document.addEventListener("DOMContentLoaded", function() {
    const app = document.getElementById("app");

    const routes = {
        home: {
            title: "Home",
            content: "<h1>Home Page</h1>"
        },
        about: {
            title: "About",
            content: "<h1>About Page</h1>"
        },
        references: {
            title: "References",
            content: "<h1>References Page</h1>"
        },
        contact: {
            title: "Contact",
            content: "<h1>Contact Page</h1>"
        }
    };
    function navigate(page) {
        if (routes[page]) {
            document.title = routes[page].title;
            app.innerHTML = routes[page].content;
            history.pushState({ page }, routes[page].title, `#${page}`);
        }
    }

    document.querySelectorAll("nav a").forEach(function(link) {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const page = this.getAttribute("data-page"); // dis line of code seems vewy sus...
            navigate(page);
        })
    })

    window.addEventListener("popstate", function(event) {
        if (event.state && event.state.page) {
            navigate(event.state.page);
        }
    })

    const initialPage = location.hash.replace("#", "") || "home";
    navigate(initialPage);
})