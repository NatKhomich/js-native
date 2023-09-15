//class - исп для создания однотипных объектов
//ООП принципы - инкапсуляция, наследование, полиморфизм

//ф-ия конструктор - с большой буквы, нет return
function DeleteUser(userId) {
    //this = {} создается неявно свой this
    this.type = 'DELETE-USER'
    this.userId = userId
}
const action1 = new DeleteUser(1) //экземпляр функции конструктора
const action2 = new DeleteUser(2)
console.log(action1)
console.log(action2)

class DeleteUserClass {
    constructor(userId) {
        this.type = 'USER-DEL'
        this.userId = userId
    }
}
const ekz = new DeleteUserClass(3) //экземпляр класса
const ekz2 = new DeleteUserClass(55) //экземпляр класса
console.log(ekz)
console.log(ekz2)


function commonHello() {
  return console.log(`I am ${this.name} from ${this.site}`)
}

const userFabric = (name) => {
    return {
        name: name,
        site: 'nat-khomich.com',
        dateOfBirth: new Date(1994, 11, 6),
        hello: commonHello
    }
}

const u1 = userFabric('Natalia')
const u2 = userFabric('Alex')
u1.hello()
u2.hello()


class UserClass {
    constructor(name, site, dob) {
        this.name = name
        this.site = site
        this.dob = dob
    }
    hello() {
        console.log(`I am ${this.name} from ${this.site}`)
    }
}
const user1 = new UserClass('nata', '@nat-khomich', new Date(1994, 11, 6))
const user2 = new UserClass('alex', '@alex-khomich', new Date(1990, 2, 17))
console.log(user1)
console.log(user2)
user1.hello()
user2.hello()

class Coder extends UserClass { //наследование
    constructor(name, site, dob, tech) {
        super(name, site, dob) //конструктор класса UserClass
        this.tech = tech
    }
    coder() {
        console.log(`I am ${this.name} here is my ${this.tech} code: const sum = (a,b) => a + b`)
    }
}

const coder1 = new Coder('katya', '@katya.com', new Date(1989, 12, 8), 'javaScript')
coder1.coder()