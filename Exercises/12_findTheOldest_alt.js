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
/*
Pseudo: 
Obj: Finds oldest even when someone is living
Refactor ideas:
Except when yearOfDeath === undefined, then yOD = 2022
Difference = yOD - yOB for each? Find something that iterates arrays
Get greatest, return index number of greatest through callback
Use that index to return name
*/
const test2 = function test2(){
  function getDifference(difference){
    difference = people2.yearOfDeath - people2.yearOfBirth;
  }
  function iterateDifference(oldestIndex){
    mapArray = people2.map(getDifference);
    maxArray = Math.max(mapArray);
    oldestIndex = mapArray.indexOf(maxArray);
  }
  function returnOldest(){
    iterateDifference();
    return people2[oldestIndex].name;
  }
  // pseudo: if any object in the array's yOD is undefined, let yOD = 2022.
    // then return returnOldest
  // pseudo: else return returnOldest
  }
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
  const people3 = [ //Test 3
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