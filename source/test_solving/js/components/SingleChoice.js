class SingleChoice {
   constructor() {
      this.choices = null;
      this.choiceLetters = ['a','b','c','d','e','f'];
      this.questionId = null;
      this.number = null;
      this.answer = null;
      this.solving_id = null;
   }
   getChoice(questionNumber = 0) {
      this.choices = questionsClass.questions[questionNumber].choices;
      // this.choices.forEach((choice) => choice.isChecked = false)
      this.number = questionNumber
      this.questionId = questionsClass.questions[questionNumber].id;
      if (answers.answers[questionNumber] != undefined){
         this.solving_id = answers.answers[questionNumber].solving_id;
         this.answer = answers.answers[questionNumber].answer;
      }
      else this.answer = ''
      
      this.renderChoiceBlock()
   }
   renderChoiceBlock() {
      let html = '';
      this.choices.forEach((choice, index) => {
         let isChecked = choice.isChecked ? 'checked' : '';
         html += `
            <div class="choice" id="choice-${choice.id}">
               <span>
                  <input type="checkbox" class="question-checkbox" data-row=${choice.id}  ${isChecked} >
               </span>
               <span>${this.choiceLetters[index]}) </span>
               <div class="question">
                  ${choice.value}
               </div>
            </div>
      `
      })
      // Creates choice side tag
      const answer_side = document.querySelector('.answer-side');
      answer_side.innerHTML = `<div class="choice-side"></div>`

      document.querySelector('.choice-side').innerHTML = html;

      // To  answer the question ,[checkboxes]
      const checkBoxes = document.querySelectorAll(".question-checkbox");
      for (let z = 0; z < checkBoxes.length; z++) {
         checkBoxes[z].addEventListener('click', (e) => {

            let choiceId = e.target.dataset.row;
            this.choices.forEach((choice, index) => {
               this.choices[index].isChecked = false
            });
            this.choices[z].isChecked = e.target.checked;

            let total = 0;
            this.choices.forEach((choice, index) => {
               if (this.choices[index].isChecked === false){
                  total++
               }
            });
            console.log(total)
            if(total === this.choices.length){
               choiceId = null
            }
            
            answers.getAnswer({
               id: this.questionId,
               answer: choiceId,
               solving_id : this.solving_id,
               type : 'single-choice' 
            }, this.number)

            // let n = 0
            // this.choices.forEach((choice) => {
            //    if (!choice.isChecked) {
            //       n += 1
            //    }
            // })
            // if(n == this.choices.length){
            //    answers.getAnswer(null,this.number)
            // }
            this.renderChoiceBlock()
            console.log(answers.answers)
         })
      }
   }

}
const singleChoice = new SingleChoice();
