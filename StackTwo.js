'use strict';


class _Node{

  constructor(data,next) {

    this.data = data;
    this.next = next;

  }
 
}


class Stack {

  constructor() {
 
    this.top = null;

  }

  push(data) {

    console.log('PUSH');
     
    if(this.top === null){

      this.top = new _Node(data,null);
      return this.top;

    }

    const newNode = new _Node(data,this.top);
    this.top = newNode;
 
  }

  //pop with find option
  pop(find){

    console.log('POP');

    //do not use the find option
    if(!find){

      const topValue = this.top.data;
      this.top = this.top.next;
      return topValue;
 
    }

    //use the find option
    let currentNode = this.top;
    let prevNode = currentNode.next;

    while(find !== currentNode.data){

      prevNode = currentNode;
      currentNode = currentNode.next;
 
    }


    prevNode.next = currentNode.next;
    return currentNode;
    
 
  }

  peek() {

    return this.top;

  } 

  display() {

    console.log('----------------------------------');
    console.log('This is the contents of the list: ');

    let currentNode = this.top;

    while(currentNode !== null){
 
      console.log(currentNode);

      currentNode = currentNode.next;

    }

    console.log('----------------------------------');
 
    return;

  }


}

let outsidePeek = (storedData) => {

  console.log('Current top value is: ',storedData.top.data);

  return;

};

function Main() {

  console.log('START>>>>');

  const starTrek = new Stack();

  starTrek.push('Kirk');
  starTrek.push('Spock');
  starTrek.push('McCoy');
  starTrek.push('Scotty');
  console.log('this is the top node: ',starTrek.peek());

  starTrek.display();


  // starTrek.pop();
  // console.log('this is the top: ',starTrek.peek());

  starTrek.pop('McCoy');
   
  starTrek.display();
   
}

//
console.log(Main());




