function canTeamMeetDeadline(teamSpeed, backlog, deadline) {
    // 1. Розраховуємо загальну швидкість команди за день
    const teamDailySpeed = teamSpeed.reduce((sum, speed) => sum + speed, 0);

    // 2. Розраховуємо загальну кількість стори-поінтів у беклозі
    const totalStoryPoints = backlog.reduce((sum, points) => sum + points, 0);

    // 3. Визначаємо кількість робочих днів до дедлайну
    const today = new Date(); // Поточна дата
    let workingDays = 0; // Лічильник робочих днів

    // Перебираємо дні від сьогодні до дедлайну
    while (today < deadline) {
        // Перевіряємо, чи це будній день (понеділок - п'ятниця)
        if (today.getDay() !== 0 && today.getDay() !== 6) {
            workingDays++;
        }
        // Переходимо до наступного дня
        today.setDate(today.getDate() + 1);
    }

    // 4. Розраховуємо загальну кількість стори-поінтів, які команда може виконати
    const totalTeamCapacity = teamDailySpeed * workingDays;

    // 5. Порівнюємо з беклогом і виводимо результат
    if (totalTeamCapacity >= totalStoryPoints) {
        const daysBeforeDeadline = workingDays;
        console.log(`Все задачи будут успешно выполнены за ${daysBeforeDeadline} дней до наступления дедлайна!`);
    } else {
        // Розраховуємо необхідні додаткові години
        const remainingStoryPoints = totalStoryPoints - totalTeamCapacity;
        const additionalHours = remainingStoryPoints / teamDailySpeed * 8; // 8 годин на день
        console.log(`Команде разработчиков придется потратить дополнительно ${additionalHours.toFixed(2)} часов после дедлайна, чтобы выполнить все задачи в беклоге`);
    }
}

// Приклад використання
const teamSpeed = [5, 3, 4]; // Швидкість кожного розробника (стори-поїнти на день)
const backlog = [40, 20, 30, 10]; // Стори-поїнти для кожної задачі
const deadline = new Date('2023-12-31'); // Дедлайн

canTeamMeetDeadline(teamSpeed, backlog, deadline);