const introduction = (name) => {
    return `Hi, my name is ${name}.`
}

const introductionWithLanguage = (name,language) => {
 return `Hi, my name is ${name} and I am learning to program in ${language}.`
}

//What if we wanted to make this function work whether or not a first name is passed in as an argument? We can do this by setting a default value for the firstName parameter:
function sayHelloTo(firstName = "User") {
  console.log(`Hello, ${firstName}!`);
}

const introductionWithLanguageOptional = (name,language = "JavaScript") => {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
   }