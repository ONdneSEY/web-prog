// Міні-база даних у вигляді масиву
let usersDatabase = [];

// Функції валідації
const validators = {
    company: (value) => value.trim().length >= 2 && value.trim().length <= 50,
    name: (value) => {
        const trimmed = value.trim();
        return trimmed.split(' ').length >= 2 && trimmed.length >= 5;
    },
    phone: (value) => /^[\d\+]{10,15}$/.test(value.replace(/\D/g, '')),
    email: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
};

// Отримуємо елементи форми
const form = {
    company: document.getElementById('compani'),
    name: document.getElementById('person'),
    phone: document.getElementById('phone'),
    email: document.getElementById('maill'),
    consent: document.getElementById('consent-checkbox'),
    submitBtn: document.getElementById('submit-button')
};

// Додаємо обробник події для кнопки
form.submitBtn.addEventListener('click', function(e) {
    e.preventDefault();
    
    // Отримуємо значення полів
    const company = form.company.value.trim();
    const name = form.name.value.trim();
    const phone = form.phone.value.trim();
    const email = form.email.value.trim();
    const consent = form.consent.checked;
    
    // Перевіряємо валідність даних
    let isValid = true;
    
    // Перевірка компанії
    if (!validators.company(company)) {
        form.company.classList.add('error');
        isValid = false;
    } else {
        form.company.classList.remove('error');
    }
    
    // Перевірка ПІБ
    if (!validators.name(name)) {
        form.name.classList.add('error');
        isValid = false;
    } else {
        form.name.classList.remove('error');
    }
    
    // Перевірка телефону
    if (!validators.phone(phone)) {
        form.phone.classList.add('error');
        isValid = false;
    } else {
        form.phone.classList.remove('error');
    }
    
    // Перевірка email
    if (!validators.email(email)) {
        form.email.classList.add('error');
        isValid = false;
    } else {
        form.email.classList.remove('error');
    }
    
    // Перевірка чекбоксу
    if (!consent) {
        form.consent.classList.add('checkbox-error');
        isValid = false;
    } else {
        form.consent.classList.remove('checkbox-error');
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
                company: company,
                name: name,
                phone: phone,
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
            form.company.value = '';
            form.name.value = '';
            form.phone.value = '';
            form.email.value = '';
            form.consent.checked = false;
        }
    } 
});