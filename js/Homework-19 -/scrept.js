// Функція для глибокого клонування об'єкта
function deepClone(obj, map = new WeakMap()) {
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }

    if (map.has(obj)) {
        return map.get(obj);
    }

    if (obj instanceof Date) {
        return new Date(obj);
    }

    if (obj instanceof RegExp) {
        return new RegExp(obj);
    }

    if (obj instanceof Map) {
        const clonedMap = new Map();
        map.set(obj, clonedMap);
        for (const [key, value] of obj) {
            clonedMap.set(deepClone(key, map), deepClone(value, map));
        }
        return clonedMap;
    }

    if (obj instanceof Set) {
        const clonedSet = new Set();
        map.set(obj, clonedSet);
        for (const value of obj) {
            clonedSet.add(deepClone(value, map));
        }
        return clonedSet;
    }

    if (Array.isArray(obj)) {
        const clonedArray = [];
        map.set(obj, clonedArray);
        for (let i = 0; i < obj.length; i++) {
            clonedArray[i] = deepClone(obj[i], map);
        }
        return clonedArray;
    }

    const clonedObj = {};
    map.set(obj, clonedObj);
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            clonedObj[key] = deepClone(obj[key], map);
        }
    }

    return clonedObj;
}

// Функція для безпечного перетворення об'єкта в JSON з обробкою циклічних посилань
function safeStringify(obj, indent = 2) {
    const cache = new Set(); // Для відстеження відвіданих об'єктів
    return JSON.stringify(
        obj,
        (key, value) => {
            if (typeof value === 'object' && value !== null) {
                if (cache.has(value)) {
                    // Знайдено циклічне посилання, ігноруємо його
                    return "[Circular]";
                }
                // Додаємо значення до кешу
                cache.add(value);
            }
            return value;
        },
        indent
    );
}

// Приклад використання
const original = {
    name: "John",
    age: 30,
    address: {
        city: "New York",
        zip: "10001"
    },
    hobbies: ["reading", "traveling"],
    friends: [
        {
            name: "Alice",
            age: 28
        },
        {
            name: "Bob",
            age: 32
        }
    ]
};

// Додаємо циклічне посилання для тестування
original.self = original;

// Клонуємо об'єкт
const cloned = deepClone(original);

// Виводимо оригінал і клон на сторінку
document.getElementById('original').textContent = safeStringify(original);
document.getElementById('clone').textContent = safeStringify(cloned);

// Змінюємо клонований об'єкт
cloned.address.city = "Los Angeles";
cloned.hobbies.push("swimming");
cloned.friends[0].name = "Charlie";

// Виводимо оригінал і клон після змін
document.getElementById('original-after-changes').textContent = safeStringify(original);
document.getElementById('clone-after-changes').textContent = safeStringify(cloned);