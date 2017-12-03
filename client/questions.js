function getQuestions() {
    var question = document.getElementById('Question1');
    var answertext1 = document.getElementById('Answer1');
    var answertext2 = document.getElementById('Answer2');
    var answertext3 = document.getElementById('Answer3');
    var answertext4 = document.getElementById('Answer4');

    question.innerHTML = "";
    answertext1.innerHTML = "";
    answertext2.innerHTML = "";
    answertext3.innerHTML = "";
    answertext4.innerHTML = "";

    axios.get('https://opentdb.com/api.php?amount=1&type=multiple')
        .then(function(res) {
            var answerGroup = [];
            let correctA = getCorrectAnswer(res);
            let wrong1 = getWrongAnswer1(res);
            let wrong2 = getWrongAnswer2(res);
            let wrong3 = getWrongAnswer3(res);
            answerGroup.push(correctA, wrong1, wrong2, wrong3);
            answerGroup = shuffle(answerGroup);

            question.innerHTML = outputQuestion(res);
            answertext1.innerHTML = answerGroup[0].replace(/\"/g, "");
            answertext2.innerHTML = answerGroup[1].replace(/\"/g, "");
            answertext3.innerHTML = answerGroup[2].replace(/\"/g, "");
            answertext4.innerHTML = answerGroup[3].replace(/\"/g, "");
        })
        .catch(function(err) {
            question.innerHTML = '<h4>Sorry, try again</h4>';
            console.log(err);
        })
}
// GETs
function getQuestion(res) {
    return JSON.stringify(res.data.results[0].question[0]);
}

function getCorrectAnswer(res) {
    return ' <div class="answer" id="correctAnswer">' + JSON.stringify(res.data.results[0].correct_answer) + '</div>';;
}

function getWrongAnswer1(res) {
    return ' '+ JSON.stringify(res.data.results[0].incorrect_answers[0]);
}

function getWrongAnswer2(res) {
    return ' ' + JSON.stringify(res.data.results[0].incorrect_answers[1])
}

function getWrongAnswer3(res) {
    return ' '+ JSON.stringify(res.data.results[0].incorrect_answers[2]);
}

// Outputs
function outputQuestion(res) {
    return '<h4>' + JSON.stringify(res.data.results[0].question) + '</h4>';
}

function showAnswer() {
    var rightAnswer = document.getElementById('correctAnswer');
    rightAnswer.className += " correct";
    console.log(getQuestion(), getCorrectAnswer(), getWrongAnswer1(), getWrongAnswer2(), getWrongAnswer3());
}

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

