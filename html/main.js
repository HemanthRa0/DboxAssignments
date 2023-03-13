function onChange(){
    var email = event.target.value
    console.log(email)
}

function validate(){
    //console.log(username.value)
    if(username.value.endsWith('@darwinbox.in'))
        console.log(username.value+" is valid")
    else
        console.log(username.value+" is invalid")
}
var emp = [
    {
        id: 1001,
        name:"shinchan",
        age:12,
        level:3,
        desgn:"HR",
        salary:"$10",
    },
    {
        id: 1002,
        name:"doremon",
        age:121,
        level:3,
        desgn:"Product Manager",
        salary:"$10",
    },
    {
        id: 1003,
        name:"Hatori",
        age:24,
        level:2,
        desgn:"sde 2",
        salary:"$10",
    },
    {
        id: 1004,
        name:"Anabella",
        age:11,
        level:1,
        desgn:"SDE 4",
        salary:"$10",
    },
    {
        id: 1005,
        name:"Hemanth",
        age:22,
        level:1,
        desgn:"SDE Intern",
        salary:"Rs.25000\-",
    },
    {
        id: 1006,
        name:"Rocket",
        age:35,
        level:3,
        desgn:"product manager",
        salary:"$25000",
    },


]

function addemp(newemp){
    emp = [...emp,newemp]
    console.log("employee added");
    console.log(emp)
}

function removemp(id){
    var ind = emp.findIndex(x => x.id == id);
    if(ind > -1){
        emp.splice(ind, 1);
    }
    console.log("employee removed");
    console.log(emp)
}

function updatemp(id, data){
    var e = emp.filter((obj) => obj.id == id);
    var ind = emp.findIndex(x => x.id == id);
    if(e.length == 0){
        return console.log("Employee not found!")
    }
    var e = {...e[0],...data}
    emp.splice(ind, 1, e);
    console.log(emp)
}

function filteremp(){
    var res = emp.filter((obj) => obj.level>=3) 
    console.log(res)
}//filteremp();

//addemp({
//        id: 1006,
//        name:"Rocket",
//        age:35,
//        level:3,
//        desgn:"product manager",
//        salary:"$25000",
//    }) //Give employee id

//updatemp(1001, {age:11,level:2})

//removemp(1005)


