//que1

//Create 2 objects - parent and child. Attach methods to parent and use those methods in 
//child object using parents prototype


let parent = {
    Name : "sanjana",
    Age : 25,
    City :"Nagpur",
    
}
let child = {
    Name : "saurabh",
    Address : "Nandanvan",
}
child._proto_=parent;
console.log(child._proto_.City);