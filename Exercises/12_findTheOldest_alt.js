const people1 = [ //Test 1
    {
      name: "Carly",
      yearOfBirth: 1942,
      yearOfDeath: 1970,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
]
const test1 = function test1(){
  difference1 = people1[0].yearOfDeath - people1[0].yearOfBirth;
  difference2 = people1[1].yearOfDeath - people1[1].yearOfBirth;
  difference3 = people1[2].yearOfDeath - people1[2].yearOfBirth;
  if(difference1 > difference2 && difference3){
    return people1[0].name;
  }
  else if(difference2 > difference1 && difference3){
    return people1[1].name
  }
  else if(difference3 > difference1 && difference20){
    return people1[2].name;
  }
}
const people2 = [ //Test 2
    {
      name: "Carly",
      yearOfBirth: 2018,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]

const test2 = function test2(){
   start();
  function start(){
    if (people2.yearOfDeath === undefined){
      let arrayLength = people2.length;
      for(let i = 0; i < arrayLength; i++){
        if (people2[i].yearOfDeath === undefined){
          people2[i].yearOfDeath = 2022;
        }
      }
      returnOldest();
  }
    else returnOldest();
  }
  function iterateDifference(){
    differenceArray = [];
    arrayLength = people2.length;
    for(let i = 0; i < arrayLength; i++){
      differenceArray.push(people2[i].yearOfDeath - people2[i].yearOfBirth)
    }
  }
  function returnOldest(){
    iterateDifference();    
    maxAge = Math.max(... differenceArray);
    oldestAgeIndex = differenceArray.indexOf(maxAge);
    console.log(people2[oldestAgeIndex].name);
  }
}
const people3 = [ //Test 3
// Pseudo: I'm gonna try just reusing test 2, but inserting number 3
    {
      name: "Carly",
      yearOfBirth: 1066,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]
  const test3 = function test3(){
    start();
   function start(){
     if (people3.yearOfDeath === undefined){
       let arrayLength = people3.length;
       for(let i = 0; i < arrayLength; i++){
         if (people3[i].yearOfDeath === undefined){
           people3[i].yearOfDeath = 2022;
         }
       }
       returnOldest();
   }
     else returnOldest();
   }
   function iterateDifference(){
     differenceArray = [];
     arrayLength = people3.length;
     for(let i = 0; i < arrayLength; i++){
       differenceArray.push(people3[i].yearOfDeath - people3[i].yearOfBirth)
     }
   }
   function returnOldest(){
     iterateDifference();    
     maxAge = Math.max(... differenceArray);
     oldestAgeIndex = differenceArray.indexOf(maxAge);
     console.log(people3[oldestAgeIndex].name);
   }
 }
