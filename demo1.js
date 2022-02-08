function filter(numbers, callback) {
    console.log('Filter');
    let results = [];
    for (const number of numbers) {
      console.log('into foor loop');
      if (callback()) {
          console.log('into if')
        results.push(number);
      }
    }
    return results;
  }
  console.log('siddhu')
  let numbers = [1, 2, 4, 7, 3, 5, 6];
  
  console.log('siddhu Subramanian') 
  let oddNumbers = filter(numbers, function (number) 
  {
      console.log('Hello');
    return number % 2 != 0;
  });
  
  console.log(oddNumbers);