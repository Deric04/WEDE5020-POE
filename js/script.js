document.addEventListener("DOMContentLoaded", function () {
    // Product search and filtering
    const productSearch = document.getElementById("productSearch");
    const productItems = document.querySelectorAll(".product-card");

    if (productSearch && productItems.length > 0) {
        productSearch.addEventListener("input", function () {
            const searchTerm = productSearch.value.toLowerCase().trim();

            productItems.forEach(function (item) {
                const productText = item.textContent.toLowerCase();
                item.style.display = productText.includes(searchTerm) ? "" : "none";
            });
        });
    }

    // FAQ accordion
    const faqQuestions = document.querySelectorAll(".faq-question");

    faqQuestions.forEach(function (question) {
        question.addEventListener("click", function () {
            const answer = question.nextElementSibling;

            if (!answer) {
                return;
            }

            const isExpanded = question.getAttribute("aria-expanded") === "true";

            question.setAttribute("aria-expanded", String(!isExpanded));
            answer.hidden = isExpanded;
        });
    });

    // Shared form helpers
    function showResponse(form, message, type) {
        let response = form.querySelector(".form-response");

        if (!response) {
            response = document.createElement("div");
            response.className = "form-response";
            response.setAttribute("role", "status");
            response.setAttribute("aria-live", "polite");
            form.prepend(response);
        }

        response.textContent = message;
        response.className = "form-response " + type;
    }

    function clearResponse(form) {
        const response = form.querySelector(".form-response");

        if (response) {
            response.textContent = "";
            response.className = "form-response";
        }
    }

   function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

    function isValidPhone(phone) {
        const digits = phone.replace(/\D/g, "");
        return digits.length >= 9 && digits.length <= 15;
    }

    function isWebSubmissionAction(form) {
        const action = form.getAttribute("action");

        if (!action) {
            return false;
        }

        try {
            const url = new URL(action, window.location.href);
            return url.protocol === "https:" || url.protocol === "http:";
        } catch (error) {
            return false;
        }
    }

    // Enquiry form
   const enquiryForm = document.getElementById("enquiry-form");

    if (enquiryForm) {
        const enquiryType = enquiryForm.querySelector(
            'select[name="enquiry-type"], input[name="enquiry-type"]:checked'
        );
        const conditionalFields = enquiryForm.querySelectorAll(
            ".conditional-field"
        );

        function updateConditionalFields() {
            const selectedType = enquiryForm.querySelector(
                'select[name="enquiry-type"], input[name="enquiry-type"]:checked'
            );

            const selectedValue = selectedType ? selectedType.value.toLowerCase() : "";

            conditionalFields.forEach(function (field) {
                const fieldType = (
                    field.dataset.type ||
                    field.getAttribute("data-enquiry-type") ||
                    ""
                ).toLowerCase();

                const shouldShow =
                    !fieldType ||
                    fieldType === selectedValue ||
                    selectedValue === "volunteer" ||
                    selectedValue === "sponsor";

                field.hidden = !shouldShow;

                field.querySelectorAll("input, select, textarea").forEach(
                    function (input) {
                        input.disabled = !shouldShow;
                    }
                );
            });
        }

        if (enquiryType || conditionalFields.length > 0) {
            updateConditionalFields();

            const enquiryTypeControls = enquiryForm.querySelectorAll(
                'select[name="enquiry-type"], input[name="enquiry-type"]'
            );

            enquiryTypeControls.forEach(function (control) {
                control.addEventListener("change", updateConditionalFields);
            });
        }

        enquiryForm.addEventListener("submit", async function (event) {
            event.preventDefault();
            clearResponse(enquiryForm);

            if (!enquiryForm.checkValidity()) {
                enquiryForm.reportValidity();
                showResponse(
                    enquiryForm,
                    "Please complete all required fields correctly before submitting your enquiry.",
                    "error"
                );
                return;
            }

            const emailInput = enquiryForm.querySelector(
                'input[type="email"], input[name="email"]'
            );

            if (emailInput && !isValidEmail(emailInput.value.trim())) {
                showResponse(
                    enquiryForm,
                    "Please enter a valid email address.",
                    "error"
                );
                emailInput.focus();
                return;
            }

            const phoneInput = enquiryForm.querySelector(
                'input[type="tel"], input[name="phone"]'
            );

            if (phoneInput && phoneInput.value.trim() &&
                !isValidPhone(phoneInput.value.trim())) {
                showResponse(
                    enquiryForm,
                    "Please enter a valid contact number.",
                    "error"
                );
                phoneInput.focus();
                return;
            }

            if (!isWebSubmissionAction(enquiryForm)) {
                showResponse(
                    enquiryForm,
                    "The enquiry form is not connected to an online submission service yet. Please configure its form action before submitting.",
                    "error"
                );
                return;
            }

            const submitButton = enquiryForm.querySelector(
                'button[type="submit"], input[type="submit"]'
            );

            const originalButtonText = submitButton
                ? (submitButton.textContent || submitButton.value)
                : "";

            if (submitButton) {
                submitButton.disabled = true;

                if (submitButton.tagName === "INPUT") {
                    submitButton.value = "Submitting...";
                } else {
                    submitButton.textContent = "Submitting...";
                }
            }

            try {
                const response = await fetch(
                    enquiryForm.getAttribute("action"),
                    {
                        method: "POST",
                        body: new FormData(enquiryForm),
                        headers: {
                            Accept: "application/json"
                        }
                    }
                );

                if (!response.ok) {
                    throw new Error("The enquiry could not be submitted.");
                }

                const selectedType = enquiryForm.querySelector(
                    'select[name="enquiry-type"], input[name="enquiry-type"]:checked'
                );

                const type = selectedType
                    ? selectedType.value.toLowerCase()
                    : "product";

                let successMessage;

                if (type.includes("volunteer")) {
                    successMessage =
                        "Thank you for your volunteer enquiry. Your details have been submitted successfully. We will review your information and contact you about available opportunities.";
                } else if (type.includes("sponsor")) {
                    successMessage =
                        "Thank you for your sponsorship enquiry. Your details have been submitted successfully. We will review your proposal and contact you to discuss the next steps.";
                } else {
                    successMessage =
                        "Thank you for your enquiry. Your details have been submitted successfully. We will contact you with information about product availability, pricing and any further details you need.";
                }

                showResponse(enquiryForm, successMessage, "success");
                enquiryForm.reset();
                updateConditionalFields();
            } catch (error) {
                showResponse(
                    enquiryForm,
                    "Sorry, your enquiry could not be submitted. Please check your internet connection and try again.",
                    "error"
                );
            } finally {
                if (submitButton) {
                    submitButton.disabled = false;

                    if (submitButton.tagName === "INPUT") {
                        submitButton.value = originalButtonText;
                    } else {
                        submitButton.textContent = originalButtonText;
                    }
                }
            }
        });

        enquiryForm.addEventListener("reset", function () {
            clearResponse(enquiryForm);
        });
    }

    // Contact form
    const contactForm = document.getElementById("contactForm");

    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();
            clearResponse(contactForm);

            if (!contactForm.checkValidity()) {
                contactForm.reportValidity();
                showResponse(
                    contactForm,
                    "Please complete all required fields correctly before sending your message.",
                    "error"
                );
                return;
            }

            const nameInput = contactForm.querySelector(
                'input[name="name"], input[name="fullName"]'
            );

            const emailInput = contactForm.querySelector(
                'input[type="email"], input[name="email"]'
            );

            const messageInput = contactForm.querySelector(
                'textarea[name="message"], textarea'
            );

            const messageTypeInput = contactForm.querySelector(
                'select[name="messageType"]'
            );

            const name = nameInput ? nameInput.value.trim() : "";
            const email = emailInput ? emailInput.value.trim() : "";
            const message = messageInput ? messageInput.value.trim() : "";
            const messageType = messageTypeInput
                ? messageTypeInput.value
                : "General enquiry";

            if (email && !isValidEmail(email)) {
                showResponse(
                    contactForm,
                    "Please enter a valid email address.",
                    "error"
                );
                emailInput.focus();
                return;
            }

            if (message.length < 10) {
                showResponse(
                    contactForm,
                    "Please enter a message containing at least 10 characters.",
                    "error"
                );

                if (messageInput) {
                    messageInput.focus();
                }

                return;
            }

            const mailtoAction = contactForm.getAttribute("action") || "";

            if (!mailtoAction.toLowerCase().startsWith("mailto:")) {
                showResponse(
                    contactForm,
                    "The contact email address has not been configured correctly. Please contact the website administrator.",
                    "error"
                );
                return;
            }

            const recipient = mailtoAction.substring(7).split("?")[0];

            if (!recipient || !recipient.includes("@")) {
                showResponse(
                    contactForm,
                    "The contact email address has not been configured correctly.",
                    "error"
                );
                return;
            }

            const subject = "Bakes by MK - " + messageType;

            const body =
                "Name: " + name + "\n" +
                "Email: " + email + "\n" +
                "Message type: " + messageType + "\n\n" +
                "Message:\n" + message;

            const mailtoUrl =
                "mailto:" + recipient +
                "?subject=" + encodeURIComponent(subject) +
                "&body=" + encodeURIComponent(body);

            showResponse(
                contactForm,
                "Your email draft is being prepared. Please review it in your email application and press Send to deliver your message.",
                "success"
            );

            window.location.href = mailtoUrl;
        });

        contactForm.addEventListener("reset", function () {
            clearResponse(contactForm);
        });
    }
});