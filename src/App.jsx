import "./App.css";
import { useEffect, useMemo, useState } from "react";

import Timer from "./components/Timer";
import Trivia from "./components/Trivia";

function App() {

  const [timeOut, setTimeOut] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [earned, setEarned] = useState("$ 0");

  const data = [
    {
      id: 1,
      question: "Michael Jackson was known as ",
      answers: [
        {
          text: "king of pop",
          correct: true,
        },
        {
          text: "musician",
          correct: false,
        },
        {
          text: "white man",
          correct: false,
        },
        {
          text: "belly gin",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "When did the website `Facebook` launch?",
      answers: [
        {
          text: "2004",
          correct: true,
        },
        {
          text: "2005",
          correct: false,
        },
        {
          text: "2006",
          correct: false,
        },
        {
          text: "2007",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Who played the character of harry potter in movie?",
      answers: [
        {
          text: "Johnny Deep",
          correct: false,
        },
        {
          text: "Leonardo Di Caprio",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Daniel Red Cliff",
          correct: true,
        },
      ],
    },
    {
      id: 4,
      question: "Who the new owner of Instagram as for the year 2021",
      answers: [
        {
          text: "Mark .z",
          correct: true,
        },
        {
          text: "Bil Gate",
          correct: false,
        },
        {
          text: "jeffery ",
          correct: false,
        },
        {
          text: "Yakubu",
          correct: false,
        },
      ],
    },
    {
      id: 5,
      question: "what year did Nigeria get her Independent",
      answers: [
        {
          text: "1993",
          correct: false,
        },
        {
          text: "1998 ",
          correct: false,
        },
        {
          text: "1960",
          correct: true,
        },
        {
          text: "2007",
          correct: false,
        },
      ],
    },
    {
      id: 6,
      question: "How many colors are on the Nigeria flag?",
      answers: [
        {
          text: "3",
          correct: false,
        },
        {
          text: "2",
          correct: true,
        },
        {
          text: "all of the above",
          correct: false,
        },
        {
          text: "none of the above",
          correct: false,
        },
      ],
    },
    {
      id: 7,
      question: "a person who study quantum physics is call?",
      answers: [
        {
          text: "quantum mechanic",
          correct: true,
        },
        {
          text: "Doctor",
          correct: false,
        },
        {
          text: "Quantum physist",
          correct: false,
        },
        {
          text: "Physician",
          correct: false,
        },
      ],
    },
    {
      id: 8,
      question: "What year did Nigerians experiance pendemic",
      answers: [
        {
          text: "2019",
          correct: true,
        },
        {
          text: "2020",
          correct: false,
        },
        {
          text: "2021",
          correct: false,
        },
        {
          text: "2015",
          correct: false,
        },
      ],
    },
    {
      id: 9,

      question: "Rolex is a company that specializes in what type of product?",
      answers: [
        {
          text: "Phone",
          correct: false,
        },
        {
          text: "Watches",
          correct: true,
        },
        {
          text: "Food",
          correct: false,
        },
        {
          text: "Cosmetic",
          correct: false,
        },
      ],
    },
    {
      id: 10,
      question: "which of the following is Apple main product",
      answers: [
        {
          text: "Apple",
          correct: false,
        },
        {
          text: "iphone",
          correct: true,
        },
        {
          text: "tablet",
          correct: false,
        },
        {
          text: "amazon",
          correct: false,
        },
      ],
    },
    {
      id: 11,
      question: "Hp known product",
      answers: [
        {
          text: "phone",
          correct: false,
        },
        {
          text: "car",
          correct: false,
        },
        {
          text: "Computers",
          correct: true,
        },
        {
          text: "system",
          correct: false,
        },
      ],
    },
    {
      id: 12,
      question: "Hp stand for",
      answers: [
        {
          text: "hawlette packade",
          correct: true,
        },
        {
          text: "henry peter",
          correct: false,
        },
        {
          text: "hock puk",
          correct: false,
        },
        {
          text: "helsi peace",
          correct: false,
        },
      ],
    },
    {
      id: 13,
      question: "What is the name of the nearest star is called?",
      answers: [
        {
          text: "Alph",
          correct: true,
        },
        {
          text: "Beta",
          correct: false,
        },
        {
          text: "persus",
          correct: false,
        },
        {
          text: "cusmic",
          correct: false,
        },
      ],
    },
    {
      id: 13,
      question: "Who the richest man in Nigeria?",
      answers: [
        {
          text: "Dangote",
          correct: true,
        },
        {
          text: "Bil Gate",
          correct: false,
        },
        {
          text: "El rufai",
          correct: false,
        },
        {
          text: "Yakubu",
          correct: false,
        },
      ],
    },
  ];

  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: "$ 100" },
        { id: 2, amount: "$ 200" },
        { id: 3, amount: "$ 300" },
        { id: 4, amount: "$ 500" },
        { id: 5, amount: "$ 1,000" },
        { id: 6, amount: "$ 2,000" },
        { id: 7, amount: "$ 4,000" },
        { id: 8, amount: "$ 8,000" },
        { id: 9, amount: "$ 16,000" },
        { id: 10, amount: "$ 32,000" },
        { id: 11, amount: "$ 64,000" },
        { id: 12, amount: "$ 125,000" },
        { id: 13, amount: "$ 250,000" },
        { id: 14, amount: "$ 500,000" },
        { id: 15, amount: "$ 1,000,000" },
      ].reverse(),
    []
  );

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [questionNumber, moneyPyramid]);

  return (
    <div className="app">
      <>
        <div className="main">
          {timeOut ? (
            <h1 className="endText">You earned: {earned}</h1>
          ) : (
            <>
              <div className="top">
                <div className="timer">
                  <Timer
                    setTimeOut={setTimeOut}
                    questionNumber={questionNumber}
                  />
                </div>
              </div>
              <div className="bottom">
                <Trivia
                  data={data}
                  questionNumber={questionNumber}
                  setQuestionNumber={setQuestionNumber}
                  setTimeOut={setTimeOut}
                />
              </div>
            </>
          )}
        </div>
        <div className="pyramid">
          <ul className="moneyList">
            {moneyPyramid.map((m) => (
              <li
                className={
                  questionNumber === m.id
                    ? "moneyListItem active"
                    : "moneyListItem"
                }
              >
                <span className="moneyListItemNumber">{m.id}</span>
                <span className="moneyListItemAmount">{m.amount}</span>
              </li>
            ))}
          </ul>
        </div>
      </>
    </div>
  );
}

export default App;
