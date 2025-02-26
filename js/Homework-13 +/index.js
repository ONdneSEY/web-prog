document.addEventListener("DOMContentLoaded", function(){
    const ofOnDarkTheme = document.getElementById('ofOnDarkTheme');
    const themeIcon = ofOnDarkTheme.querySelector('i');
    const theme = localStorage.getItem('theme');

    if (theme === "dark") {
        document.body.classList.add("dark-theme");
        themeIcon.classList.remove("fa-sun");
        themeIcon.classList.add("fa-moon");
    }

    ofOnDarkTheme.addEventListener('click', function() {
        document.body.classList.toggle('dark-theme');

        if(document.body.classList.contains('dark-theme')){
            localStorage.setItem('theme', 'dark');
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
        }
        else{
            localStorage.setItem('theme', 'light');
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        }
    })
})