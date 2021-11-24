// definiren des Varible 
/*
const expr = 'Oranges'
// switch statment 
switch (expr) {
    case "Oranges":
      console.log("Oranges are $0.59 a pound.");
      break;
    case "Apples":
      console.log("Apples are $0.32 a pound.");
      break;
    case "Bananas":
      console.log("Bananas are $0.48 a pound.");
      break;
    case "Cherries":
      console.log("Cherries are $3.00 a pound.");
      break;
    case "Mangoes":
    case "Papayas":
      console.log("Mangoes and papayas are $2.79 a pound.");
      break;
    default:
      console.log("Sorry, we are out of " + expr + ".");
  }
 */ 
// if und else if statment 
const expr = 'Oranges'
  if (expr === 'Oranges') {
    console.log("Oranges are $0.59 a pound.");
  } else if (expr === 'Apples') {
    console.log("Apples are $0.32 a pound.");
  } else if (expr === 'Bananas'){
    console.log("Bananas are $0.48 a pound.");
  } else if (expr === 'Cherries'){
    console.log("Cherries are $3.00 a pound.");
  } else if (expr === 'Mangoes' || expr === 'Papayas'){
    console.log("Mangoes and papayas are $2.79 a pound.");
  } else {
    console.log("Sorry, we are out of " + expr + ".");
  }