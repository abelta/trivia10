const parseFetch = json => (
  json.results.map(question => ({
    category: question.category,
    difficulty: question.difficulty,
    text: question.question,
    correctAnswer: JSON.parse(question.correct_answer.toLowerCase()),
  }))
);

export default parseFetch;
