import {LogIn} from "../e2e/POM.spec";

module.exports = {
  login(email, password) {
    LogIn.getUsername().type(email);
    LogIn.getPassword().type(password);
    LogIn.Submit().click();
  },
};
