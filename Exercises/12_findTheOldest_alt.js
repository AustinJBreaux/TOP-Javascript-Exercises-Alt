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
/*Pseudo: Find oldest person
Get difference between death and birth = death - birth
Test difference between the three objects Math.max()
Return name of object containing greatest difference
*/
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