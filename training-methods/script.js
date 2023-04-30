const survey = {
    question: 'What programming language would you like to learn?',
    options: ['0: JavaScript', '1: Python', '2: Ruby', '3: Java', '4: C#'],
    answers: new Array(5).fill(0),

    logNewAnswer() {
        const input = parseInt(prompt(`${this.question}\n${this.options.join('\n')}\n(Enter option number)`));
        if(typeof input === 'number' && input >= 0 && input < this.answers.length){
            this.answers[input]++;
        }else{
            alert('Incorrect option!');
        }

        this.printResults('array');

        let stringResult = '';
        for(const item of this.answers){
            let stringNumber = item+' ';
            stringResult += stringNumber;
        }
        this.printResults(stringResult);

        this.printResults('string');
    },

    printResults(type = 'array') {
        if (type === 'array') {
            console.log(this.answers);
        } else if (type === 'string') {
            console.log(`Survey results: ${this.answers.join(', ')}.`);
        }
    },
};

document.querySelector('#take-survey').addEventListener('click', survey.logNewAnswer.bind(survey));

survey.printResults.call({answers: [7, 1, 4]}, 'string');
