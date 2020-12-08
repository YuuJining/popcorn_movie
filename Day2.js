class ArrayUtilities {
    static addZeros = (array) => array.map((instance) => instance * 10);
    static moreThanFifty = (array) => array.filter((instance) => instance > 50);
    static removeFirst = (array) => array.slice(1, array.size);
    static sumAll = (array) =>
      array.reduce((sum, value) => {
        return sum + value;
      }, 0);
    static divide = (instance) => {
      return String(instance).split("");
    };
  }
  
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  
  const addZeros = ArrayUtilities.addZeros(numbers);
  console.log(addZeros);
  
  const moreThanFifty = ArrayUtilities.moreThanFifty(addZeros);
  console.log(moreThanFifty);
  
  const noFirst = ArrayUtilities.removeFirst(moreThanFifty);
  console.log(noFirst);
  
  const sumAll = ArrayUtilities.sumAll(noFirst);
  console.log(sumAll);
  
  const divided = ArrayUtilities.divide(sumAll);
  console.log(divided);
  
   