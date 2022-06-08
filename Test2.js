// ! 1.

// let random = { name: "sid" }
// random = 23;

// if (!typeof random === 'string') {
//     console.log('string');
// }
// else {
//     console.log('not a string');
// }

// ! not a string

// 2.

//    const createMember = ({ email, address = {} }) => {
//         const validEmail = /.+\@.+\..+/.test(email)
//         if (!validEmail) throw new Error("Valid email pls")

//         return {
//             email,
//             address: address ? address : null
//         }
//     }

//     const member = createMember({ email: "my@email.com" })
//     console.log(member)

// op : {email: 'my@email.com', address: {}}

// 4.

// const promise1 = Promise.resolve('First')
// const promise2 = Promise.resolve('Second')
// const promise3 = Promise.reject('Third')
// const promise4 = Promise.resolve('Fourth')

// const runPromises = async () => {
//     const res1 = await Promise.all([promise1, promise2])
//     const res2 = await Promise.all([promise3, promise4])
//     return [res1, res2]
// }

// runPromises()
//     .then(res => console.log(res))
//     .catch(err => console.log(err))

// op: Third

// 5.

// const user = {
//         email: "my@email.com",
//         updateEmail: email => {
//             this.email = email
//         }
//     }

//     user.updateEmail("new@email.com")
//     console.log(user.email)

// op: my@email.com

// 6.

// const fruit = ['🍌', '🍊', '🍎']

//     fruit.slice(0, 1)
//     fruit.splice(0, 1)
//     fruit.unshift('🍇')

//     console.log(fruit)

//  o/p: ['🍇', '🍊', '🍎']

// 7.

// const user = {
//         email: "e@mail.com",
//         password: "12345"
//     }

//     const updateUser = ({ email, password }) => {
//         if (email) {
//             Object.assign(user, { email })
//         }

//         if (password) {
//             user.password = password
//         }

//         return user
//     }

//     const updatedUser = updateUser({ email: "new@email.com" })

//     console.log(updatedUser === user)

// true

// 8.

// class Calc {
//         constructor() {
//             this.count = 0
//         }

//         increase() {
//             this.count++
//         }
//     }

//     const calc = new Calc()
//     new Calc().increase()

//     console.log(calc.count)

// op: 0

// 9.a

// let count = 0;
//     const nums = [0, 1, 2, 3];

//     nums.forEach(num => {
//         if (num) count += 1
//     })

//     console.log(count)

// op: 3

// 9.b

// class Bird {
//     constructor() {
//         console.log("I'm a bird. 🦢");
//     }
// }

// class Flamingo extends Bird {
//     constructor() {
//         console.log("I'm pink. 🌸");
//         super();
//     }
// }

// const pet = new Flamingo();

// op: Im pink
//     Im a bird

// 10.

// const person = {
//     name: 'Lydia Hallie',
//     hobbies: ['coding'],
// };

// function addHobby(hobby, hobbies = person.hobbies) {
//     hobbies.push(hobby);
//     return hobbies;
// }

// addHobby('running', []);
// addHobby('dancing');
// addHobby('baking', person.hobbies);

// console.log(person.hobbies);

// op: ["coding", "dancing", "baking"]

// 11.

// const teams = [
//         { name: 'Team 1', members: ['Paul', 'Lisa'] },
//         { name: 'Team 2', members: ['Laura', 'Tim'] },
//     ];

//     function* getMembers(members) {
//         for (let i = 0; i < members.length; i++) {
//             yield members[i];
//         }
//     }

//     function* getTeams(teams) {
//         for (let i = 0; i < teams.length; i++) {
//             ✨ SOMETHING IS MISSING HERE ✨
//         }
//     }

//     const obj = getTeams(teams);
// obj.next(); { value: "Paul", done: false }
// obj.next(); { value: "Lisa", done: false }

// 12.

// class Counter {
//         #number = 10

//         increment() {
//             this.#number++
//         }

//         getNum() {
//             return this.#number
//         }
//     }

//     const counter = new Counter()
//     counter.increment()

//     console.log(counter.#number)

//     op: SyntaxError

// 13.

// const myPromise = Promise.resolve(Promise.resolve('Promise'));

//     function funcOne() {
//         setTimeout(() => console.log('Timeout 1!'), 0);
//         myPromise.then(res => res).then(res => console.log(`${res} 1!`));
//         console.log('Last line 1!');
//     }

//     async function funcTwo() {
//         const res = await myPromise;
//         console.log(`${res} 2!`)
//         setTimeout(() => console.log('Timeout 2!'), 0);
//         console.log('Last line 2!');
//     }

//     funcOne();
//     funcTwo();

//     op: Last line 1! Promise 2! Last line 2! Promise 1! Timeout 1! Timeout 2!

// 14.

// const name = 'Lydia Hallie';

//     console.log(!typeof name === 'object');
//     console.log(!typeof name === 'string');

// op: false false

// 15.

// const myMap = new Map();
// const myFunc = () => 'greeting';

// myMap.set(myFunc, 'Hello world!');

// 1
// myMap.get('greeting');
// 2
// myMap.get(myFunc);
// 3
// myMap.get(() => 'greeting');

// op: 2

// 16.

//     Which of these methods modifies the original array ?
// const emojis = ['✨', '🥑', '😍'];

//         emojis.map(x => x + '✨');
//         emojis.filter(x => x !== '🥑');
//         emojis.find(x => x !== '🥑');
//         emojis.reduce((acc, cur) => acc + '✨');
//         emojis.slice(1, 2, '✨');
//         emojis.splice(1, 2, '✨');

// ans: splice

// 17.

// const set = new Set();

// set.add(1);
// set.add('Lydia');
// set.add({ name: 'Lydia' });

// for (let item of set) {
//     console.log(item + 2);
// }

// ans: 3, Lydia2, [object Object]2

// 18.

// module.js
// export default () => 'Hello world';
// export const name = 'Lydia';

// index.js
// import * as data from './module';

// console.log(data);

// ans: { default: function default (), name: "Lydia" }

// 19.

// What kind of information would get logged ?
//         fetch('https://www.website.com/api/user/1')
//             .then(res => res.json())
//             .then(res => console.log(res));

// ans: The result of the callback in the previous.then().

// 20.

// const box = { x: 10, y: 20 };

// Object.freeze(box);

// const shape = box;
// shape.x = 100;

// console.log(shape);

// ans: { x: 10, y: 20 };

// 21.

// console.log(Number(2) === Number(2));
//     console.log(Boolean(false) === Boolean(false));
//     console.log(Symbol('foo') === Symbol('foo'));

// op : true true false
