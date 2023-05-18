const inquirer = require('inquirer');

const askUser = async () => {
  const getName = await inquirer.prompt({
    type: "input",
    message: "What is your user name?",
    name: "username",
  });

  const getPassword = await inquirer.prompt({
    type: "password",
    message: "What is your password?",
    name: "password",
  });

  const confirmPassword = await inquirer.prompt({
    type: "password",
    message: "Re-enter password to confirm:",
    name: "confirm",
  });
  //Test inputs
  console.log(getPassword);
  console.log(confirmPassword);
  console.log(getName);

  getPassword.password === confirmPassword.confirm
    ? console.log("Success!")
    : console.log("You forgot your password already?!");
};

askUser();
