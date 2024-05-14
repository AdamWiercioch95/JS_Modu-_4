const data = [
    {
        name: 'pawel',
        city: 'krakow',
        age: 39,
        hobbies: ['js', 'python', 'drugs']
    },
    {
        name: 'mati',
        city: 'gdansk',
        age: 23,
        hobbies: ['js', 'python', 'drugs']
    },
    {
        name: 'mateusz',
        city: 'gdansk',
        age: 32,
        hobbies: ['fantasy', 'games', 'football']
    },
    {
        name: 'denys',
        city: 'warsaw',
        age: 27,
        hobbies: ['js', 'python', 'not drugs']
    },
    {
        name: 'adas',
        city: 'szczecin',
        age: 29,
        hobbies: ['js', 'python', 'drugs']
    },
    {
        name: 'mikolaj',
        city: 'rozwady',
        age: 23,
        hobbies: ['js', 'python', 'drugs']
    },
    {
        name: 'bartek',
        city: 'bielsko',
        age: 25,
        hobbies: ['js', 'python', 'code']
    },
    {
        name: 'maciej',
        city: 'lublin',
        age: 27,
        hobbies: ['dziwki', 'dragi', 'lasery']
    },
    {
        name: 'filip',
        city: 'torun',
        age: 26,
        hobbies: ['js', 'python', 'drugs']
    },
    {
        name: 'karol',
        city: 'lidzba',
        age: 32,
        hobbies: ['music', 'martial arts', 'drugs']
    },
    {
        name: 'filip',
        city: 'gdansk',
        age: 28,
        hobbies: ['binge-watching', 'rpg games', 'definitely drugs']
    },
    {
        name: 'agnieszka',
        city: 'warsaw',
        age: 38,
        hobbies: ['music', 'books', 'python']
    },
    {
        name: 'vlad',
        city: 'warszawa',
        age: 19,
        hobbies: ['it', 'games', 'python']
    },
    {
        name: 'kuba',
        city: 'lodz',
        age: 21,
        hobbies: ['js', 'python', 'guitar']
    },
    {
        name: 'karol',
        city: 'krakow',
        age: 39,
        hobbies: ['js', 'piłka', 'ping-pong']
    },
    {
        name: 'maciej',
        city: 'Zielonka',
        age: 23,
        hobbies: ['drugs']
    },
    {
        name: 'mateusz',
        city: 'Warszawa',
        age: 21,
        hobbies: ['coding', 'Ai', 'python']
    }
]


// console.log(data.length);

// policz średnią wieku -----------------------------------------------------------------------------------------------

// function calcAvgAge(people) {
//     let totalAge = 0;
//     for(let i = 0; i < people.length; i++) {
//         totalAge += people[i].age;
//     }
//
//     // for (const person of people) {
//     //     totalAge += people[i].age;
//     // }
//
//     return Math.round(totalAge/people.length);
// }
//
// console.log(calcAvgAge(data));

// function calcAvgAge2(people) {
//     return people
//         .map((person) => person.age)
//         .reduce((acc, ce) => acc + ce) / people.length
// }
//
// const calcAvgAge3 = (people) => people
//         .map((person) => person.age)
//         .reduce((acc, ce) => acc + ce) / people.length;
//
// const calcAvgAge4 = (people) => people
//         .reduce((acc, ce) => acc + ce.age, 0) / people.length;


// policzyć średnią wieku dla osób spoza Warszawy -------------------------------------------------------------------

// function calcAvgAgeOutsideWarsaw(people) {
//     let totalAge = 0;
//     let counter = 0;
//     for(let i = 0; i < people.length; i++) {
//         if (!(people[i].city.toLowerCase() === 'warsaw' || people[i].city.toLowerCase() === 'warszawa')) {
//             totalAge += people[i].age;
//             counter++;
//         }
//     }
//
//     return totalAge / counter;
//
// }
//
// const calcAvgAgeOutsideWarsaw2 = function (people) {
//     const ageOfPeople = people
//         .filter((person) => !(person.city.toLowerCase() === 'warsaw' || person.city.toLowerCase() === 'warszawa'))
//         .map((person) => person.age);
//
//     return ageOfPeople.reduce((acc, ce) => acc + ce) / ageOfPeople.length;
// }
//
// // const result1 = calcAvgAgeOutsideWarsaw(data);
// // console.log(result1);
// console.log(calcAvgAgeOutsideWarsaw2(data));

// sprawdzić, czy jest ktokolwiek z Krakowa -------------------------------------------------------------------------
// function isFromKrakow(people) {
//     // return people.filter(function(person) {return person.city === 'krakow'})
//     return people.some((person) => person.city.toLowerCase() === 'krakow');
// }
//
// console.log(isFromKrakow(data))

// Czy wszyscy kochają JavaScript -------------------------------------------------------------------------
// function doEverybodyLovesJS2(people) {
//     for (let person of people) {
//         if (person.hobbies.includes('js')) {
//             return false;
//         }
//     }
//
//     return true;
// }
// function doEverybodyLovesJS1(people) {
//     return people
//         .every((person) => person.hobbies.includes('js'));
// }
//
// const doEverybodyLovesJS3 = (people) => people.every((person) => !person.hobbies.includes('js'));
//
//
// console.log(doEverybodyLovesJS1(data));
// console.log(doEverybodyLovesJS2(data));
// console.log(doEverybodyLovesJS3(data));

// ile jest hobbies bez powtórzeń (unique) -------------------------------------------------------------------------
// function countHobbiesUnique(people) {
//     let hobbies = [];
//     let counter = 0;
//     for (let person of people) {
//         for (let i of person.hobbies)
//         if (!i in hobbies) {
//             hobbies.push(i);
//         }
//     }
//     return hobbies;
// }
//
// console.log(countHobbiesUnique(data));

// const countHobbiesUnique1 = function (elements) {
//     const hobbies = [];
//     for (const element of elements) {
//         for (const hobby of element.hobbies) {
//             if (!hobbies.includes(hobby)){
//                 hobbies.push(hobby);
//             }
//         }
//     }
//     return hobbies.length;
// }

// console.log(countHobbiesUnique1(data));

// const countHobbiesUnique2 = function (elements) {
//     const hobbies = new Set();
//        for (const element of elements) {
//            for (const hobby of element.hobbies) {
//                    hobbies.add(hobby);
//                }
//        }
//     return hobbies.size;
// }

// const countHobbiesUnique3 = (elements) => new Set(elements.flatMap((element) => element.hobbies)).size;
// const arr = [...(new Set(data.flatMap((element) => element.hobbies)))];
// console.log(countHobbiesUnique3(data));
// console.log(arr);


