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

/*function titleCase(string) {
  string = string.toLowerCase().split(' ');
for (let i = 0; i < string.length; i++) {
  string[i] = string[i].charAt(0).toUpperCase() + string[i].slice(1);
}
return string.join(' ');
}*/

function titleCased() {
  let newTutorials = tutorials.map(tutorial => {
    let splitTutorial = tutorial.split(' ');
    let titleWords = splitTutorial.map( word => {
      return word.charAt(0).toUpperCase() + word.slice(1)
    }).join(' ');
    return titleWords;
  })
  return newTutorials;
}
