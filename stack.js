// A stack is LIFO data structure
function Stack(array){
    this.array=[]
    if(array){
        this.array=array
    }
}
//the above is a constructor function hence has to start with a capital letter


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


const stack1= new Stack("hey")

console.log(stack1)
