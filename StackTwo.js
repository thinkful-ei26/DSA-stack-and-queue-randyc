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

    //console.log('PUSH');
     
    if(this.top === null){

      this.top = new _Node(data,null);
      return this.top;

    }

    const newNode = new _Node(data,this.top);
    this.top = newNode;
 
  }

  //pop with find option
  pop(find){

    //console.log('POP');

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
    console.log('This is current stack: ');

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
// console.log(Main());

// Palindrome checker

const palindromeStack = new Stack();

function is_palindrome(stack) {

  if(!stack || stack.length < 2){

    console.log('Cannot process -- must be a string of at least 2 characters...');
    return;

  }

  stack = stack.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
  
  let stackLength = 0;

  //put s into the stack
  for(let i = 0; i < stack.length; i++){

    palindromeStack.push(stack[i]);
    stackLength ++;

  }
   
  let startNodeNumber;
  let rightOffSet;
  let leftOffSet;
  
  //if the stack is odd adjust startNode 12(3)45
  if(stackLength % 2 !== 0) {

    startNodeNumber = Math.floor(stackLength/2);
    rightOffSet = 0;
    leftOffSet = 0;
 
  }

  //if the stack is even 1(2)34
  else{

    startNodeNumber = stackLength/2;
    rightOffSet = -1;
    leftOffSet = 0;

  }

  let leftValue;
  let rightValue;
  let count = 0;
  let offSet = 0;
   
  let currentNode = palindromeStack.top;
  
  //check to see if the next is null
  while (offSet < startNodeNumber){
  
    //find left value - set current node
    currentNode = palindromeStack.top;
    count = 0;//reset count
 
    while (count !== ((startNodeNumber - leftOffSet) -1)){

      currentNode = currentNode.next;
      count ++;

    }
  
    leftValue = currentNode.data;
    
 
    //find right value - set current node
    currentNode = palindromeStack.top;
    count = 0;//reset count
 
    //find left value
    while (count !== ((startNodeNumber + rightOffSet) + 1)){

      currentNode = currentNode.next;
      count ++;

    }

    rightValue = currentNode.data;
     
    //compare values
    if(leftValue !== rightValue) {

      console.log(stack + ' IS NOT A PALINDROME');
      return false;

    }
 
    offSet ++;
 
  }
 
  console.log(stack + ' IS A PALINDROME!');
  return true; 
 
}


// true, true, true
console.log(is_palindrome(''));
console.log(is_palindrome('x12s'));
console.log(is_palindrome('zabaz'));
console.log(is_palindrome('mmwe3'));
console.log(is_palindrome('baab'));
console.log(is_palindrome('1221'));
console.log(is_palindrome('A man, a plan, a canal: Panama'));
console.log(is_palindrome('1001'));
console.log(is_palindrome('Tauhida'));


// Matching parentheses checker...
 
const testStack = new Stack();

function matchingClosures(stack) {

  if(!stack || stack.length < 2){

    console.log('Cannot process -- must be a string of at least 2 characters...');
    return;

  }

  stack = stack.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
  
  let stackLength = 0;

  //put s into the stack
  for(let i = 0; i < stack.length; i++){

    palindromeStack.push(stack[i]);
    stackLength ++;

  }
   
  let startNodeNumber;
  let rightOffSet;
  let leftOffSet;
  
  //if the stack is odd adjust startNode 12(3)45
  if(stackLength % 2 !== 0) {

    startNodeNumber = Math.floor(stackLength/2);
    rightOffSet = 0;
    leftOffSet = 0;
 
  }

  //if the stack is even 1(2)34
  else{

    startNodeNumber = stackLength/2;
    rightOffSet = -1;
    leftOffSet = 0;

  }

  let leftValue;
  let rightValue;
  let count = 0;
  let offSet = 0;
   
  let currentNode = palindromeStack.top;
  
  //check to see if the next is null
  while (offSet < startNodeNumber){
  
    //find left value - set current node
    currentNode = palindromeStack.top;
    count = 0;//reset count
 
    while (count !== ((startNodeNumber - leftOffSet) -1)){

      currentNode = currentNode.next;
      count ++;

    }
  
    leftValue = currentNode.data;
    
 
    //find right value - set current node
    currentNode = palindromeStack.top;
    count = 0;//reset count
 
    //find left value
    while (count !== ((startNodeNumber + rightOffSet) + 1)){

      currentNode = currentNode.next;
      count ++;

    }

    rightValue = currentNode.data;

     
    //compare values
    if(leftValue !== rightValue) {

      console.log(stack + ' IS NOT A PALINDROME');
      return false;

    }
 
    offSet ++;
 
  }
 
  console.log(stack + ' IS A PALINDROME!');
  return true; 
 
}