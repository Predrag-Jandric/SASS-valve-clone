
const hTags = document.querySelectorAll("h2");

// console.log(hTags);

hTags.forEach((element) => {
    element.addEventListener("click", (event) => {

        element.nextElementSibling.classList.toggle("JS-toggle-class");
        // console.log("i am pressed");

    });
});
