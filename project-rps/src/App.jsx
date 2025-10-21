import { useState } from "react";
import "./App.css";
import Box from "./component/Box";

// 1. 박스 2개(타이틀(유저/컴퓨터), 사진, 결과(승/패/무승부))
// 2. 가위바위보 버튼
// 3. 버튼을 클릭하면 클릭한 값이 박스에 보임
// 4. 컴퓨터는 랜덤하게 아이템 선틱애 됨
// 5. 3,4번의 결과를 가지고 누가 이겼는지 승패를 따짐
// 6. 결과에 따라 테두리 색 바뀜(이김: 초록 / 패: 빨강 / 무승부: 검정)

// 가위바위보 객체
const choice = {
  rock: {
    name: "Rock",
    img: "https://i.pinimg.com/1200x/69/7f/18/697f18ae4c61e449000ccea82cde7518.jpg",
  },
  scissors: {
    name: "Scissors",
    img: "https://i.pinimg.com/736x/06/ab/b7/06abb7f84d20646f9af741135acbad59.jpg",
  },
  paper: {
    name: "Paper",
    img: "https://i.pinimg.com/736x/27/32/0e/27320e579185465f6e57cc5c00e0d72f.jpg",
  },
};

function App() {
  const [userSelect, setUserSelect] = useState(null);

  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);
  };

  return (
    <div>
      <div className="main">
        <Box title="You" item={userSelect} />
        {/* <Box title="Computer" /> */}
      </div>
      <div className="main">
        <button onClick={() => play("scissors")}>가위</button>
        <button onClick={() => play("rock")}>바위</button>
        <button onClick={() => play("paper")}>보</button>
      </div>
    </div>
  );
}

export default App;
