// Create a coin money application that takes X amount of money (such as $4.99) and determines the exact amount of change needed in quarters, dimes, nickels and pennies. Do not worry about adding a user interface to the application. Instead, focus on writing good tests and functional code.

export default class CoinCounters {

  // recursive 
  recursiveCounter = function(total) {
    if (isNaN(total)) {  // termination case
      return;
    } else if (total < 0.01 ) {  // base case
      return "Keep the change you filthy animal"
    } else if (total >= .25) {  // recursive
      console.log(Math.floor(total / .25) + " Quarters");
      return recursiveCounter(total - ((Math.floor(total / .25)) / 4));
    } else if (total >= .10) {
      console.log(Math.floor(total / .10) + " Dimes");
      return recursiveCounter(total - ((Math.floor(total / .10)) / 10));
    } else if (total >= .05) {
      console.log(Math.floor(total / .05) + " Nickels");
      return recursiveCounter(total - ((Math.floor(total / .05)) / 20));
    } else if (total >= 0.01) {
      console.log(Math.round(total / .01) + " Pennies");
      return recursiveCounter(total - ((total / .01) / 100));
    }
  };

  // closure
  function closureCounter (total) {
    let instances = 0;
    total.forEach(function(total) {
      if (total % .25 === 0) { 
        instances++; 
      } else if (total % .10 === 0) { 
        instances++; 
      } else if (total % .05 === 0) { 
        instances++; 
      } else if (total % .01 === 0) { 
        instances++; 
      } 
    });
    return instances;
  }
  
  closureCounter([.91]);
  // returns 3
}