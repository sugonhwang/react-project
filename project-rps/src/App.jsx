import { useState } from "react";
import "./App.css";
import Box from "./component/Box";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandBackFist, faHandPaper, faHandPeace } from "@fortawesome/free-regular-svg-icons";
import { faQuestion, faRotateRight } from "@fortawesome/free-solid-svg-icons";

// 1. 박스 2개(타이틀(유저/컴퓨터), 사진, 결과(승/패/무승부))
// 2. 초기 이미지
// 3. 가위바위보 버튼
// 4. 버튼을 클릭하면 클릭한 값이 박스에 보임
// 5. 컴퓨터는 랜덤하게 아이템 선틱애 됨
// 6. 3,4번의 결과를 가지고 누가 이겼는지 승패를 따짐
// 7. 결과에 따라 테두리 색 바뀜(이김: 초록 / 패: 빨강 / 무승부: 검정)
// 8. 반응형 디자인 구현

// 가위바위보 객체
const choice = {
  rock: {
    name: "Rock",
    img: <FontAwesomeIcon icon={faHandBackFist} />,
  },
  scissors: {
    name: "Scissors",
    img: <FontAwesomeIcon icon={faHandPeace} />,
  },
  paper: {
    name: "Paper",
    img: <FontAwesomeIcon icon={faHandPaper} />,
  },
};

// 초기 이미지 설정
const initImg = {
  name: "Question",
  img: <FontAwesomeIcon icon={faQuestion} />,
};

function App() {
  const [userSelect, setUserSelect] = useState(initImg); // user 초기 이미지
  const [computerSelect, setComputerSelect] = useState(initImg); // 컴퓨터 초기 이미지
  const [result, setResult] = useState("");

  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);

    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);

    setResult(judgeMent(choice[userChoice], computerChoice));
  };

  // 유저 승/패/무
  const judgeMent = (user, computer) => {
    console.log("user", user, "computer", computer);
    if (user.name === computer.name) {
      return "tie";
    } else if (user.name === "Rock") return computer.name === "Scissors" ? "win" : "lose";
    else if (user.name === "Scissors") return computer.name === "Paper" ? "win" : "lose";
    else if (user.name === "Paper") return computer.name === "Rock" ? "win" : "lose";
  };

  // 컴퓨터 가위/바위/보 랜덤 초이스
  const randomChoice = () => {
    let itemArray = Object.keys(choice); // itemArray[0] = "rock", itemArray[1] = "scissors", itemArray[2] = "paper"
    let randomItem = Math.floor(Math.random() * itemArray.length); // Math.random 메서드는 0이상 1미만의 소수점만 반환하므로 소수점 제거 + itemArray의 인덱스에 접근하기 위해 itemArray.length를 곱함
    let final = itemArray[randomItem]; // itemArray[0], itemArray[1], itemArray[2]에 있는 값(rock, scissors, paper)를 final에 랜덤하게 할당
    return choice[final];
  };

  // 게임 초기화
  const handleRest = () => {
    setUserSelect(initImg);
    setComputerSelect(initImg);
  };

  return (
    <div className="container">
      <div className="main">
        <Box title="You" item={userSelect} result={result} />
        <Box title="Computer" item={computerSelect} result={result} />
      </div>
      <div className="main">
        <button onClick={() => play("scissors")}>
          <FontAwesomeIcon icon={faHandPeace} size="3x" /> = 가위
        </button>
        <button onClick={() => play("rock")}>
          <FontAwesomeIcon icon={faHandBackFist} size="3x" /> = 바위
        </button>
        <button onClick={() => play("paper")}>
          <FontAwesomeIcon icon={faHandPaper} size="3x" /> = 보
        </button>
      </div>
      <div className="reset-btn">
        <button onClick={() => handleRest()}>
          <FontAwesomeIcon icon={faRotateRight} size="2x" />
        </button>
      </div>
    </div>
  );
}

export default App;
