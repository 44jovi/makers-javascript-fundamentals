class UserBase {

  constructor(users) {
    this.users = users;
  }

  getNames() {
    return this.users.map(user => user.name);    
  }

  getIntroductions() {
    return this.users.map(user => user.introduction);
  }
}

module.exports = UserBase;
