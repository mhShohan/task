/**
* --------------------------------------------------------------------------------------------
1.Task: Array Filtering And Mapping
Create An Array Of Objects, Each Representing A Person With Properties Like Name, Age, And Gender. 
Write A Function To Filter Out All Females And Then Map The Remaining People To An Array Of Names. 
Print The Final Result.
* --------------------------------------------------------------------------------------------
*/

type Person = {
  name: string;
  age: number
  gender: 'male' | 'female'
}

const persons: Person[] = [
  { name: 'John Doe', age: 25, gender: 'male' },
  { name: 'Jane Smith', age: 30, gender: 'female' },
  { name: 'Alice Johnson', age: 22, gender: 'female' },
  { name: 'Bob Brown', age: 28, gender: 'male' },
  { name: 'Charlie Black', age: 35, gender: 'male' },
  { name: 'Diana White', age: 27, gender: 'female' },
  { name: 'Evan Green', age: 23, gender: 'male' },
  { name: 'Fiona Blue', age: 26, gender: 'female' },
  { name: 'George Gray', age: 29, gender: 'male' },
  { name: 'Hannah Silver', age: 24, gender: 'female' }
]

const getAllFemaleName = (persons: Person[]) => {
  const filtered = persons.filter(person => person.gender === 'female')
  return filtered.map(person => person.name)
}

// const result = getAllFemaleName(persons)
// console.log(result)



/**
* --------------------------------------------------------------------------------------------
2.Task: Object Manipulation
Create An Array Of Objects Representing Books With Properties Like Title, Author, And Year. 
Write A Function That Takes The Array And Returns A New Array With Only The Book Titles. 
Print The Result.
* --------------------------------------------------------------------------------------------
*/
interface Book {
  title: string;
  author: string;
  year: string;
}

const books: Book[] = [
  { title: 'Atomic Habit', author: 'James Clear', year: '2020' },
  { title: 'Time Management', author: 'Brian Tracy', year: '2014' },
  { title: 'Deep Work', author: 'Cal Newport', year: '2004' },
  { title: 'The Power of Habit', author: 'Charles Duhigg', year: '2010' },
  { title: 'The 7 Habits of Highly Effective People', author: 'Stephen Covey', year: '2007' },
  { title: 'The One Thing', author: 'Gary Keller', year: '2012' },
  { title: 'The 5 AM Club', author: 'Robin Sharma', year: '2019' },
  { title: 'Eat That Frog', author: 'Brian Tracy', year: '2001' },
  { title: 'The Miracle Morning', author: 'Hal Elrod', year: '2015' },
  { title: 'The Compound Effect', author: 'Darren Hardy', year: '2011' }
]

const getAllBookTitles = (books: Book[]) => {
  return books.map(book => book.title)
}

// const result = getAllBookTitles(books)
// console.log(result)



/**
* --------------------------------------------------------------------------------------------
3.Task: Function Composition
Write Three Functions: One To Square A Number, One To Double A Number, And One To Add 5 To A Number. 
Compose These Functions To Create A New Function That Squares A Number, Doubles The Result, 
And Then Adds 5.
* --------------------------------------------------------------------------------------------
*/
type TFunc = (num: number) => number

const funcComposition = (num: number) => {

  const compose = (...functions: TFunc[]) => {
    return (input: number) => {
      return functions.reduce((acc: number, curFn: TFunc) => {
        return curFn(acc);
      }, input);
    };
  };


  const square = (num: number) => num * num
  const double = (num: number) => num * 2
  const addFive = (num: number) => num + 5

  const newFunc = compose(square, double, addFive)
  return newFunc(num)
}

// const result = funcComposition(10)
// console.log(result)



/** 
* --------------------------------------------------------------------------------------------
4.Task: Sorting Objects
Create An Array Of Objects Representing Cars With Properties Like Make, Model, And Year. 
Write A Function To Sort The Array Of Cars By The Year Of Manufacture In Ascending Order. 
Print The Sorted Array.
* --------------------------------------------------------------------------------------------
*/
interface Car {
  make: string;
  model: string;
  year: string;
}

const cars: Car[] = [
  { make: "Toyota", model: "Camry", year: "2022-01-01" },
  { make: "Honda", model: "Civic", year: "2021-01-01" },
  { make: "Ford", model: "Mustang", year: "2023-01-01" },
  { make: "Tesla", model: "Model 3", year: "2019-01-01" },
  { make: "BMW", model: "X5", year: "2023-01-01" }
];

const sortCarsByYear = (cars: Car[]) => {
  return cars.sort((a, b) => new Date(a.year).getFullYear() - new Date(b.year).getFullYear())
}

// const result = sortCarsByYear(cars)
// console.log(result)




/**
* --------------------------------------------------------------------------------------------
5.Task: Find And Modify
Write A Function That Searches An Array Of Objects For A Specific Person By Name. 
If Found, Modify Their Age Property. Print The Updated Array.
* --------------------------------------------------------------------------------------------
*/
type People = {
  name: string;
  age: number
  gender: 'male' | 'female'
}

