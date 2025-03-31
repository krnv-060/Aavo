document.addEventListener("DOMContentLoaded", function() {
    const faqs = document.querySelectorAll(".faq");

    faqs.forEach(function(faq) {
        const questionBlock = faq.querySelector(".question-block");
        const faqAnswer = faq.querySelector(".answer-block");

        questionBlock.addEventListener("click", function(event) {
            const isOpen = faq.classList.contains("open");

            // Close all other FAQs
            faqs.forEach(function(otherFaq) {
                if (otherFaq !== faq) { // Skip the current FAQ
                    otherFaq.classList.remove("open");
                    const otherAnswer = otherFaq.querySelector(".answer-block");
                    otherAnswer.style.height = "0";
                }
            });

            // Toggle the current FAQ
            if (isOpen) {
                faqAnswer.style.height = "0";
            } else {
                faqAnswer.style.height = faqAnswer.scrollHeight + "px";
            }
            faq.classList.toggle("open");
            event.stopPropagation();
        });

        // Close the FAQ when clicking outside
        document.addEventListener("click", function(event) {
            if (!faq.contains(event.target)) {
                faq.classList.remove("open");
                faqAnswer.style.height = "0";
            }
        });
    });
});