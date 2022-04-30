let name = 'Скиллбокс'
let surname = 'днИЩе'

let firstLetterName = name.substr(0, 1);
let firstLetterSurname = surname.substr(0, 1);

let otherLetterName = name.substr(1);
let otherLetterSurname = surname.substr(1);

let bigLetterName = firstLetterName.toUpperCase();
let bigLetterSurname = firstLetterSurname.toUpperCase();

let smallLetterName = otherLetterName.toLowerCase();
let smallLetterSurname = otherLetterSurname.toLowerCase();

let completeName = bigLetterName + smallLetterName;
let completeSurname = bigLetterSurname + smallLetterSurname;
console.log(completeName, completeSurname);

name === completeName ? console.log('Имя осталось без изменений') : console.log('Имя было измненено');
surname === completeSurname ? console.log('Фамилия осталась без изменений') : console.log('Фамилия была изменена');