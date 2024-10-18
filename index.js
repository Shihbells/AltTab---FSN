window.addEventListener("blur", () => {
    document.title = "(◡︵◡) oops...";
});

window.addEventListener("focus", () => {
    document.title = "(⁀ᗢ⁀) safe!";
} );

/*
document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "hidden") {
        document.title = "(◡︵◡) oops...";
    } else if (document.visibilityState === "visible") {
        document.title = "(⁀ᗢ⁀) safe!";
    }
});
*/