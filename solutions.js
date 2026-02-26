console.log("ЗАДАНИЕ 2");
let sum = 0;
for (let i = 1; i <= 50; i++) {
    sum += i;
}
console.log(`Сумма чисел от 1 до 50 равна: ${sum}`);

console.log("\nЗАДАНИЕ 3");
function printSortedCities(citiesObj) {
    const citiesArray = Object.entries(citiesObj);
    citiesArray.sort((a, b) => b[1] - a[1]);
    const cityNames = citiesArray.map(item => item[0]);
    const resultString = cityNames.join(', ');
    console.log(resultString);
}

const citiesData = {
    "Москва": 12655050,
    "Санкт-Петербург": 5384342,
    "Новосибирск": 1625631,
    "Екатеринбург": 1493749,
    "Казань": 1257391
};

console.log("Отсортированный список городов:");
printSortedCities(citiesData);

console.log("\nЗАДАНИЕ 4");
function aggregateByCategory(itemsArray) {
    const result = {};
    for (let item of itemsArray) {
        const category = item.category;
        const value = item.value;
        if (!result[category]) {
            result[category] = 0;
        }
        result[category] += value;
    }
    return result;
}

const data = [
    { category: 'fruit', value: 10 },
    { category: 'vegetable', value: 5 },
    { category: 'fruit', value: 7 },
    { category: 'fruit', value: 3 },
    { category: 'vegetable', value: 8 }
];

const aggregatedData = aggregateByCategory(data);
console.log("Агрегированные данные по категориям:");
console.log(aggregatedData);