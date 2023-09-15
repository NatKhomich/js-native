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
    const user = {
        name: name,
        site: 'nat-khomich.com',
        dateOfBirth: new Date(1994, 11, 6),
        hello: commonHello
    }
    return user
}

const u1 = userFabric('Natalia')
const u2 = userFabric('Alex')
u1.hello()
u2.hello()