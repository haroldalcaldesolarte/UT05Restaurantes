class Menu {
  constructor(name, description) {
    this.name = name;
    this.description = description || '';
  }

  getName() {
    return this.name;
  }

  setName(name) {
    this.name = name;
  }

  getDescription() {
    return this.description;
  }

  setDescription(description) {
    this.description = description;
  }

  toString() {
    return 'Menu ' + this.name + ': ' + this.description ;
  }
}

export {Menu};