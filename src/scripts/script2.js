const router = async () => {
    const routes = [
        { path: "/", view: () => console.log("the home page") },
        { path: "/about", view: () => console.log("the about page") },
        { path: "/references", view: () => console.log("the references page") },
        { path: "/contact", view: () => console.log("the contact page") },
    ];

    // test each route for potential match
    const potentialMatches = routes.map((route) => {
        return {
            route: route,
            isMatch: location.pathname === route.path
        }
    });
    console.log("potentialMatches ===> ", potentialMatches);
}

document.addEventListener("DOMContentLoaded", () => {
    router();
})