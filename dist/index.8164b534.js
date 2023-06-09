(()=>{
    const menuBtnRef = document.querySelector("[data-menu-button]");
    const mobileMenuRef = document.querySelector("[data-menu]");
    const body = document.querySelector("[data-body]");
    menuBtnRef.addEventListener("click", ()=>{
        const expanded = menuBtnRef.getAttribute("aria-expanded") === "true" || false;
        menuBtnRef.classList.toggle("is-open");
        menuBtnRef.setAttribute("aria-expanded", !expanded);
        document.body.classList.toggle("menu-button");
        mobileMenuRef.classList.toggle("is-open");
        body.classList.toggle("no-scroll");
    });
})();

//# sourceMappingURL=index.8164b534.js.map
