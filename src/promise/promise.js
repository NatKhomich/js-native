//promise - объект

//методы:
// then - если промис зарезолвился
// catch - если промис зареджектился
// finally - выполнится в любом случае, и при resolve и при reject

//состояния промиса pending (в ожидании), resolve (решен), reject (отклонен)

//.then - когда обещание выполнится вызови функцию
//когда запрос на сервер отправлен состояние pending
const axios = {}
const promise1 = axios.get('https://google.com')
promise1.then( () => { } )
console.log(promise1)
//если результат получен resolved, выполняется then
//если результат rejected (ошибка, данные не найдены и тд) - resolved никогда не выполнится
//нужен метод catch(ловить)