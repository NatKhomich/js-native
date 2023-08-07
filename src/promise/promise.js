//promise - объект. у него нет свойств, только методы:

// then (затем) - если промис зарезолвился (в статусе fulfilled) вызови колбек .then( (data) => {console.log(data)} )

// catch (ловить) - если промис зареджектился (в статусе reject)
// finally - выполнится в любом случае, и при resolve и при reject

//состояния промиса pending (в ожидании), fulfilled (resolve, решен), reject (отклонен)

//пример
/*const axios = {}
const promise1 = axios.get('https://google.com')
promise1
console.log(promise1)
    .then( (data) => {console.log(data)} )
    .catch( (error) => {console.log(error)} )
*/

//если результат получен resolved, выполняется then
//если результат rejected (ошибка, данные не найдены и тд) - resolved никогда не выполнится

//чтобы работать с двумя промисами создаем его через конструктор class Promise
//применяем метод all и в параметры передаем оба промиса и также через then catch работаем с ним
//const otherPromise = Promise.all([promise1, promise2])
//otherPromise
    //.then(() => {}) - выполняем что нужно
    //.catch(() => {}) - ловим ошибку

//метод .all сработает, только когда оба промиса будут fulfilled !!!
//если хотя бы один промис не зарезолвится Promise.all зареджектится (будет ошибка)

//метод .allSettled - возвращ новый промис, который зарезолвится в тот момент
//когда оба промиса уйдут из состояния pending либо в fulfilled либо в reject
//возвращает он массив объектов с состоянием промисов.
// [{status: 'fulFilled', value: {...} }, {status: 'rejected', reason: '...' }]


//у Promise есть матод .resolve
//Promise.resolve(100) - метод resolve создал промис со значением 100
//Promise.reject({massage: 'Some error'}) - метод reject создал промис с сообщением об ошибке








//-----------------------------------------------------------------------------------------------------

//промисы позв обрабатывать отложенные во врмени события - асинхронно
// (запросы на сервер, запись данных в базу данных)
//промис - обещание предоставить результат позже (промис это объект)

//3 состояния:
//pending - ожидание, resolve - исполнен, reject - ошибка

/*const myPromise = new Promise((resolve, reject) => {
    //выполнение асинхронных действий (описываем логику)

    //внутри функции нужно вызвать одну из функций: resolve или reject
})

myPromise
    .then(value => {
        //действия в случае успешного исп промиса
        //значение value - значение, переданное в вызове функции resolve внутри промиса
    })
    .catch(error => {
        //действия в случае отклонения промиса
        //значение value - значение, переданное в вызове функции reject внутри промиса
    })*/


//fetch функция возвращает промис
/*fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json()) /!*json возвращает промис*!/
    .then(json => console.log(json))
    .catch(error => console.error(error))*/

/*fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response =>  response.json())
    .then(json => console.log(json))
    .catch(error => console.log(error.message))*/


/*const getData = (url) =>
    new Promise((resolve, reject) =>
        fetch(url)
            .then(response => response.json())
            .then(json => resolve(json))
            .catch(error => reject(error))
    )

getData('https://jsonplaceholder.typicode.com/todos')
    .then(data => console.log(data))
    .catch(error => console.log(error.message))*/


//async/await - спец синтаксис для упрощения работы с промисами
//асинхронная функция - ф-ия, кот вместо результата возвращает промис

/*async function asyncFn() {
    //всегда возвращ промис
}

const asyncFnc = async () => {
    //всегда возвращ промис
    return 10
}
asyncFnc()
.then(value => console.log(value))*/

/*
const asyncFunction = async () => {
    throw new Error('There was an error!')
}
asyncFunction()
.then(value => console.log(value))
.catch(error => console.log(error.message))
*/

//await - ожидание результата другого промиса
/*const asyncFnc = async () => {
    await Promise
    //внутри асинхронных функций можно ожидать результатов промисов
}
asyncFnc()*/


/*const timerPromise = () =>
    new Promise((resolve, reject) =>
    setTimeout(() => resolve(), 2000)
    )
const asyncFn = async () => {
    console.log('Timer starts')
    const startTime = performance.now()
    await timerPromise()
    const endTime = performance.now()
    console.log('TimerEnd', endTime - startTime)
}
asyncFn()*/


/*const getData = async (url) => {
    const res = await fetch(url)
    const json = await res.json()
    return json
}

const url = 'https://jsonplaceholder.typicode.com/todos'
    const data = await getData(url)*/