const peoples: People[] = [
  { name: 'John Doe', age: 25, gender: 'male' },
  { name: 'Jane Smith', age: 30, gender: 'female' },
  { name: 'Alice Johnson', age: 22, gender: 'female' },
  { name: 'Bob Brown', age: 28, gender: 'male' },
  { name: 'Charlie Black', age: 35, gender: 'male' },
  { name: 'Diana White', age: 27, gender: 'female' },
  { name: 'Evan Green', age: 23, gender: 'male' },
  { name: 'Fiona Blue', age: 26, gender: 'female' },
  { name: 'George Gray', age: 29, gender: 'male' },
  { name: 'Hannah Silver', age: 24, gender: 'female' }
]
const findAddModifyPerson = (peoples: People[]) => {

  const index = peoples.findIndex(person => person.name === 'John Doe')

  if (index !== -1) {
    peoples[index].age = 260
  }

  return peoples
}

// const result = findAddModifyPerson(peoples)
// console.log(result)




/**
* --------------------------------------------------------------------------------------------
6.Task: Array Reduction
Create An Array Of Numbers. Write A Function That Uses The Reduce Method 
To Calculate The Sum Of All Even Numbers In The Array.
* --------------------------------------------------------------------------------------------
*/
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const sumOfEvenNumbers = (numbers: number[]) => {
  return numbers.reduce((acc: number, cur: number) => {
    if (cur % 2 === 0) {
      return acc + cur
    }
    return acc
  }, 0)
}

// const result = sumOfEvenNumbers(numbers)
// console.log(result)





/** 
* --------------------------------------------------------------------------------------------
7.  Task: Leap Year Checker
Write A Function That Determines Whether A Given Year Is A Leap Year.
Example: Happy New Year
* --------------------------------------------------------------------------------------------
*/
const checkLeapYear = (year: number) => {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return `${year} is a leap year`
  }
  return `${year} is not a leap year`
}

// const result = checkLeapYear(2021)
// console.log(result)




/**
* --------------------------------------------------------------------------------------------
8. Task: Unique Values
Create An Array Of Numbers With Some Duplicate Values. 
Write A Function To Filter Out The Duplicate Values And Return A New Array With Only Unique Numbers. 
Print The Result.
* --------------------------------------------------------------------------------------------
*/
const numbersWithDuplicates = [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5]
const getUniqueValues = (numbers: number[]) => {
  return [...new Set(numbers)]
}

// const result = getUniqueValues(numbersWithDuplicates)
// console.log(result)




/**
* --------------------------------------------------------------------------------------------
09. Task: Find Maximum Value:
Write A Function That Takes An Array Of Numbers And Returns The Maximum Value.
* --------------------------------------------------------------------------------------------
*/
const numbersToFindMax = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const findMaxValue = (numbers: number[]) => {
  return Math.max(...numbers)
}

const result = findMaxValue(numbersToFindMax)
console.log(result)




/**
* --------------------------------------------------------------------------------------------
10.Task: Advanced Sorting
Create An Array Of Objects Representing Students With 'Name' And 'Grades' Properties. 
Write A Function To Sort The Students By Average Grade In Descending Order.
* --------------------------------------------------------------------------------------------
*/
interface Student {
  id: string
  name: string;
  grades: number[]
}

const students: Student[] = [
  { id: '1', name: 'John Doe', grades: [90, 55, 85, 88, 92] },
  { id: '2', name: 'Jane Smith', grades: [45, 88, 92, 80, 75] },
  { id: '3', name: 'Alice Johnson', grades: [62, 70, 45, 65, 88] },
  { id: '4', name: 'Bob Brown', grades: [88, 32, 30, 95, 85] },
  { id: '5', name: 'Charlie Black', grades: [95, 85, 68, 92, 90] }
]

const sortStudentsByAverageGrade = (students: Student[]) => {
  return students.sort((a, b) => {
    const avgA = a.grades.reduce((acc, cur) => acc + cur, 0) / a.grades.length
    const avgB = b.grades.reduce((acc, cur) => acc + cur, 0) / b.grades.length

    return avgB - avgA
  })
}

// const result = sortStudentsByAverageGrade(students)
// console.log(result)





/**
* --------------------------------------------------------------------------------------------
11. Task: Functional Programming - Reduce
Write A Function That Uses The Reduce Function To Calculate The 
Total Value Of An Array Of Objects With A 'Quantity' And 'Price' Property. Interview
* --------------------------------------------------------------------------------------------
*/

interface Product {
  id: string;
  name: string;
  quantity: number;
  price: number;
}

const products: Product[] = [
  { id: '1', name: 'Laptop', quantity: 2, price: 1000 },
  { id: '2', name: 'Mobile', quantity: 3, price: 500 },
  { id: '3', name: 'Tablet', quantity: 2, price: 300 },
  { id: '4', name: 'Headphone', quantity: 2, price: 100 },
  { id: '5', name: 'Mouse', quantity: 1, price: 50 }
]

const calculateTotalValue = (products: Product[]) => {
  return products.reduce((acc, cur) => {
    const total = cur.quantity * cur.price

    return acc + total
  }, 0)
}

// const result = calculateTotalValue(products)
// console.log(result)