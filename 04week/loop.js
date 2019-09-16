//Do...While Loop

/*var counter = 0

do {
    console.log(counter)
    counter+=1
} while (counter<=1000)
*/

/*
var person = {
    firstName: 'Jane', 
    lastName: 'Doe', 
    birthDate: 'Jan 5, 1925', 
    gender: 'female'
}

function isOdd(year) {
    return year % 2 !==0
}

for (var prop in person) {
    let regEx = (/\d{4}/g)
        isOdd()
    let date = Number(person[prop].match(regEx))
    if (prop === "birthDate" && isOdd(date)) {
        console.log(date)
    } else if (prop === "birthDate" && !isOdd(date))
        console.log('date is even')
}
*/

arrayOfPersons = [
    { 
        firstName: 'Jane',
        lastName: 'Doe',
        birthDate: 'Jan 5, 1925',
        gender: 'female'
    },
    {
        firstName: 'Janel',
        lastName: 'Doe',
        birthDate: 'Jan 10, 1955',
        gender: 'female'
    },
    {
        firstName: 'Mike',
        lastName: 'Smith',
        birthDate: 'Dec 25, 1995',
        gender: 'male'
    },
    {
        firstName: 'Bob',
        lastName: 'Evans',
        birthDate: 'Jun 8, 1945',
        gender: 'male'
    }
    
]

/*function getInfo(item) {
    var allInfo = [item.firstName, item.lastName, item.birthDate, item.gender]. join(' ')
    return allInfo
}

console.log(arrayOfPersons.map(getInfo))
*/

/*function getGender(item) {
    let regEx = /^male$/g
    var male = item.gender.match(regEx)
    return male
}

console.log(arrayOfPersons.filter(getGender))
*/

function getBirth(item){
    let regEx = /\d\d\d\d/
    let number = parseInt(item.birthDate.match(regEx))
    if (number < 1990){
    return number}
}

console.log(arrayOfPersons.filter(getBirth))