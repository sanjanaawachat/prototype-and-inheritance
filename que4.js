//que4


//Write a JavaScript function to retrieve all the names 
//of object's own and inherited properties.


let student={
    name:'sanjana',
    roll_no:'191',
    branch:'Computer Engineering'
}

let res=Object.keys(student);
console.log(res);