const tabsTitle = document.querySelectorAll('.tabs-title');
const dataContent = document.querySelectorAll('.tabs-content li');

tabsTitle.forEach(tabTitle => {
    tabTitle.addEventListener('click', function(){
        tabsTitle.forEach(t => t.classList.remove('active'));
        dataContent.forEach(c => c.classList.remove('active'));

        this.classList.add('active');

        const tabId = this.dataset.tab;
        const content = document.querySelector(`.tabs-content li[data-content="${tabId}"]`);
        content.classList.add('active');

    });
});