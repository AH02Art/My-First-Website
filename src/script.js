document.addEventListener("DOMContentLoaded", function() {
    const app = document.getElementById("app");

    const routes = {
        "/": {
            title: "Home",
            file: "home.html"
        },
        "/about": {
            title: "About",
            file: "about.html"                
        },
        "/references": {
            title: "References",
            file: "references.html"                
        },
        "/contact": {
            title: "Contact",
            file: "contact.html"                
        },        
    };

    async function navigate(url) {
        if (routes[url]) {
            document.title = routes[url].title;
            try {
                const response = await fetch(routes[url].file);
                if (response.ok) {
                    app.innerHTML = await response.text();
                    history.pushState({ path: url }, routes[url].title, url);
                } else {
                    app.innerHTML = "<h1>ERROR 404 - Page Not Found</h1>";
                }
            } catch(error) {
                console.error("Error loacing page: ", error);
            }
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
    navigate(pathname in routes ? pathname : "/");
    // if (routes[pathname]) {
    //     navigate(pathname);
    // } else {
    //     navigate("/");
    // }
})