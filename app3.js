let todo = [] ;
let request = prompt ("What is your Request") ;

while (true) {
    if ( request=="Quit" ){
        console.log("You Quit");
        break;
    }else if ( request=="Add" ){
        let add = prompt ("What task do you want to add") ;
        todo.push(add) ;
        console.log("Task Added Successfully") ;
    }else if ( request == "List" ){
        console.log("----------");
        for (let i=0; i<todo.length; i++){
            console.log(i,todo[i]) ;
        }
        console.log("----------");
    }else if ( request == "Remove" ){
        let del = prompt ("Which Task Do you want to remove") ; 
        todo.splice(del,1) ;
        console.log("Task Deleted Successfully");
    }else {
        console.log("Wrong Request") ;
    }
    request = prompt ("What is your Request") ;
}