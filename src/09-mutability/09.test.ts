
function increaseAge (u: UserType) {
    user.age ++
}

type UserType = {
    name: string
    age: number
}

test ('big test', ()=> {

    let user: UserType = {
        name: 'Natalia',
        age: 28
    }

    increaseAge(user)

})