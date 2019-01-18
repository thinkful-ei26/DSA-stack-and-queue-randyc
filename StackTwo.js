'use strict';


class _Node{

  constructor(data,next) {

    this.data;
    this.next;

  }
 
}


class Stack {

  constructor() {
 
    this.top = null;

  }

  push(data) {

    console.log('PUSH');
    console.log('data in ',data);
 
    if(this.top === null){

      this.top = new _Node(data,null);
      return this.top;

    }

    const newNode = new _Node(data,this.top);
    this.top = newNode;
 
  }

  


}

let peek = (storedData) => {

  console.log('Current top value is: ',storedData.top);

  return;

};

function Main() {

  console.log('START>>>>');

  const starTrek = new Stack();

  starTrek.push('Kirk');
  
  console.log(peek(starTrek));
   
}


console.log(Main());




