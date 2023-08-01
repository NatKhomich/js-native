//promise - объект

//методы:
// then - если промис зарезолвился
// catch - если промис зареджектился
// finally - выполнится в любом случае, и при resolve и при reject

//состояния промиса pending (в ожидании), fulfilled (resolve, решен), reject (отклонен)

//.then - когда обещание выполнится вызови функцию
//когда запрос на сервер отправлен состояние pending

const axios = {}
const promise1 = axios.get('https://google.com')
promise1
    .then( () => { } )
    .catch( () => { } )
console.log(promise1)

//если результат получен resolved, выполняется then
//если результат rejected (ошибка, данные не найдены и тд) - resolved никогда не выполнится
//нужен метод catch(ловить)

//чтобы работать с двумя промисами создаем его через конструктор
//применяем метод all и в параметры передаем оба промиса
//const otherPromise = Promise.all([promise1, promise2])
//и также через then catch работаем с ним
//метод allSettled - возвращ новый промис, который заресолвится в тот момент
//когда оба промиса из параметров уйдут из состояния pending либо в fulfilled либо в reject
//возвращает он массив объектов с состоянием промисов.
// [{status: 'fulFilled', value: {...} }, {status: 'rejected', reason: '...' }]


//у Promise есть матод .resolve
//Promise.resolve(100) - метод resolve создал промис со значением 100
//Promise.reject({massage: 'Some error'}) - метод reject создал промис с сообщением об ошибке