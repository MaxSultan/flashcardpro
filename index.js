let state = {
    deck: [
        {front: 'JSON stands for', back: 'Java Script Object Notation' },
        {front: 'how do you insert JS into a webpage', back: 'the script tag:<script type="text/javascript">document.write("Hello World!");</script>'},
        {front: 'What is the difference between synchronous and asynchronous functions?', back:'Synchronous functions are blocking while asynchronous functions are not. In synchronous functions, statements complete before the next statement is run.' },
        {front: 'When would you use a closure?', back:'Closures are commonly used for data privacy /emulating private methods, and partial applications or currying.' },
        {front: "What's the difference between .call and .apply?", back: 'Both .call and .apply are used to invoke functions and the first parameter will be used as the value of this within the function.'},
        {front: 'What is the difference between mutable and immutable objects?', back: "A mutable object can be changed after it's created, while an immutable object cannot be changed."},
        {front: 'What is the event loop?', back:'The event loop is a single-threaded loop that monitors the call stack and checks if there is any work to be done in the task queue.' },
        {front: 'What is "variable hoisting"?', back: 'Hoisting describes how variables declared with the var keyword will have their declaration "moved" up to the top of the current scope.'},
        {front: 'What is a ternary expression?', back:'A ternary expression is a special type of conditional that accepts three operands: the test condition, the "then" expression and the "else" expression.' },
        {front: 'What is Ajax?', back: 'Ajax is a web technology that allows applications to send data to and retrieve from a server without interfering with the behavior of the current page. It stands for Asynchronous JavaScript and XML.'},
    ],
    cardNum: 0,
   display: null,
   clicked: false,
}

function right(){
    state.clicked = false;
    state.cardNum++; 
    render();
}

function left(){
    state.clicked = false;
    state.cardNum--;
    render();
}

function fillAppId(id, str){
    document.getElementById(id).innerHTML = str;
}

function flip(){
    state.clicked ? state.clicked = false : state.clicked = true;
    whichSide();
    render();
}

function whichSide(){
    const { clicked } = state;
    return !clicked ?  state.deck[state.cardNum].front :  state.deck[state.cardNum].back
}

function HtmlStringify(){
    const { deck, cardNum, clicked } = state
    return `
    <div id="card" onclick='flip()'>${whichSide()}</div>
    `
}

function render() {
    fillAppId('app', HtmlStringify())
};

render();
