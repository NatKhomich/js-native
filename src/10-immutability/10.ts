export type UserType = {
    name: string
    hair: number
    address: {
        city: string,
        house: number
    }
}

export type LaptopType = {
    title: string
}

export type UserWithLaptopType = UserType & {
    laptop: LaptopType
}

export function makeHairStyle(u: UserType, power: number) {
    const copyUser = {
        ...u,
        hair: u.hair / power
    }
    //copyUser.hair = copyUser.hair / power
    return copyUser
}

export function moveUser(u: UserWithLaptopType, city: string) {
    /*const copy = {
        ...u,
    }
    copy.address = {...copy.address, city: city}*/

    return {
        ...u, address: {...u.address, city: city}
    }
}

export const updateUserLaptop = (user: UserWithLaptopType, title: string) => {
    return {
        ...user, laptop: {...user.laptop, title: title}
    }
}
//---------------------------------------------------------------------------------

export type FamilyType = {
    citizen: {
        name: string
    }
    age: number
    dog: string
    address: {
        city: string
        house: number
    }
}

export const onChangeLife = (family: FamilyType, newCity: string) => {
    return {
        ...family, address: {...family.address, city: newCity}
    }
}

export type DataType = {
    citizen: {
        name: string
    }
    age: number
    dog: string
    address: {
        city: {
            title: string
            district: string
            house: 83
        }
    }
}

export const onChangeDataAddress = (data: DataType, newTitle: string) => {
    return {
        ...data, address: {...data.address, city: {...data.address.city, title: newTitle}}
    }
}
//-----------------------------------------------------------------------
export type UserWitchBooksType = UserType & {
    books: string[]
}