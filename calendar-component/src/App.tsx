import dayjs from "dayjs";
import Calendar from "./Calendar";

function App() {
  return (
    <div className="App">
      <Calendar
        locale="zh-CN"
        value={dayjs()}
        className={"aaa"}
        onChange={(date) => {
          alert(date.format("YYYY-MM-DD"));
        }}
        // dateInnerContent={(value) => {
        //   return (
        //     <div>
        //       <p style={{ background: "yellowgreen", height: "30px" }}>
        //         {value.format("YYYY/MM/DD")}
        //       </p>
        //     </div>
        //   );
        // }}
      ></Calendar>
    </div>
  );
}

export default App;
