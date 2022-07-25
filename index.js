import inquirer from 'inquirer';
console.log('----------BMI Calculator----------')

inquirer
  .prompt([
    {
      //input for your name
      type: 'input',
      name: 'name',
      message: 'What is your name?',
      validate: (answer) => {
          if (answer === ''){
            return 'please enter a valid name'
          }
          return true 
      }
    },
    {
      // input for your height
      type: 'input',
      name: 'height',
      message: 'What is your height (in inches)?',
      validate: (answer) => {
        if (isNaN(answer)){
          return 'please enter a valid number'
        }
        return true
      }
    },
    {
      // input for your weight
      type: 'input',
      name: 'weight',
      message: 'What is your current weight (in lbs)?',
      validate: (answer) => {
        if (isNaN(answer)) {
          return 'please enter a valid number'
        }
        return true
      }
    },

  ])
  .then((answers) =>{
    //BMI = (weight / (height^2)) * 703
    const height = answers.height;
    const weight = answers.weight;
    const bmi = (weight / (height*height)) * 703;
    const isFloat = (num) => {
      if (num % 1 != 0) {
        return num.toFixed(2)
      }
      return num
    }
    if (bmi < 16) {
      console.log(`${answers.name} your BMI is ${isFloat(bmi)} and it is considered to be severely underweight`)
    } else if (bmi >= 16 && bmi < 18.5) {
      console.log(`${answers.name} your BMI is ${isFloat(bmi)} and it is considered to be underweight`)
    } else if (bmi >= 18.5 && bmi < 25) {
      console.log(`${answers.name} your BMI is ${isFloat(bmi)} and it is considered to be normal`)
    } else if (bmi >= 25 && bmi < 30) {
      console.log(`${answers.name} your BMI is ${isFloat(bmi)} and it is considered to be overweight`)
    } else if (bmi >= 30 && bmi < 35) {
      console.log(`${answers.name} your BMI is ${isFloat(bmi)} and it is considered to be moderately obese`)
    } else if (bmi >= 35 && bmi < 40) {
      console.log(`${answers.name} your BMI is ${isFloat(bmi)} and it is considered to be severely obese`)
    } else if (bmi > 40) {
      console.log(`${answers.name} your BMI is ${isFloat(bmi)} and it is considered to be morbidly obese`)
    }
});



