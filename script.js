var app = new Vue({
    el: '#app',
    data: {
        questions: {one: 0, two: 0, three: 0},
        status: null,
        answered: false
    },
    computed: {
        result: function () {
            return this.questions.one + this.questions.two + this.questions.three;
        }
    },
    methods: {
        randomizer: function (min, max) {
            return Math.floor( Math.random() * (max - min + 1) ) + min;
        },
        init: function () {
            this.status = null;
            this.answered = false;
            this.questions.one = this.randomizer(1,9);
            this.questions.two = this.randomizer(1,9);
            this.questions.three = this.randomizer(1,9);
        },
        fizzBuzz: function () {
            if (this.result === 0) return '0'; 
            if (this.result % 15 === 0) return 'FizzBuzz';
            if (this.result % 3 === 0) return 'Fizz';
            if (this.result % 5 === 0) return 'Buzz';
            return 'Anything';
        },
        judg: function (answer) {
            this.answered = true;
            this.status = (answer === this.fizzBuzz());
        }
    }
})
