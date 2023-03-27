import exp from 'constants';

export const usersObj = {
    '0': 'Alex',
    '1': 'Natalia',
    '2': 'Katya'
}



//работа с ассоциативным массивом
/*let user = {id: 100500, name: 'Igor'}//доб нового user
users[user.id] = user// поиск user
delete users[user.id]//удаление
users[user.id].name = 'Victor'*/ //перезаписывание имени

export const usersArray = [
    {id: 1, name: 'Alex'},
    {id: 10111, name: 'Natalia'},
    {id: 101222, name: 'Katya'}
]
//usersArray.find( u => u.id === 1)
//let usersCopy = [...usersArray, user]