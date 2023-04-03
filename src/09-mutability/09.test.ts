function increaseAge(u: UserType) {
    u.age++
}

type UserType = {
    name: string
    age: number
}

test('reference type test', () => {

    let user: UserType = {
        name: 'Natalia',
        age: 28
    }

    increaseAge(user)

    expect(user.age).toBe(29)

    let superman = user
    superman.age = 1000

    expect(user.age).toBe(1000)

})

test('array reference test', () => {

    let users: UserType[] = [
        {
            name: 'Natalia',
            age: 28
        },
        {
            name: 'Alex',
            age: 33
        }
    ]

    let admins = users
    admins.push({name: 'Bonya', age: 1})

    expect(users[2]).toEqual({name: 'Bonya', age: 1})

})

test('value type test', () => {

    let usersCount = 100

    let adminsCount = usersCount
    adminsCount++

    expect(adminsCount).toBe(101)

})

type UsersPropsType = {
    name: string
    age: number
    address: {
        title: string
    }
}

test('object reference test', () => {

    let user: UsersPropsType = {
        name: 'Natalia',
        age: 28,
        address: {
            title: 'Kursk'
        }
    }
    //let addr = user.address
    let user2: UsersPropsType = {
        name: 'Alex',
        age: 28,
        address: user.address
    }

    user2.address.title = 'Astana'

    expect(user.address).toBe(user2.address)
    expect(user.address.title).toBe('Astana')

})

test('reference type array test', () => {

    const address = {
        title: 'Kursk'
    }

    let user: UsersPropsType = {
        name: 'Natalia',
        age: 28,
        address: address
    }
    let user2: UsersPropsType = {
        name: 'Alex',
        age: 28,
        address: address
    }

    const users = [user, user2, {name: 'Bonya', age: 1, address: address}]

    const admins = [user, user2]

    admins[0].name = 'Natascha'

    expect(users[0].name).toBe('Natascha')
    expect(user.name).toBe('Natascha')

})