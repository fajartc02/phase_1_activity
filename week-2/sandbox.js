class Trial {
  constructor() {
    this._pisang = 'manis'
    this.count = 0
  }
  // when to utilize getter and setter
  get pisang() {
    return this._pisang
  }

  set setPisang(one) {
    this._pisang = one
  }

  // 
  login() {
    return 'ini login'
  }
  //
  static logon() {
    return 'ini static'
  }

  chaining () {
    this.count += 1
    return this
  }
}

class Buah {
  constructor() {
    this.shield = 'Yes'
    this.weapon = 'sword'
  }

  broken() {
    return 'This from Parent'
  }
}
//inheritance
class Pear extends Buah{
  constructor(nameHero) {
    super()
    this.name = nameHero // polymorphism
  }

  broken() {
    return 'This from Pear'
  }
}

class Apple extends Buah{
  constructor(nameHero) {
    super()
    this.name = nameHero // polymorphism
  }
  
  broken() {
    return 'This from Apple'
  }
}

let trial = new Trial()
let buah = new Buah()
let pear = new Pear('Knight')
let apple = new Apple('Paladin')
trial.pisang
// trial.setPisang = 1
console.log(buah.broken())
console.log(apple.broken())
// console.log(pear);

trial.chaining().chaining().chaining()
// console.log(trial.count);

// console.log(trial.pisang);
// console.log(Trial.logon())