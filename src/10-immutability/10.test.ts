import {
    DataType,
    FamilyType,
    makeHairStyle,
    moveUser, onChangeDataAddress,
    onChangeLife,
    updateUserLaptop,
    UserType,
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