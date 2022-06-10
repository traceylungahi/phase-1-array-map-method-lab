const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

function titleCased() {
  const newTutorials = [];
  for(const bit of tutorials) {
    const array = bit.split(" ");
    for(let n = 0; n < array.length; n++){
      array[n] = array[n].charAt(0).toUpperCase() + array[n].slice(1)
    }
    const array2 = array.join(" ");
    newTutorials.push(array2)
  }
  tutorials.map(bit => {
    const array = bit.split(" ");
    for(let n = 0; n < array.length; n++){
      array[n] = array[n].charAt(0).toUpperCase() + array[n].slice(1)
    }
    const array2 = array.join(" ");
    newTutorials.push(array2)
  })
  return newTutorials;
}
console.log(titleCased())
