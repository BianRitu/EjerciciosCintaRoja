let miVariable = "Convierteme";
for(i=0;i<=miVariable.length;i++){
    if(i%2 == 0){
        console.log(miVariable[i].toUpperCase());
        }else{
            console.log(miVariable[i].toLocaleLowerCase());
        }
}
