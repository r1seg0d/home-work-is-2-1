function filterNumbers(arr, limit) {
    const result = [];
    for (let num of arr) {
        if (num * num <= limit) {
            result.push(num);
        }
    }
    return result;
}

// Пример использования
const numbers = [1, 2, 3, 4, 5];
const limit = 16;
const filteredNumbers = filterNumbers(numbers, limit);
console.log(filteredNumbers); // [1, 2, 3, 4]