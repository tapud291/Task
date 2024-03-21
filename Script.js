
                                // Question 1

// const numbers = [1, 2, 3, 4, 5];
// const squaredNumbers = numbers.map(num => num * num);

// console.log(squaredNumbers);

                                // Question 2

// function getGrade(score) {
//     return score >= 90 ? 'A' :
//         score >= 80 ? 'B' :
//             score >= 70 ? 'C' :
//                 score >= 60 ? 'D' : 'F';
// }

// console.log(getGrade(85));
// console.log(getGrade(72));
// console.log(getGrade(45));

                                // Question 3

// const car = {
//     companyName: 'Toyota',
//     model: 'Camry',
//     year: 2022
//   };

//   function changeYear(carObject, newYear) {
//     carObject.year = newYear;
//   }

//   changeYear(car, 2023);

//   const { model, year } = car;
//   console.log(`Model: ${model}, Year: ${year}`);

                                // Question 4

// function isPrime(num) {
//     if (num <= 1) return false;
//     if (num <= 3) return true;

//     if (num % 2 === 0 || num % 3 === 0) return false;

//     for (let i = 5; i * i <= num; i += 6) {
//         if (num % i === 0 || num % (i + 2) === 0) return false;
//     }

//     return true;
// }

// const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10];
// const primeNumbers = numbers.filter(isPrime);

// console.log(primeNumbers);

                                // Question 5

// Map Function:

// const numbers = [1, 2, 3, 4, 5];
// const squares = numbers.map(num => num * num);
// console.log(squares);

// const people = [{ name: 'John', age: 30 }, { name: 'Alice', age: 25 }];
// const updatedPeople = people.map(person => ({ ...person, age: person.age + 1 }));
// console.log(updatedPeople);

// Filter Function:

// const numbers = [1, 2, 3, 4, 5];
// const oddNumbers = numbers1.filter(num => num % 2 !== 0);
// console.log(oddNumbers);

// const data = [1, null, 3, undefined, 5];
// const validData = data.filter(value => value !== null && value !== undefined);
// console.log(validData);


// Reduce Function:

// const numbers = [1, 2, 3, 4, 5];
// const sum = numbers.reduce((acc, curr) => acc + curr, 0);
// console.log(sum);

// const numbers1 = [10, 20, 5, 15];
// const max = numbers1.reduce((maxNum, curr) => curr > maxNum ? curr : maxNum, numbers1[0]);
// console.log(max);

                                // Question 6

// async function fetchData() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
//         if (!response.ok) {
//             throw new Error('Failed to fetch data');
//         }
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.error(error.message);
//     }
// }

// fetchData();

                                // Question 7

const person = {
    name: 'John Doe',
    address: {
        street: '123 Main St',
        city: 'Anytown',
        zip: '12345'
    },
};

const phoneNumber = person.contact?.phone;

console.log(phoneNumber);
