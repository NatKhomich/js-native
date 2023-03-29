
export type UsersType = {
    [key: string] : {id: number, name: string}
}

export let users: UsersType = {
    '1': {id: 1, name: 'Alex'},
    '10111': {id: 10111, name: 'Natalia'},
    '101222': {id: 101222, name: 'Katya'}
}

beforeEach( () => {
    users = {
        '1': {id: 1, name: 'Alex'},
        '10111': {id: 10111, name: 'Natalia'},
        '101222': {id: 101222, name: 'Katya'}
    }
})

test('should update corresponding user', ()=> {
    users['1'].name = 'Alexander'
    expect(users['1'].name).toBe('Alexander')

})

test('should delete corresponding user', ()=> {
    delete users['1']
    expect(users['1']).toBeUndefined()
})