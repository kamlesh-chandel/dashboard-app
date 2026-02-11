export const isAuthenticated = () => {
    const isLoggedIn = localStorage.getItem("isAuthenticated");
    return !!isLoggedIn;
}