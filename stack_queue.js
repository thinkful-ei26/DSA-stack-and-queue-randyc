'use strict';

//Node class
class _Node {

  constructor(data,next){

    this.data;
    this.next;
 
  }

}

//Stack class
class Stack {

  constructor(){
    this.top = null;
  }

  push(data){

    //If the top is null then this makes the new item the top of the stack (the start of a new line)
    if(this.top === null){
      this.top = new _Node(data, null);//points nowhere because it is the only thing in the stack
      return this.top;
    }

    //otherwise put the item on the top of the stack 
    const node = new _Node(data,this.top);// a new node is created that points to the current top as the next node
    return this.top = node;//put the newly created node as the new top

  }

  pop(){
  
    let topNodeHolder = this.top;//capture the current top node
    this.top = topNodeHolder.next;//put the NEXT part of the current top into the current top slot
    return topNodeHolder.data;// send the data from the old top on its way
 
  }



}

//