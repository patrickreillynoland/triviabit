var axios = require('axios');
function getQuestions() {
    var question = document.getElementById('Question1');
    question.innerHTML = "";
    axios.get('https://opentdb.com/api.php?amount=1&category=9&difficulty=hard&type=multiple')
        .then(function(res) {
            question.innerHTML = outputQuestion(res);
        })
        .catch(function(err) {
            question.innerHTML = '<h4>Sorry, try again</h4>';
            console.log(err);
        })
}

function outputQuestion(res) {
    return '<h4>Question: ' + JSON.stringify(res.data.results[0].question) + '</h4>' +
    '<h5>Answers: ' + '(Correct): ' + JSON.stringify(res.data.results[0].correct_answer) + ' (Wrong): ' + JSON.stringify(res.data.results[0].incorrect_answers) + '</h5>';
}