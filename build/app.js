// light mode / dark mode

const sunIcon = document.querySelector("#sun");
const moonIcon = document.querySelector("#moon");

const userTheme = localStorage.getItem("theme");
const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

const iconToggle = () => {
    sunIcon.classList.toggle("display-none");
    moonIcon.classList.toggle("display-none");
}

const themeCheck = () => {
    if(userTheme === "dark" || (!userTheme && systemTheme)){
        document.documentElement.classList.add("dark");
        moonIcon.classList.add("display-none");
        return;
    }
    sunIcon.classList.add("display-none");
}

const themeSwitch = () => {
    if(document.documentElement.classList.contains("dark")){
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
        iconToggle();
        return;
    }
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
    iconToggle();
}


sunIcon.addEventListener("click", () => {
    themeSwitch();
});

moonIcon.addEventListener("click", () => {
    themeSwitch();
});

themeCheck();


// Navigate up

const navigateUp = document.querySelector("#arrow-up");

window.onscroll = function () {
    scrollFunction()
}

function scrollFunction () {
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        document.querySelector("#arrow-up").style.display = "block";
    } else {
        document.querySelector("#arrow-up").style.display = "none";
    }
}

navigateUp.onclick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })}

    



