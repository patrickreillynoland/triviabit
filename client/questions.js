function getQuestions() {
    var question = document.getElementById('Question1');
    var answer1 = document.getElementById('Answer1');
    var answer2 = document.getElementById('Answer2');
    var answer3 = document.getElementById('Answer3');
    var answer4 = document.getElementById('Answer4');

    question.innerHTML = "";
    answer1.innerHTML = "";
    answer2.innerHTML = "";
    answer3.innerHTML = "";
    answer4.innerHTML = "";

    axios.get('https://opentdb.com/api.php?amount=1&type=multiple')
        .then(function(res) {
            question.innerHTML = outputQuestion(res);
            answer1.innerHTML = outputCorrectAnswer(res);
            answer2.innerHTML = outputWrongAnswer1(res);
            answer3.innerHTML = outputWrongAnswer2(res);
            answer4.innerHTML = outputWrongAnswer3(res);
        })
        .catch(function(err) {
            question.innerHTML = '<h4>Sorry, try again</h4>';
            console.log(err);
        })
}

function outputQuestion(res) {
    return '<h4>' + JSON.stringify(res.data.results[0].question) + '</h4>';
}

function outputCorrectAnswer(res) {
    return ' <div class="answer" id="correctAnswer">' + JSON.stringify(res.data.results[0].correct_answer).replace(/\"/g, "") + '</div>';
}

function outputWrongAnswer1(res) {
    return ' ' + JSON.stringify(res.data.results[0].incorrect_answers[0]).replace(/\"/g, "");
}

function outputWrongAnswer2(res) {
    return ' ' + JSON.stringify(res.data.results[0].incorrect_answers[1]).replace(/\"/g, "");
}

function outputWrongAnswer3(res) {
    return ' ' + JSON.stringify(res.data.results[0].incorrect_answers[2]).replace(/\"/g, "");
}

function showAnswer() {
    var rightAnswer = document.getElementById('correctAnswer');
    rightAnswer.className += " correct";
}