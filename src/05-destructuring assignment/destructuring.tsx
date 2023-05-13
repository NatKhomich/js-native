import React from 'react';
import {LessonType} from './destructuring.test';


export type ManType = {
    name: string
    age: number
    lessons: LessonType[] //или lessons: Array<{title: string}> и тогда тип LessonType мб не создавать
    address: {
        street: {
            title: string
        }
    }
}

type ManComponentsType = {
    title: string
    man: ManType
    food: Array<string>
    car: {model: string}
}

const ManComponents: React.FC<ManComponentsType> = ( {title, man, ...props}) => {
    //title и man основные свойства, а к остаточным обращаемся через props

   //const { title, man, ...restProps } = props //или так

   //const [message, setMessage] = useState<string>('hello') //деструктуризация массива

    return (
        <div>
            <h1>{title}</h1>
            <hr/>
            <div> {props.car.model} </div>
            <div> {man.name} </div>
        </div>
    );
};
