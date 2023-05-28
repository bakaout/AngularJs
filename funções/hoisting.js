//funções do tipo expression e arrow só executam se forem chamadas depois. Ex:
/*const soma =  function(){
 return 1+1
}
console.log(soma())*/


//apenas funções do tipo declariation executam se forem chamadas antes Ex:
console.log(soma())
function soma(){
    return 1+1
   }