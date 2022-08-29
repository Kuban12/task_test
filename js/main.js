// дан многомерный массив, при помощи методов массивов возвести каждое число во 2 степень(методы массивов)

// let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]];

// arr = arr.map(item => item.map(elem => elem ** 2))
// console.log(arr)




////////////////////////////////////////////////////////////////////////////////





// дан многомерный массив, посчитать произведение каждого из массивов, а затем произведение внешнего массива(методы массивов)
// let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]];

// arr = arr.map(item => item.reduce((a, b) => a * b)).reduce((c, d) => c *d)

// console.log(arr)




////////////////////////////////////////////////////////////////////////////////






// распаковать массив в отдельные переменные
// let arr = [[1, [2], [3, [4]]], [[[[5]]]], [[6], [7], [8, [9]]]]

// let[[num1, [num2], [num3, [num4]]], [[[[num5]]]], [[num6], [num7], [num8, [num9]]]] = arr;
// console.log(num1,num2,num3,num4,num5,num6,num7,num8,num9)





////////////////////////////////////////////////////////////////////////////////





// распаковать объект в отдельные переменные
// let obj = {
//     name: 'Frank',
//     age: 35,
//     skills: [
//         {
//             lang: 'JS',
//             lvl: 'junior'
//         },
//         {
//             lang: 'C++',
//             lvl: 'middle'
//         },
//         {
//             lang: 'GoLang',
//             lvl: 'senior'
//         }
//     ],
//     hobby: [
//         'tennis',
//         'football'
//     ]
// }
// let {name,age,skills:[{lang,lvl},{lang: lang2,lvl: lvl2},{lang: lang3,lvl: lvl3}],hobby:[hobby1,hobby2]} = obj

// console.log(name,age,skills,lang,lvl,lang2, lvl2,lang3,lvl3,hobby)





////////////////////////////////////////////////////////////////////////////////





// У вас есть массив объектов user, и в каждом из них есть user.name. Напишите код, который преобразует их в массив имён.(методы массивов)
// let users = [
//     { name: "Kim", age: 41 },
//     { name: "Kortney", age: 42 },
//     { name: "Khloe", age: 37 },
//     { name: "Kendall", age: 26 },
//     { name: "Kylie", age: 24 },
// ];

// users = users.map(item => item.name)
// console.log(users)





////////////////////////////////////////////////////////////////////////////////




// Дан массив
// Преобразуйте каждый элемент в его длину и выведите в console.(методы  массивов)
// let lengthName = ['Patricia','William','Barbara','James','Chloe','Elizabeth'];
// length = lengthName.map(item => item.length)
// console.log(length)





////////////////////////////////////////////////////////////////////////////////





// Дан массив с числами. Найдите сумму первых N элементов до "stop". Пример: [1, 2, 3, "stop", 4, 5, 6] - суммируем первые 3 элемента, так как дальше стоит элемент "stop".(методы массивов)


// function func(arr) {
//   let res;

//   arr.reduce((a, b) => {
//     if (b === 'stop') {
//       return (res = a);
//     } else if (a === 'stop') {
//       return (res = 0);
//     } else {
//       return a + b;
//     }
//   });
// console.log(res);
// }
// func([1, 2, 3, "stop", 4, 5, 6])




// второй способ с помощью splice and reduce

// let arr = [1, 2, 3, 4, 5, "stop", 6];
// let task7 = arr => {
//   let someArr = [];
//   let newArr = arr.reduce((prev, cur, index) => {
//     if (cur == 'stop') {
//       someArr = arr.splice(0, index);
//       return someArr.reduce((prev, cur) => prev + cur);
//     }
//     return cur + prev;
//   });
//   return newArr;
// }
// console.log(task7(arr));










//Дан объект следующего вида: {
//     name: 'Jack',
//     age: 34,
//     work: 'IT',
//     hours: 23,
//    salary: 2300,
// experience: 450
// }, задача: добавить объекту методы: ходить на работу(при вызове этого метода, кол-во часов возрастает на 6, и зарплата тоже растет в пропорции 1час-100$), также должен быть метод Получить зарплату(зарплату можно получить только если уже есть мин. 3000$, после вызова этого метода ключи зарплата и наработанные часы должны быть обнулены, а в ключе опыт, необходимо хранить сумму всех отработанных часов)(отправить в гитхаб)


let person = {
  name: 'Jack',
  age: 34,
  work: 'IT',
  hours: 23,
  salary: 2300,
  experience: 450,
  goToWork(){
    this.hours += 6
    this.salary += 600
  },
  getSalary(){
    if(this.salary >= 3000){
    this.experience += this.hours
    this.salary = 0
    this.hours = 0
    }
  },
}

console.log(person)
person.goToWork()
person.goToWork()

console.log(person)
person.getSalary()
console.log(person)
