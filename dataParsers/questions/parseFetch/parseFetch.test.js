/* eslint quotes: 0 */
/* eslint quote-props: 0 */
/* eslint comma-dangle: 0 */
import { expect } from 'chai';
import parseFetch from '.';

const json = {
  "response_code": 0,
  "results": [
    {
      "category": "Entertainment: Video Games",
      "type": "boolean",
      "difficulty": "hard",
      "question": "Unturned originally started as a Roblox game.",
      "correct_answer": "True",
      "incorrect_answers": [
        "False"
      ]
    },
  ]
};

describe('parseFetch', () => {
  describe('receives json from OpenTDB API', () => {
    const parsed = parseFetch(json);

    it('returns an array of questions', () => {
      expect(parsed).to.be.an.instanceof(Array);
    });

    describe('question', () => {
      const question = parsed[0];

      describe('category', () => {
        it('is as was received', () => {
          expect(question.category).to.eql(json.results[0].category);
        });
      });

      describe('difficulty', () => {
        it('is as was received', () => {
          expect(question.difficulty).to.eql(json.results[0].difficulty);
        });
      });

      describe('text', () => {
        it('is as was received', () => {
          expect(question.text).to.eql(json.results[0].question);
        });
      });

      describe('correctAnswer', () => {
        it('is as was received as a boolean', () => {
          expect(question.correctAnswer)
            .to
            .eql(JSON.parse(json.results[0].correct_answer.toLowerCase()));
        });
      });
    });
  });
});
