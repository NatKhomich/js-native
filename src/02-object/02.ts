
type LocalCityType = {
    title: string
    countryTitle: string
}
type AddressType = {
    streetTitle: string
    city: LocalCityType
}
type TechnologiesType = {
    id: number
    title: string
}

type StudentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    address: AddressType
    technologies: Array<TechnologiesType>
}

const student: StudentType = {
    id: 1,
    name: 'Natalia',
    age: 28,
    isActive: true,
    address: {
        streetTitle: 'Deriglazova 83',
        city: {
            title: 'Kursk',
            countryTitle: 'Russia',
        }
    },
    technologies: [
        {
            id: 1,
            title: 'HTML',
        },
        {
            id: 2,
            title: 'CSS',
        },
        {
            id: 3,
            title: 'JS',
        },
    ]
}

console.log(student.age)
console.log(student.address.city.title)
console.log(student.technologies[0].title)