const quizData = [

    
    {
        question: "Which one is true?",
        a: "HTML is a markup language",
        b: "CSS is a programming language",
        c: "You cannot use HTML without a separate CSS file",
        d: "You need to be good at math to ace programming",
        correct: "a",
    },
    {
        question: "Which of the following statements is false?",
        a: "Javascript is a programming language",
        b: "Javascript is the same as Java",
        c: "Javascript has different frameworks",
        d: "Javascript is responsible for running a web browser",
        correct: "b",
    },
    {
        question: "Which of the following is not a programming language?",
        a: "Javascript",
        b: "CSS",
        c: "PHP",
        d: "Python",
        correct: "b",
    },
    {
        question: "Which of the following is not a role of a software developer?",
        a: "Creating web pages and software applications",
        b: "Testing existing software and applications",
        c: "Redesigning existing software",
        d: "Maintain the company’s computer systems",
        correct: "d",
    },
    {
    question: "Which of the following is a Javascript framework?",
        a: "Flask",
        b: "Node",
        c: "Django",
        d: "Laravel",
        correct: "b",
    },


]

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}


submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }

       currentQuiz++

       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>

           <button onclick="location.reload()">Reload</button>
           `
       }
    }
})
