import React from "react";

function QuestionItem({ question, handleDelete, handleUpdate }) {
console.log("hello from item"+ question)
  const { id, prompt, answers, correctIndex } = question;
  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));
function qDelete(){
  console.log(question)
  fetch(`http://localhost:4000/questions/${id}`, {
    method:"DELETE",})
    .then(r=>r.json())
    .then(r=>handleDelete(question))
}
function questionUpdate(event){
  let newAnswerID= event.target.value
  handleUpdate(id, newAnswerID)
}

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select onChange={questionUpdate} defaultValue={correctIndex}>{options}</select>
      </label>
      <button onClick={qDelete}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
