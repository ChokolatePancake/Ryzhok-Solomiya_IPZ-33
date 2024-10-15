document.addEventListener("DOMContentLoaded", function () {
    const popup = document.querySelector(".popup");
    const openButton = document.querySelector(".banner__button");
    const closeButton = document.querySelector(".popup__close");
    const submitButton = document.querySelector(".popup__submit");
    const form = document.querySelector(".popup__form");

    // Function to validate phone number format
    function isPhoneComplete(phone) {
        return /^\+\(380\)-\d{3}-\d{2}-\d{2}$/.test(phone);
    }

    // Function to validate email format
    function isValidEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }

    // Open popup
    openButton.addEventListener("click", () => {
        popup.classList.add("show");
    });

    // Close popup
    closeButton.addEventListener("click", () => {
        popup.classList.remove("show");
    });

    // Validate form fields on submit
    submitButton.addEventListener("click", (e) => {
        e.preventDefault();
        let isValid = true;

        form.querySelectorAll("[required]").forEach(field => {
            if (field.value.trim() === "") {
                field.classList.add("highlight-error");
                console.log("aaaaaaaaa")
                isValid = false;
            } else if (field.type === "tel" && !isPhoneComplete(field.value)) {
                field.classList.add("highlight-error");
                isValid = false;
            } else if (field.type === "email" && !isValidEmail(field.value)) {
                field.classList.add("highlight-error");
                isValid = false;
            } else if (field.type === "checkbox" && !field.checked) {
                field.classList.add("highlight-error");
                isValid = false;
            } else {
                field.classList.remove("highlight-error");
            }
        });

        // If all fields are valid, submit the form
        if (isValid) {
            popup.classList.remove("show");
            console.log("Form submitted!");
            form.reset();
        }
    });

    // Remove error highlighting on input
    form.addEventListener("input", (e) => {
        if (e.target.required) {
            e.target.classList.remove("highlight-error");
        }
    });
});
