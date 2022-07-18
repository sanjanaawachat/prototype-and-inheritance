//que3

//Add a method to calculate sum of all elements in Array in array's protype, 
//use that method to calculate 
//sum for multiple arrays


let array_elements =[5,10,15,20];
let arr = {
    get_result:function(){
        let res = array_elements.reduce((acc,cur)=>acc = acc + cur,0);
        console.log(res);
    }
}
arr.get_result();