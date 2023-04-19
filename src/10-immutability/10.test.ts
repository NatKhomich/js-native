import {makeHairStyle, moveUser, UserType, UserWithLaptopType} from './10';


test ('reference type', ()=> {
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


test ('change address', ()=> {
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