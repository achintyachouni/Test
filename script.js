document.addEventListener('DOMContentLoaded', function() {

    // FAQ Accordion Functionality
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const faqItem = question.parentElement;
            const faqAnswer = question.nextElementSibling;

            // Toggle active class for styling and arrow rotation
            question.classList.toggle('active');

            // Toggle max-height for smooth opening/closing
            if (faqItem.classList.contains('active')) {
                // Set to scrollHeight to properly expand
                faqAnswer.style.maxHeight = faqAnswer.scrollHeight + "px";
            } else {
                faqAnswer.style.maxHeight = null;
            }

            // Close other FAQs if this one is opened (optional, for single open accordion)
            // faqQuestions.forEach(otherQuestion => {
            //     if (otherQuestion !== question && otherQuestion.classList.contains('active')) {
            //         otherQuestion.classList.remove('active');
            //         otherQuestion.nextElementSibling.style.maxHeight = null;
            //     }
            // });
        });
    });

    // Smooth Scrolling for anchor links (optional but good UX)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

});
