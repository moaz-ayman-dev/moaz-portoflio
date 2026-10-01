const elements = document.querySelectorAll(".scroll-hidden");

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.remove("scroll-hidden");
        } else {
            entry.target.classList.add("scroll-hidden");
        }

    });

});

elements.forEach((element) => {
    observer.observe(element);
});


const cards = document.querySelectorAll(".card");

cards.forEach((card) => {

    card.addEventListener("click", () => {

        const link = card.querySelector("a");

        window.location.href = link.href;

    });

});


const form = document.querySelector("form");

if (form) {

    const loader = document.querySelector(".loader");

    form.addEventListener("submit", (event) => {

        event.preventDefault();

        const name = document.querySelector("#name");
        const email = document.querySelector("#email");
        const project = document.querySelector("#project");
        const message = document.querySelector("#message");

        if (
            name.value == "" ||
            email.value == "" ||
            project.value == "" ||
            message.value == ""
        ) {

            alert("Please fill in all fields.");

        } else {

            loader.style.display = "block";

            const userName = name.value;

            setTimeout(() => {

                loader.style.display = "none";

                form.reset();

                alert(`Thank you, ${userName}! Your request has been submitted successfully.`);

            }, 1500);
        }

    });

}