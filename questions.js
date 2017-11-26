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

    axios.get('https://opentdb.com/api.php?amount=1&difficulty=medium&type=multiple')
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
    return '<h6>(Correct): ' + JSON.stringify(res.data.results[0].correct_answer) + '</h6>';
}

function outputWrongAnswer1(res) {
    return '<h6>(Wrong): ' + JSON.stringify(res.data.results[0].incorrect_answers[0]) + '</h6>';
}

function outputWrongAnswer2(res) {
    return '<h6>(Wrong): ' + JSON.stringify(res.data.results[0].incorrect_answers[1]) + '</h6>';
}

function outputWrongAnswer3(res) {
    return '<h6>(Wrong): ' + JSON.stringify(res.data.results[0].incorrect_answers[2]) + '</h6>';
}