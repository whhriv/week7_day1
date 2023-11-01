//Question #3 Using the Ternary Operator and map create an array that adds is eating pizza to every name from the array tmnt that ends with o and add is being rude to any other name.

var tmnt = ["Leonardo", "Michelangelo", "Donatello", "Raphael"]
// expect
// [
//   'Leonardo is eating pizza',
//   'Michelangelo is eating pizza',
//   'Donatello is eating pizza',
//   'Raphael is being rude'
// ]
//let dict = (tmnt.length-1=='o') ? tmnt.map(() => .push('is eating pizza')) : tmnt.map(()) => .push('is being rude')//
//console.log(dict)

//let dict = tmnt.map(x => x +"likes to eat pizza")
//console.log(dict)

//let newDict = tmnt.map(name.charAt(name.length-1) ==='o') ? tmnt.map(name => name +' is eating pizza') : tmnt.map(name => name + ' is being rude';
                                                                                                                  
let tmntQ = tmnt.map(function(name) {
    return name.charAt(name.length-1) == 'o' ? name+ " is eating pizza" : name + " is being rude";
});
console.log(tmntQ)

//Question #4 - Write an arrow function to find the max number in a list. Do not use the Math.max Function.

var findAMax=[123,5436,45784,1234,34,65,234125,645,3452,13216,49]
//Expect
// 234125

//let finding - findAMax.reduce((x,y) => (y>x) ? y : x), findAMax[0]); 

const maxNum = findAMax.reduce((max, i) => (i > max ? i : max), findAMax[0]);
console.log(maxNum)


//Question #5 - At the end of the third Iteration (the third time the loop has ran) of this for Loop define the state of all the variables used in the cell


let iterCount = 0;
var bingo = "B-I-N-G-O"
var ognib = ""
for(let i=bingo.length-1; i>=0; i--){
    ognib+=(bingo[i])
    //define state from this line on the third iteration
    if (iterCount === 3) {
        //console.log('here')
        console.log(ognib)
        console.log(bingo)
        break;
    } iterCount++;
};

//bingo value is
console.log(bingo)
//ognib value is
console.log(ognib)
// i value is
console.log(iterCount)

// Day 2 Question 1 - Use the array of shop items provided and present the the information in the following format

var shopItems=[{
    id:1,
    name:"Air Max 97",
    price:130.00,
    desc:"The design of the shoe is commonly thought to be inspired by the bullet trains of Japan, but the design was inspired by mountain bikes. ",
    category:"shoes"
},{
    id:2,
    name:"Adidas NMD R1",
    price:128,
    desc:"New-wave classics, with a timeless vintage design: mens NMD R1 gear is the ultimate go-anywhere shoe. Vibrant styles and soft cushioning will have you gliding through life, wherever it may take you.",
    category:"shoes"
},{
    id:3,
    name:"Gucci Oversize T-shirt with Interlocking G",
    price:580,
    desc:"The now recognizable oversize Gucci T-shirt continues to evolve with each new collection, the Interlocking G print is influenced by an '80s design from the archives. Streetwear continues to be a defining feature of Gucci's collections and is often juxtaposed by tailored separates.",
    category:"shirts"
},{
    id:4,
    name:"Nike Sportswear Club",
    price:18.97,
    desc:"The Nike Sportswear Club T-Shirt is made with our everyday cotton fabric and a classic fit for a familiar feel right out of the bag. An embroidered Futura logo on the chest provides a signature Nike look.",
    category:"shirts"
},{
    id:5,
    name:"Spanx Flare Jeans, Vintage Indigo",
    price:148,
    desc:"These 70s inspired flare jeans are the perfect wear everywhere with anything style. Designed with premium stretch denim, high-rise coverage and hidden core shaping technology, this jean puts a new twist on a retro silhouette.",
    category:"pants"
},{
    id:6,
    name:"Bonobos Premium Stretch Jeans",
    price:69,
    desc:"Resilient stretch denim made incredibly soft. Yes, jeans can be unbelievably comfortable.",
    category:"pants"
}]

// =======================================
// Name: 	 Air Max 97
// Price: 	 130
// About: 	 The design of the shoe is commonly thought to be inspired by the bullet trains of Japan, but the design was inspired by mountain bikes. 
// Category: shoes


let [id, name, price, desc, category] = shopItems 


for (let item of shopItems){
   // console.log(item);
    console.log('=======================================')
    console.log('Name:     ', item.name);
    console.log('Price:    ', item.price);
    console.log('About:    ', item.desc);
    console.log('Category: ', item.category);
}

//Day 2 - Question 2 - Write a function that parses through the obj and displays all of their favorite food dishes as shown. 

var hwPerson = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}
console.log(hwPerson.pizza[0])
console.log(hwPerson.shakes)
console.log(hwPerson.shakes[0].culvers)

for (let foods of hwPerson) {
    console.log()
}







//CODE WARS
//1.)  https://www.codewars.com/kata/50654ddff44f800200000004/solutions/javascript
multiply = function (a, b) {
    return a * b;
  }
  
// 2.) https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa/javascript

function openOrSenior(info){
    var arr = [];
    for ( i = 0; i < info.length; i++) {
      if (info[i][0] >= 55 && info[i][1] >7 ){
        arr.push("Senior");
      } else {
        arr.push("Open")
      }
    }
    return arr
  };

  // 3.) https://www.codewars.com/kata/53dbd5315a3c69eed20002dd/solutions/javascript
  function filter_list(l) {
    return l.filter(x => typeof x !== 'string')
  }