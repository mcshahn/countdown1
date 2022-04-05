
/* Beginner Challenge */

/* Do all of these using proper ES6 syntax
Using the following array of objects,
(1) Write an arrow function that adds a new entry to bookList
(2) Write an arrow function that removes a specific book from the bookList
(3) Write an arrow function that lists out all the books or all the authors in the book list */

const bookList = [
    { title: "Don Quixote", author: "Miguel de Cervantes" },
    { title: "Ulysses", author: "James Joyce" },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
    { title: "Moby Dick", author: "Herman Melville" },
  ];
//1
const addNewBook = (title, author) =>{
    bookList.push({"title": title, "author": author});
}
addNewBook("Harry Potter", "JK Rowling");

//2.
const removeBook = (title, author) =>{
    for (let i = 0; i < bookList.length; i++){
        if(bookList[i].title === title &&  bookList[i].author === author){
            bookList.splice(i, 1);
        }
    }  
}
// removeBook("Ulysses", "James Joyce");
// console.log(bookList);

//3.
const listOut = (bOrA) =>{
    if(bOrA == 0){
        for(let i = 0; i< bookList.length; i++){
            console.log(bookList[i].title);
        }
    }else{
        for(let i = 0; i< bookList.length; i++){
            console.log(bookList[i].author);
        }
        }
}
listOut(1);
listOut(0);
  /* Intermediate Challenge */
  
  /* (4) Write a one-line arrow function that takes in a number and returns a string stating whether the
    number is positive or negative using a ternary operator (assume the number will never be zero) */
const posOrNeg = (num)=>{num>0?console.log("Num is positive!"):console.log("Num is negative!");}
posOrNeg(1);
posOrNeg(-1);
  /* (5) Write a switch statement for a 'day' variable that prints out something based off of what day of
    the week it is
    i.e. if it's Monday, print "good luck" or wednesday print "hump day" or friday print "party" */
var day = "Friday";
switch(day){
    case 'Monday':
         console.log('Good Luck!');
         break;
    case 'Tuesday':
        console.log('Second Day!');
        break;
    case 'Wednesday':
        console.log('Hump Day!');
        break;
    case 'Thursday':
        console.log('Almost there!');
        break;
    case 'Friday':
        console.log('Party!');
        break;
    case 'Saturday':
        console.log('Time to have Fun!');
        break;
    case 'Sunday':
        console.log('Lets get ready!');
        break;
 } 


  /* (6) Write an arrow function that takes in a number, and uses a for loop to return the sum of every
    number from 1 up to that number
    ex. sumUp(7) = 28 */

const sumUp = (num) =>{
    let sum = 0;
    for (let i = 1; i<= num; i++){
        sum += i;
    }
    return sum;
}
console.log(sumUp(7));

  /* Harder Challenge */

  /* (7) Write an arrow function that converts the temperature from Celsius to Fahrenheit and then tells
    me what I should wear accordingly */
const cToF = (cTemp) =>{
    let fTemp = cTemp * 9/5 + 32;
    if (fTemp < 32){
        console.log("wear something warm! it's freezing!");
    }else if(fTemp < 50){
        console.log("it's a bit chilly; best bring a jacket!");
    }else if(fTemp < 65){
        console.log("it's a lot warmer but maybe bring a sweater just in case?");
    }else if(fTemp < 75){
        console.log("Great weather! Wear a t-shirt and some shorts!");
    }else if(fTemp < 85){
        console.log("Hot! Wear lighter clothes!");
    }else{
        console.log("It's steaming! Don't go out!");
    }
}
cToF(20);
  /* (8) Write a function that takes in an array and prints out the amount of truthy values in that array
    using .forEach() */
  
  const exampleArray = ["Hello, world!", 8, null, false, "", "0", -22];
  const truthyVals= (arr) =>{
      let sum = 0;
      arr.forEach(element =>{ if(element){sum ++;}})
      console.log(sum);
  }
  truthyVals(exampleArray);
  /* (9) Using the map function and arrow syntax, return an array of object that contain a fullName field
    and an averageGrade field representing the letter grade that corresponds to their GPA */
  
  const attendance = [
    { firstName: "Clay", lastName: "Tondreau", gpa: 4.0 },
    { firstName: "Tucker", lastName: "Wilson", gpa: 2.0 },
    { firstName: "Eliza", lastName: "Tobin", gpa: 3.7 },
    { firstName: "Sofia", lastName: "Ackerman", gpa: 1.1 },
    { firstName: "Thomas", lastName: "Beddow", gpa: 2.3 },
    { firstName: "Jackson", lastName: "Wolf", gpa: 4.0 },
    { firstName: "Jared", lastName: "Nguyen", gpa: 4.0 },
  ];

  const grades = attendance.map((elem) => {
    let letterGrade = '';
    if(elem.gpa >= 4.33){
        letterGrade = 'A+';
    }else if(elem.gpa >=4.0){
        letterGrade = 'A';
    }else if (elem.gpa >= 3.67){
        letterGrade = 'A-';
    }else if(elem.gpa >=3.33){
        letterGrade = 'B+';
    }else if (elem.gpa >= 3.0){
        letterGrade = 'B';
    }else if(elem.gpa >= 2.67){
        letterGrade = 'B-';
    }else if (elem.gpa >= 2.33){
        letterGrade = 'C+';
    }else if(elem.gpa >= 2.00){
        letterGrade = 'C';
    }else if (elem.gpa >= 1.67){
        letterGrade = 'C-';
    }else if(elem.gpa >= 1.33){
        letterGrade = 'D+';
    }else if (elem.gpa >= 1){
        letterGrade = 'D';
    }else if(elem.gpa >=0.67){
        letterGrade = 'D-';
    }else{
        letterGrade = 'F';
    }
      
      return {"fullName" : elem.firstName.concat(' ', elem.lastName), "averageGrade":letterGrade}});
  console.log(grades);

  /* Hardest Challenge (Don't do this without completing harder challenges) */

  /* Write a function that solves the "every number eventually equals 4" puzzle. The output should be
    an array of the path you took to make it equal four
    ex/ [11, 6, 3, 5, 4], [19, 8, 5, 4] or [252, 18, 8, 5, 4]
    For context: https://puzzling.stackexchange.com/questions/29137/every-number-eventually-equals-4 */

