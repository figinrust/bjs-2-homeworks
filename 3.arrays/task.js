function compareArrays(arr1, arr2) {
    if (arr1.length === arr2.length) {
        return arr1.every((elem, index) => elem === arr2[index]);
    }

    return false;
}

function getUsersNamesInAgeRange(users, gender) {
    if (users.length > 0 && gender == 'мужской' || gender == 'женский') {
        let arrGenders = users.filter((user) => user.gender === gender).map((user) => user.age)
        let result = arrGenders.reduce((acc, curr) => {
            return acc += curr;
        });
        return result / arrGenders.length;
    }

    return 0;
}