/**
 * Synchronus: Sequencial execute (step by step) , we would wait for the activity to get completed 
 * then only we will trigger the next activity
 * Asychronus: we are more concerned towards trigger the activity. 
 * 
 */
// async and await



function fun1(fun){
    setTimeout(()=>{
        console.log("Executing function 1")
        fun()
    },4000);
}

function fun2(fun){
    setTimeout(()=>{
        console.log("Executing function 2")
        if(fun!=undefined){
            fun()
        }
    },3000);
}

function fun3(fun){
    setTimeout(()=>{
        console.log("Executing function 3")
        fun();
    },2000);
}
//fun1---fun3---fun2
fun1(()=>{
    fun3(()=>{
        fun2()
    })
});
// callback hell