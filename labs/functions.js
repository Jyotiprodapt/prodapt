//declare the functions
// function fn(){
//     console.log("this is a fnctn")
// }

// call the fn
//fn()

function fn(){
    return "this is fn";
}
console.log(fn());

//passing params to fn
function sum(a,b){
var total=a+b;
return total;
}
//caling fn withpout paranthesis ,will rteurn itself.
//if no of param is less than the actual one then it will return NAN as 10+undefined.

//arguments array(builtin arguments)inside the function
function getCartTotal(){
    //console.log(arguments)
    var total=0;
    for(price of arguments){
        total += price;

    }
    return total;

}

//hoisting
welcome()

function welcome(){
    console.log("wlcm fntcn");
}

//declare fn i literal way
// var greet=function(){
//     console.log("greet fn");
// }
// greet()


//anonymous fn
(function(name){
    console.log("self invoking fn")
})("chinki")

function welcome(){
    return "welcome";
    //whatevr v write after return it wont work
    console.log("jhshd");
}