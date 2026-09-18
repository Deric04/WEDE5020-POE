// =========================================
// BAKES BY MK - JAVASCRIPT
// =========================================

document.addEventListener("DOMContentLoaded", function () {

    console.log("Bakes by MK website loaded successfully.");

    // =========================================
    // PRODUCT SEARCH
    // =========================================

    const searchInput = document.getElementById("product-search");
    const productCards = document.querySelectorAll(".product-card");
    const searchMessage = document.getElementById("search-message");

    if (searchInput) {

        searchInput.addEventListener("input", function () {

            const searchTerm =
                searchInput.value.toLowerCase().trim();

            let visibleProducts = 0;

            productCards.forEach(function (card) {

                const productName =
                    card.querySelector("h3").textContent.toLowerCase();

                const productDescription =
                    card.querySelector("p").textContent.toLowerCase();

                if (
                    productName.includes(searchTerm) ||
                    productDescription.includes(searchTerm)
                ) {

                    card.style.display = "";
                    visibleProducts++;

                } else {

                    card.style.display = "none";

                }

            });

            if (searchMessage) {

                if (
                    searchTerm !== "" &&
                    visibleProducts === 0
                ) {

                    searchMessage.textContent =
                        "No products found. Please try another search.";

                } else {

                    searchMessage.textContent = "";

                }

            }

        });

    }


    // =========================================
    // FAQ ACCORDION
    // =========================================

    const faqQuestions =
        document.querySelectorAll(".faq-question");

    faqQuestions.forEach(function (question) {

        question.addEventListener("click", function () {

            const answer =
                question.nextElementSibling;

            const isOpen =
                answer.style.display === "block";

            if (isOpen) {

                answer.style.display = "none";

                question.setAttribute(
                    "aria-expanded",
                    "false"
                );

            } else {

                answer.style.display = "block";

                question.setAttribute(
                    "aria-expanded",
                    "true"
                );

            }

        });

    });


    // =========================================
    // ENQUIRY FORM
    // VALIDATION + AJAX SUBMISSION
    // =========================================

    const enquiryForm =
        document.getElementById("enquiry-form");

    const enquiryType =
        document.getElementById("enquiry-type");

    const enquiryResponse =
        document.getElementById("enquiry-response");

    const productField =
        document.getElementById("product");

    const dateField =
        document.getElementById("preferred-date");

    const quantityField =
        document.getElementById("quantity");


    // -----------------------------------------
    // Enquiry Field Control
    // -----------------------------------------

    function updateEnquiryFields() {

        if (
            !enquiryType ||
            !productField ||
            !dateField ||
            !quantityField
        ) {
            return;
        }

        if (
            enquiryType.value === "volunteer" ||
            enquiryType.value === "sponsor"
        ) {

            productField.removeAttribute("required");
            dateField.removeAttribute("required");
            quantityField.removeAttribute("required");

            productField.disabled = true;
            dateField.disabled = true;
            quantityField.disabled = true;

        } else {

            productField.setAttribute(
                "required",
                "required"
            );

            dateField.setAttribute(
                "required",
                "required"
            );

            quantityField.setAttribute(
                "required",
                "required"
            );

            productField.disabled = false;
            dateField.disabled = false;
            quantityField.disabled = false;

        }

    }


    if (enquiryType) {

        enquiryType.addEventListener(
            "change",
            updateEnquiryFields
        );

        updateEnquiryFields();

    }


    // -----------------------------------------
    // Enquiry Form Submission
    // -----------------------------------------

    if (
        enquiryForm &&
        enquiryType &&
        enquiryResponse
    ) {

        enquiryForm.addEventListener(
            "submit",
            async function (event) {

                event.preventDefault();


                // HTML validation
                if (!enquiryForm.checkValidity()) {

                    enquiryForm.reportValidity();

                    return;

                }


                // Email validation
                const emailField =
                    document.getElementById("email");

                const emailPattern =
                    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


                if (
                    emailField &&
                    !emailPattern.test(
                        emailField.value.trim()
                    )
                ) {

                    emailField.setCustomValidity(
                        "Please enter a valid email address."
                    );

                    enquiryForm.reportValidity();

                    emailField.setCustomValidity("");

                    return;

                }


                // Phone validation
                const phoneField =
                    document.getElementById("phone");

                const phonePattern =
                    /^[0-9+\s()-]{7,20}$/;


                if (
                    phoneField &&
                    !phonePattern.test(
                        phoneField.value.trim()
                    )
                ) {

                    phoneField.setCustomValidity(
                        "Please enter a valid phone number."
                    );

                    enquiryForm.reportValidity();

                    phoneField.setCustomValidity("");

                    return;

                }


                // Show submission message
                enquiryResponse.textContent =
                    "Submitting your enquiry...";

                enquiryResponse.style.display =
                    "block";


                try {

                    const response =
                        await fetch(
                            enquiryForm.action,
                            {
                                method: "POST",

                                body:
                                    new FormData(
                                        enquiryForm
                                    ),

                                headers: {
                                    "Accept":
                                        "application/json"
                                }
                            }
                        );


                    if (response.ok) {

                        enquiryResponse.textContent =
                            "Thank you for your enquiry. " +
                            "Your details have been submitted successfully. " +
                            "We will review your request and contact you with " +
                            "availability, pricing or further information.";

                        enquiryForm.reset();

                        updateEnquiryFields();

                    } else {

                        enquiryResponse.textContent =
                            "There was a problem submitting your enquiry. " +
                            "Please try again later.";

                    }

                } catch (error) {

                    console.error(
                        "Enquiry submission error:",
                        error
                    );

                    enquiryResponse.textContent =
                        "Unable to submit your enquiry at this time. " +
                        "Please check your internet connection and try again.";

                }

            }
        );

    }


    // -----------------------------------------
    // Clear Enquiry Response When Reset
    // -----------------------------------------

    if (
        enquiryForm &&
        enquiryResponse
    ) {

        enquiryForm.addEventListener(
            "reset",
            function () {

                enquiryResponse.textContent = "";

                enquiryResponse.style.display =
                    "none";

                setTimeout(
                    function () {

                        updateEnquiryFields();

                    },
                    0
                );

            }
        );

    }


    // =========================================
// CONTACT FORM
// VALIDATION + AJAX SUBMISSION
// =========================================

const contactForm =
    document.getElementById("contact-form");

const contactName =
    document.getElementById("contact-name");

const contactEmail =
    document.getElementById("contact-email");

const messageType =
    document.getElementById("message-type");

const contactMessage =
    document.getElementById("contact-message");

const contactResponse =
    document.getElementById("contact-response");


if (
    contactForm &&
    contactName &&
    contactEmail &&
    messageType &&
    contactMessage &&
    contactResponse
) {

    contactForm.addEventListener(
        "submit",
        async function (event) {

            event.preventDefault();

            // HTML validation
            if (!contactForm.checkValidity()) {

                contactForm.reportValidity();

                return;

            }


            // Additional email validation
            const emailPattern =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


            if (
                !emailPattern.test(
                    contactEmail.value.trim()
                )
            ) {

                contactEmail.setCustomValidity(
                    "Please enter a valid email address."
                );

                contactForm.reportValidity();

                contactEmail.setCustomValidity("");

                return;

            }


            // Message length validation
            const messageText =
                contactMessage.value.trim();


            if (messageText.length < 10) {

                contactMessage.setCustomValidity(
                    "Please enter a message containing at least 10 characters."
                );

                contactForm.reportValidity();

                contactMessage.setCustomValidity("");

                return;

            }


            // Show submission status
            contactResponse.textContent =
                "Submitting your message...";

            contactResponse.style.display =
                "block";


            try {

                const response =
                    await fetch(
                        contactForm.action,
                        {
                            method: "POST",

                            body:
                                new FormData(
                                    contactForm
                                ),

                            headers: {
                                "Accept":
                                    "application/json"
                            }
                        }
                    );


                if (response.ok) {

                    contactResponse.textContent =
                        "Thank you for contacting Bakes by MK. " +
                        "Your message has been submitted successfully. " +
                        "We will review your message and get back to you.";

                    contactForm.reset();

                } else {

                    contactResponse.textContent =
                        "There was a problem submitting your message. " +
                        "Please try again later.";

                }

            } catch (error) {

                console.error(
                    "Contact form submission error:",
                    error
                );

                contactResponse.textContent =
                    "Unable to submit your message at this time. " +
                    "Please check your internet connection and try again.";

            }

        }
    );

}


// =========================================
// CLEAR CONTACT RESPONSE WHEN RESET
// =========================================

if (
    contactForm &&
    contactResponse
) {

    contactForm.addEventListener(
        "reset",
        function () {

            contactResponse.textContent = "";

            contactResponse.style.display =
                "none";

        }
    );

}


    // =========================================
    // CLEAR CONTACT RESPONSE WHEN RESET
    // =========================================

    if (
        contactForm &&
        contactResponse
    ) {

        contactForm.addEventListener(
            "reset",
            function () {

                contactResponse.textContent = "";

                contactResponse.style.display =
                    "none";

            }
        );

    }

});