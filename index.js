/* Psuedo Code for Initial Commit

  Take user input and store as a variable
  Take variable, should be a string, and split() it into an array of strings
  Loop through the array of strings and add them to an object (need to create an object)
  
  rules for the object
  need to keep count of each flavor

  let froyoOrder = {
    flavorname : count#,
    flavorname2 : count#,
    flavorname3 : count#,
  }

  need to write a rule for the loop that if something exists in the order already, add to the count
  otherwise add flavorName and set count to 1 (related to updating values in keyvalues pairs)

  will be using either
  Object.keys(userInputtedFroyoOrder)
  For (let froyoFlavor in userInputtedFroyoOrder)

  Return Object with froyo flavor numbers


*/

// take user input
const userOrder = prompt("Please enter your froyo order by flavor name. Please separate with commas and do not include spaces", "Chocolate,Chocolate,Vanilla,Strawberry,Chocolate" );


// turn string input into an array that can be sorted
const userOrderArray = userOrder.split(`,`);


// create an empty object to take the (array)order
const froyoOrderObject = {};

for (let i = 0; i < userOrderArray.length; i++){
  let flavorName = userOrderArray[i];

  // if the flavor(key) exists, add 1 to the value; otherwise add the key and set the value to 1
  if (froyoOrderObject[flavorName]){
    froyoOrderObject[flavorName]++;
  } else
  froyoOrderObject[flavorName] = 1;
}

console.log(froyoOrderObject)

// additional thought is I would like to sanitize the user input. would like to ask about that in class & best/common practices

