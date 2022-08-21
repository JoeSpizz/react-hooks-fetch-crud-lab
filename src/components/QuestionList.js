import React, {useState, useEffect} from "react";
import QuestionItem from "./QuestionItem";

function QuestionList() {
  const [questions, setQuestion] = useState([])
  useEffect(()=>{
    fetch("http://localhost:4000/questions")
    .then(r=>r.json())
    .then(r=> {
      setQuestion(r)
    })
    
  }, [])
  function handleDeleteItem(question) {
  console.log("ready to delete")
  const updatedQuestions = questions.filter((item) => item.id !== question.id);
  setQuestion(updatedQuestions);
  }
 
  function handleUpdate(id, newAnswerID){
  //  fetch(`http://localhost:4000/questions/${id}`,{
  //     method: "PATCH",
  //     headers: "Content-type: Application/json",
  //     body: JSON.stringify({
  //       "correctIndex": newAnswerID
  //     })
  //   })
  //   .then(r=>r.json())
  //   .then(r=> console.log("hello"))
  // }
  fetch(`http://localhost:4000/questions/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify({
        'correctIndex': newAnswerID
      })})
      .then(resp => resp.json())
      .then(console.log)

      setQuestion(questions)
  }

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
      {questions.map(q => <QuestionItem handleUpdate={handleUpdate} handleDelete={handleDeleteItem} key={q.id} question={q}/>)}
        </ul>
    </section>
  );
}

export default QuestionList;
