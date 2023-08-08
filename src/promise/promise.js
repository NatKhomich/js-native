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


//цепочка промисов:
//каждый вызов then возвращает новый промис !!!

//findUserInDB(1) - получи из базы данных пользователя c id 1
    //.then(user => user.name) - когда промис зарезолвится мы получим имя юзера (новый промис)
    //.then(name => console.log(name)) - когда промис зарезолвится мы получим имя юзера в консоли (новый промис)



//async await
//await используется вместо then
//let user = findUserInDB(1) в переменную попадет промис и результат нужно ловить зеном
//let user = await findUserInDB(1) в переменную попадет то чем зарезолвился промис

//async function run() {
    //let user = await findUserInDB(1)
    //console.log(user)
    //let friend = await findUserInDB(user.friend)
    //console.log(friend)
//}
//run()




//-----------------------------------------------------------------------------------------------------






