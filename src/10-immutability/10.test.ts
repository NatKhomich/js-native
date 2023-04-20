import {
    addNewBooksToUser,
    DataType,
    FamilyType,
    makeHairStyle,
    moveUser, moveUsersToOtherHouse, onChangeDataAddress,
    onChangeLife, updateBookJs,
    updateUserLaptop,
    UserType, UserWitchBooksType,
    UserWithLaptopType
} from './10';


test('reference type', () => {
    let user: UserType = {
        name: 'Natalia',
        hair: 40,
        address: {
            city: 'Kursk',
            house: 83
        }
    }

    const awesomeUser = makeHairStyle(user, 2)

    expect(user.hair).toBe(40)
    expect(awesomeUser.hair).toBe(20)
})


test('change address', () => {
    let user: UserWithLaptopType = {
        name: 'Natalia',
        hair: 40,
        address: {
            city: 'Kursk',
            house: 83
        },
        laptop: {
            title: 'MSY'
        }
    }

    const movedUser = moveUser(user, 'Astana')

    expect(user).not.toBe(movedUser)
    expect(user.address).not.toBe(movedUser.address)
    expect(user.laptop).toBe(movedUser.laptop)
    expect(movedUser.address.city).toBe('Astana')
})

test('update MSY to macbook', () => {
    let user: UserWithLaptopType = {
        name: 'Natalia',
        hair: 40,
        address: {
            city: 'Kursk',
            house: 83
        },
        laptop: {
            title: 'MSY'
        }
    }

    const copyUser = updateUserLaptop(user, 'Macbook')

    expect(user).not.toBe(copyUser)
    expect(user.address).toBe(copyUser.address)
    expect(user.laptop).not.toBe(copyUser.laptop)
    expect(copyUser.laptop.title).toBe('Macbook')
    expect(user.laptop.title).toBe('MSY')
})
//----------------------------------------------------------------------------------------

test('on change place life', () => {
    let family: FamilyType = {
        citizen: {
            name: 'Natalia'
        },
        age: 28,
        dog: 'Bonya',
        address: {
            city: 'Kursk',
            house: 83
        }
    }

    const onChangeAddressCopy = onChangeLife(family, 'Astana')

    expect(onChangeAddressCopy.address.city).toBe('Astana')
    expect(family.address.city).toBe('Kursk')
})

test('on change place life', () => {
    let data: DataType = {
        citizen: {
            name: 'Natalia'
        },
        age: 28,
        dog: 'Bonya',
        address: {
            city: {
                title: 'Kursk',
                district: 'Northern',
                house: 83
            }
        }
    }


const dataAddressCopy = onChangeDataAddress(data, 'Astana')

expect(dataAddressCopy.address.city.title).toBe('Astana')
expect(data.address.city.title).toBe('Kursk')
})
//------------------------------------------------------------

test('update ', () => {
    let users: UserWithLaptopType & UserWitchBooksType = {
        name: 'Natalia',
        hair: 40,
        address: {
            city: 'Kursk',
            house: 83
        },
        laptop: {
            title: 'MSY'
        },
        books: ['css', 'html', 'js', 'react']
    }

    const copyUsers = moveUsersToOtherHouse(users, 221)

    expect(users).not.toBe(copyUsers)
    expect(users.books).toBe(copyUsers.books)
    expect(copyUsers.laptop.title).toBe('MSY')
    expect(users.address.house).toBe(83)
    expect(copyUsers.address.house).toBe(221)

})


test('add new books to user', () => {
    let user: UserWithLaptopType & UserWitchBooksType = {
        name: 'Natalia',
        hair: 40,
        address: {
            city: 'Kursk',
            house: 83
        },
        laptop: {
            title: 'MSY'
        },
        books: ['css', 'html', 'js', 'react']
    }

    const newUserBooks = addNewBooksToUser(user, 'ts')

    expect(user).not.toBe(newUserBooks)
    expect(user.books).not.toBe(newUserBooks.books)
    expect(newUserBooks.books[4]).toBe('ts')
    expect(user.books.length).toBe(4)
})

test('update js to ts', () => {
    let user: UserWithLaptopType & UserWitchBooksType = {
        name: 'Natalia',
        hair: 40,
        address: {
            city: 'Kursk',
            house: 83
        },
        laptop: {
            title: 'MSY'
        },
        books: ['css', 'html', 'js', 'react']
    }

    const newUserBooks = updateBookJs(user, 'js', 'ts')

    expect(user).not.toBe(newUserBooks)
    expect(user.books).not.toBe(newUserBooks.books)
    expect(newUserBooks.books[2]).toBe('ts')
})

test('remove js book', () => {
    let user: UserWithLaptopType & UserWitchBooksType = {
        name: 'Natalia',
        hair: 40,
        address: {
            city: 'Kursk',
            house: 83
        },
        laptop: {
            title: 'MSY'
        },
        books: ['css', 'html', 'js', 'react']
    }

    const newUserBooks = updateBookJs(user, 'js', 'ts')

    expect(user).not.toBe(newUserBooks)
    expect(user.books).not.toBe(newUserBooks.books)
    expect(newUserBooks.books[2]).toBe('ts')
})