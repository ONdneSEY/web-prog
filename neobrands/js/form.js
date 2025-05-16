// Міні-база даних у вигляді масиву
let usersDatabase = [];

// Функції валідації
const validators = {
    name: (value) => {
        const trimmed = value.trim();
        return trimmed.split(' ').length >= 2 && trimmed.length >= 5;
    },
    email: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
};

// Отримуємо елементи форми
const form = {
    name: document.getElementById('name'),
    email: document.getElementById('email'),
    consent: document.getElementById('uMassenger'),
    submitBtn: document.getElementById('send')
};

// Додаємо обробник події для кнопки
form.submitBtn.addEventListener('click', function(e) {
    e.preventDefault();
    
    // Отримуємо значення полів
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const consent = form.consent.checked;
    
    // Перевіряємо валідність даних
    let isValid = true;
    
    
    // Перевірка ПІБ
    if (!validators.name(name)) {
        form.name.classList.add('error');
        isValid = false;
    } else {
        form.name.classList.remove('error');
    }
    
    // Перевірка email
    if (!validators.email(email)) {
        form.email.classList.add('error');
        isValid = false;
    } else {
        form.email.classList.remove('error');
    }
    
    
    // Якщо дані валідні, додаємо користувача
    if (isValid) {
        // Перевіряємо, чи існує вже така компанія
        const companyExists = usersDatabase.some(user => user.company === company);
        
        if (companyExists) {
            alert('Компанія з такою назвою вже зареєстрована!');
            form.company.classList.add('error');
        } else {
            // Створюємо нового користувача
            const newUser = {
                name: name,
                email: email,
                consent: consent,
                registrationDate: new Date().toISOString()
            };
            
            // Додаємо до масиву
            usersDatabase.push(newUser);
            
            // Виводимо повідомлення
            alert('Ми приняли вашу заявку');
            console.log('Поточний список користувачів:', usersDatabase);
            
            // Очищаємо форму
            form.name.value = '';
            form.email.value = '';
            form.consent.checked = false;
        }
    } 
});