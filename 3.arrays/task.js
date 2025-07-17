function compareArrays(arr1, arr2) {
   return arr1.length === arr2.length && arr1.every((element, index) => element === arr2[index]);
}





function getUsersNamesInAgeRange(users, gender) {
    let newArray = users.filter (element => element.gender === gender);
    let newArrayGender = newArray.map (element => element.age);
    let result = newArrayGender.reduce((acc, item, index)=> {
        acc+=item;
        if(index === newArrayGender.length - 1){
            return acc / newArrayGender.length;
        }
            return acc;
    }, 0);
    return result;
}
  