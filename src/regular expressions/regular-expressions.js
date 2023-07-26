//проверка что в строке есть хотя бы один символ
const input = '      '
console.log(
    /\S/.test(input)
)

//удалить провелы в начале и конце строки
const input2 = '   I love you!   '
console.log(
    input2.replace(/^\s+|\s+$/g, '')
    //input2.trim()
)

//удалить пробелы внутри
const input3 = 'I   love    you!'
console.log(
    input3.replace(/\s+/g, ' ')
)

//проверка адреса на совпадение
const checkUrl = 'https://google.com'
console.log(
    /^http(s)?:\/\//g.test(checkUrl)
)