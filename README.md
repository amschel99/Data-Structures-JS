## A Stack is LIFO data structure implemented using the Stack class as shown below.

#### LIFO means LAST IN FIRST OUT. 

The last element to be pushed to the stack is the first on to be popped/removed or accessed.




 ``` 
 function Stack(array){
    this.array=[]
    if(array){
        this.array=array
    }
} 
``` 

the above is a constructor function which can be called to create a Stack.

##  Stack Methods


``` 
Stack.prototype.getBuffer=()=>{
    return this.array.slice()
} 
```
The method above is used to read everything in the Stack.


```
Stack.prototype.isEmpty=()=>{
    return this.array.length===0
}
```
The method above returns true if the stack is empty and false if otherwise.


```Stack.prototype.peek = function(){
 return this.array[this.array.length-1];
}
```
The method above is used to read the last item in without removing it.


```Stack.prototype.push = function(value){
 this.array.push(value);
}
````
The method above is used to push an item in to the stack.

```Stack.prototype.pop = function() {
 return this.array.pop();
 }
 ```
 
 The method above removes the last added item from the stack.


