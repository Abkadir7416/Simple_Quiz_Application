let questions = [
    {
        'que': 'Which of the following is a markup language?',
        'a': 'HTML',
        'b': 'CSS',
        'c': 'JavaScript',
        'd': 'PHP',
        'correct': 'a',
        'ans': null
    },

    {
        'que': 'When the javascript is originate?',
        'a': '1990',
        'b': '1998',
        'c': '1995',
        'd': '1999',
        'correct': 'c',
        'ans': null
    },

    {
        'que': 'What does CSS stands for?',
        'a': 'cascading styling sheet',
        'b': 'computer service store',
        'c': 'cascade style sheet',
        'd': 'cascading style sheet',
        'correct': 'd',
        'ans': null
    },

    {
        'que': 'Javascript is an _______ language?',
        'a': 'Object-Oriented',
        'b': 'Object-Based',
        'c': 'Procedural',
        'd': 'None of the above',
        'correct': 'a',
        'ans': null
    },

    {
        'que': 'Which of the following keywords is used to define a variable in Javascript?',
        'a': 'Var',
        'b': 'Let',
        'c': 'Both a and b',
        'd': 'None of the above',
        'correct': 'c',
        'ans': null
    },
]


// -------------------------------------------

// ---------------------  Timer  -----------------

// }

var timer;
var ele = document.getElementById('timer');

function timerrr (){
  var sec = 10;
  timer = setInterval(()=>{
    ele.innerHTML = 'TIME: '+sec;
    sec --;
    if(sec<0) {submitQuiz();sec=10}
  }, 1000) // each 1 second
};
timerrr();

// ------------------------------------------------

var index=0;
let ques = document.querySelector('#quesBox');

// console.log(levelInput)
const loadQuestion = () => {
    // console.log('loading question')
    const data = questions[index];
    let options = document.querySelectorAll('label');
    quesBox.innerText = `${index + 1}) ${data.que}`;
    options[0].innerText = data.a
    options[1].innerText = data.b
    options[2].innerText = data.c
    options[3].innerText = data.d
}



//----------------------------------------------\\

// console.log(optionInput[0]);

const submitQuiz = (e) => {
    clearInterval(timer);
    timerrr();
    let options = document.querySelectorAll('input');
    let data = questions[index]
    options.forEach((input, index) => {
        if (input.checked) {
            switch (index) {
                case 0:
                    data.ans = 'a';
                    break;
                case 1:
                    data.ans = 'b';
                    break;
                case 2:
                    data.ans = 'c';
                    break;
                case 3:
                    data.ans = 'd';
                    break;
                default:
                    break;
            }
        }
    })
    console.log(questions)
    index++;
    if (index >= questions.length) {
        evaluate();
    } else {
        loadQuestion();
        options.forEach(input => input.checked = null)
    }


}

const evaluate = ()=>{
    let score = 0;
    questions.forEach(que=>{
        if(que.ans==que.correct){
            score++;
        }
    })

    if(score==5){
        document.querySelector('#box').innerHTML = `
        <h2 style="text-align:center"0>Quiz Submitted</h2>
        <p style="text-align:center"0><b>Score: <span style="color:white">${score}</span></b>/${questions.length} ("Excellent!")</p>
        <div style="display:flex;justify-content:center; margin-top:10px"><button style="padding:5px 8px 5px 8px; background:rgb(1, 1, 54);color:white;border:1px solid black; " onclick="window.location.reload()">Restart</button></div>
        `
    }
    else if(score==4){
        document.querySelector('#box').innerHTML = `
        <h2 style="text-align:center"0>Quiz Submitted</h2>
        <p style="text-align:center"0><b>Score: <span style="color:white">${score}</span></b>/${questions.length} ("Great Job!")</p>
        <div style="display:flex;justify-content:center; margin-top:10px"><button style="padding:5px 8px 5px 8px; background:rgb(1, 1, 54);color:white;border:1px solid black; " onclick="window.location.reload()">Restart</button></div>
        `
    }
    else if(score==3){
        document.querySelector('#box').innerHTML = `
        <h2 style="text-align:center"0>Quiz Submitted</h2>
        <p style="text-align:center"0><b>Score: <span style="color:white">${score}</span></b>/${questions.length} ("Good!")</p>
        <div style="display:flex;justify-content:center; margin-top:10px"><button style="padding:5px 8px 5px 8px; background:rgb(1, 1, 54);color:white;border:1px solid black; " onclick="window.location.reload()">Restart</button></div>
        `
    }
    else{
        document.querySelector('#box').innerHTML = `
        <h2 style="text-align:center"0>Quiz Submitted</h2>
        <p style="text-align:center"0><b>Score: <span style="color:white">${score}</span></b>/${questions.length} ("Need Improvement")</p>
        <div style="display:flex;justify-content:center; margin-top:10px"><button style="padding:5px 8px 5px 8px; background:rgb(1, 1, 54);color:white;border:1px solid black; " onclick="window.location.reload()">Restart</button></div>
        `
    }


}

document.querySelector('input').addEventListener('change', (e) => {
    e.preventDefault()
    console.log('checking')
})

loadQuestion();