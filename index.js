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
  return tutorials.map((array) => {
    const newTutorials = array.split(" ");
    const upperCasedNewTutorials = newTutorials.map(
      (newTutorials) => newTutorials.charAt(0).toUpperCase() + newTutorials.slice(1)
    );
    const response = upperCasedNewTutorials.join(" ");
    return response;
  });
};
  