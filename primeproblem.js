 
    var f=0;
  
    for(let i=0; i<=num-1; i++){
        if(num%i==0){
            f++;

        }
    }

    if(f==2){
        console.log("Yes");
        
        
    }else{
        console.log("No");
    }
}