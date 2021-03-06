/**
 * Складываем зарплаты
 * @param {Object} salaries - объект зарплат
 * @returns {Number}
 */
function sumSalary(salaries) {
    let result = 0;

    for (const key in salaries) {
        if (typeof salaries[key] !== 'number') {
            continue;
        }
        result += salaries[key];
    }

    return result;
}
