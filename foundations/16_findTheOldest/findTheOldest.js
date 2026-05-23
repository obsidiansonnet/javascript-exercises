const findTheOldest = function (array) {
    let currentYear = new Date().getFullYear();

    function getAge(object) {
        let age = object.yearOfDeath === undefined ? currentYear - object.yearOfBirth : object.yearOfDeath - object.yearOfBirth;
        return age;
    }

    let oldestPersonObject = array.reduce(function (accumulator, person) {
        let ageAccumulator = getAge(accumulator);
        let agePerson = getAge(person);

        if (ageAccumulator > agePerson) {
            return accumulator;
        }

        else { return person };
    });  
    return oldestPersonObject;
};

// Do not edit below this line
module.exports = findTheOldest;
