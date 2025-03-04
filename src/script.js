document.addEventListener("DOMContentLoaded", function() {
    const app = document.getElementById("app");

    const routes = {
        "/": {
            title: "Home",
            content: "<h1>Home Page</h1>"
        },
        "/about": {
            title: "About",
            content: "<h1>About Page</h1>"                
        },
        "/references": {
            title: "References",
            content: "<h1>References Page</h1>"                
        },
        "/contact": {
            title: "Contact",
            content: "<h1>Contact Page</h1>"                
        },        
    };

    function navigate(url) {
        if (routes[url]) {
            document.title = routes[url].title;
            app.innerHTML = routes[url].content;
            console.log("HTML here? ===> ", app.innerHTML);
            history.pushState({ path: url }, routes[url].title, url);
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
        const path = event.state?.path || "/";
        navigate(path);
    })

    const { pathname } = window.location.pathname;
    if (routes[pathname]) {
        navigate(pathname);
    } else {
        navigate("/");
    }
})