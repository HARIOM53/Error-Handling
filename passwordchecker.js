class User {
    constructor(username, password) {
      this.username = username;
      this.password1 = password;
    }
  
    get password() {
      return this.password1.replace(/./g, "*");
    }
  
    set password(newPassword) {
      if (newPassword.length >= 8 && /[0-9]/.test(newPassword) && /[A-Z]/.test(newPassword)) {
        this.password1 = newPassword;
      } else {
        console.log("Invalid password. The password must be at least 8 characters long and contain at least one number and one uppercase letter.");
      }
    }
  }
  
//   Example
  const user1 = new User("john_doe", "pass123");
  
  const password = user1.password;
  console.log(password);
  
  user1.password = "newpass";
  console.log(user1.password);
  
  user1.password = "newP@ssw0rd";
  console.log(user1.password);
  