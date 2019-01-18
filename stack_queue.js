'use strict';

//Node class for stack
// class _Node {

//   constructor(data,next){

//     this.data;
//     this.next;
 
//   }

// }

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



//Node class for Queue -- double link list node
class _Node {

  constructor(value) {
    
    this.value = value;
    this.next = null;
    this.prev = null;

  }

}


//Queue class
class Queue {

  constructor() {

    this.first = null;
    this.last = null;

  }

  enqueue(data){

    //prepare a new node with the incoming data
    const newNode = new _Node(data);

    //if the first item in line is null then this new node becomes the first in line
    if(this.first === null){

      this.first = newNode;

    }

    //if there is somethign in the last node then...
    if(this.last) {

      newNode.next = this.last;//assign the 'LAST' from the current end node to the new node 'NEXT'
      this.last.prev = newNode;//assign the current last node's 'PREV' to point to the new node
       
    }

    this.last = newNode;//assign the 'LAST' as the new node..
     
  }

  dequeue(){

    //if nothing is there then in the first place then there is no more list...
    if(this.first === null){
      new Error('Nothing left to get');
      return Error;
    }
 
    const getNode = this.first;//get the node from the first in line
    this.first = getNode.prev;//assign the new first in line to point to the 'PREV' of the old first in line

    //if the new node is equal to the last then assign the list's last to null
    if(getNode === this.last) {

      this.last = null;
 
    }

    return getNode.value;//send back the data held in the node that was first in line...
      
  }

 
}


