document.querySelectorAll('.faqs-list').forEach(faqItem => {
    const buttonChevronOpen = faqItem.querySelector('.button-chevron-open');
    const buttonChevronClosed = faqItem.querySelector('.button-chevron-closed');
    const faqsText = faqItem.querySelector('.faqs-text');

    buttonChevronClosed.addEventListener('click', () => {
        buttonChevronClosed.style.display = 'none';
        buttonChevronOpen.style.display = 'block';
        faqsText.classList.add("active");
    });

    buttonChevronOpen.addEventListener('click', () => {
        buttonChevronClosed.style.display = 'block';
        buttonChevronOpen.style.display = 'none';
        faqsText.classList.remove("active");
    });
});