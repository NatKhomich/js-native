const ages = [18,20,22,1,100,90,14];

const predicate = (age: number) => {
    return age>90;
}

const olAges = [100] // >90

type CourseType = {
    title: string
    price: number
}

const course = [
    {title: 'CSS', price: 110},
    {title: 'JS', price: 200},
    {title: 'React', price: 150}
]
const chipPredicate = (course:CourseType) => { //<160
  return course.price < 160;
}

const chipCourse = [
    {title: 'CSS', price: 110},
    {title: 'React', price: 150}
];