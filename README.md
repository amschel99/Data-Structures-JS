## A stack is LIFO data structure implemented using the Stack class as shown below


```
function Stack(array){
    this.array=[]
    if(array){
        this.array=array
    }
} ```

the above is a constructor function hence has to start with a capital letter

## Methods


Stack.prototype.getBuffer=()=>{
    return this.array.slice()
}


Stack.prototype.isEmpty=()=>{
    return this.array.length===0
}


Stack.prototype.peek = function(){
 return this.array[this.array.length-1];
}


Stack.prototype.push = function(value){
 this.array.push(value);
}
Stack.prototype.pop = function() {
 return this.array.pop();
 }


