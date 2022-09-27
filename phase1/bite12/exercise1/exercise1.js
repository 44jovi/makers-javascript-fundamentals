class User {

  constructor(name, introduction) {
    this.name = name;
    this.introduction = introduction;
  }

  getName() {
    return this.name;
  }

  getIntroduction() {
    return this.introduction;
  }
}

module.exports = User;
