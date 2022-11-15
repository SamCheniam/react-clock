import { useEffect, useState } from "react";
import Clock from "./component/Clock";
//!id即便相同，react也不會跑出error
function App() {
  // let hours = new Date().getHours();
  // let minutes = new Date().getMinutes();
  // let seconds = new Date().getSeconds();

  const [timer, setTimer] = useState({
    h: new Date().getHours(),
    m: new Date().getMinutes(),
    s: new Date().getSeconds(),
  });

  const [timerStyles, setTimerStyles] = useState({});
  //!記得setInterval不會剛開始就執行一次，我們指定的時間後才執行第一次
  useEffect(() => {
    setInterval(() => {
      setTimer({
        h: new Date().getHours(),
        m: new Date().getMinutes(),
        s: new Date().getSeconds(),
      });
    }, 1000);
  }, []);
  //!這裡我們柏把它放進上面的useEffect裏面，但他沒辦法跟著設定
  //!而根據被好的意義，style是跟著timer去變動，也因此我們每秒去抓timer
  //!而style每秒會隨著timer進行改變，所以我把它分開來寫，就成功了
  useEffect(() => {
    setTimerStyles({
      styleDashOfM: 630 - (630 * timer.m) / 60,
      styleDashOfS: 760 - (760 * timer.s) / 60,
      //*因為這是12小時制的時鐘，但資料抓回來試24小時制，要換算
      styleDashOfH:
        timer.h < 12
          ? 510 - (510 * timer.h) / 12
          : 510 - (510 * (timer.h - 12)) / 12,
      //*360/60=6
      styleRotateOfM: `${timer.m * 6}deg`,
      //*360/60=6
      styleRotateOfS: `${timer.s * 6}deg`,
      //*360/12=30
      styleRotateOfH: `${timer.h * 30}deg`,
    });
  }, [timer]);
  return (
    <div className="App">
      <div id="time">
        <Clock
          cx={120}
          cy={120}
          r={120}
          id={"ss"}
          clr={"#ff2972"}
          myClass={"dots sec_dot"}
          Dash={timerStyles.styleDashOfS}
          rotateDeg={timerStyles.styleRotateOfS}
        />
        <Clock
          cx={100}
          cy={100}
          r={100}
          id={"mm"}
          clr={"#fee800"}
          myClass={"dots min_dot"}
          Dash={timerStyles.styleDashOfM}
          rotateDeg={timerStyles.styleRotateOfM}
        />
        <Clock
          cx={80}
          cy={80}
          r={80}
          id={"hh"}
          clr={"#04fc43"}
          myClass={"dots hr_dot"}
          Dash={timerStyles.styleDashOfH}
          rotateDeg={timerStyles.styleRotateOfH}
        />
        <div className="timerContainer">
          <div className="timerH" style={{ color: "#04fc43" }}>
            {timer.h > 12 ? timer.h - 12 : timer.h}
          </div>
          <div className="timerM" style={{ color: "#fee800" }}>
            {timer.m}
          </div>
          <div className="timerS" style={{ color: "#ff2972" }}>
            {timer.s < 10 ? "0" + timer.s : timer.s}
          </div>

          {timer.h > 12 ? <div id="ampm">PM</div> : <div id="ampm">AM</div>}
        </div>
      </div>
    </div>
  );
}

export default App;
