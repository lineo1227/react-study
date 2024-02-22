import dayjs from "dayjs";
import Calendar from "./Calendar";

function App() {
  return (
    <div className="App">
      <Calendar value={dayjs()}></Calendar>
    </div>
  );
}

export default App;
