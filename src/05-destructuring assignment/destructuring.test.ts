import {ManType} from './destructuring';

export type LessonType = {
    title: string
}

let props: ManType
beforeEach(() => {
    props = {
        name: 'Natalia',
        age: 28,
        lessons: [{title: '1'}, {title: '2'}],
        address: {
            street: {
                title: 'Deriglazova street'
            }
        }
    }
})

test('', () => {


    //const age = props.age
    //const lessons = props.lessons

    const {age, lessons} = props // деструктурирующее присваивание (тоже самое что 2 строки сверху)
    //создвется 2 переменные, которые получают свойства из объекта props
    const {title} = props.address.street

    expect(age).toBe(28)
    expect(lessons.length).toBe(2)
    expect(title).toBe('Deriglazova street')
})

test('', ()=> {
    const l1 = props.lessons[0]
    const l2 = props.lessons[1]

    const [ls1, ls2] = props.lessons

    expect(l1.title).toBe('1')
    expect(l2.title).toBe('2')

    expect(ls1.title).toBe('1')
    expect(ls2.title).toBe('2')
})