import React, {
  forwardRef,
  useImperativeHandle,
  useState,
  useRef,
  useEffect,
} from "react";
import "./App.css";
const monthNames = [
  "一月",
  "二月",
  "三月",
  "四月",
  "五月",
  "六月",
  "七月",
  "八月",
  "九月",
  "十月",
  "十一月",
  "十二月",
];
interface CalendarProps {
  value?: Date;
  onChange?: (date: Date) => void;
}
interface CalendarRef {
  getDate: () => Date;
  setDate: (date: Date) => void;
}
const InternalCalendar: React.ForwardRefRenderFunction<
  CalendarRef,
  CalendarProps
> = (props, ref) => {
  const { value = new Date(), onChange } = props;
  const [date, setDate] = useState(value);
  useImperativeHandle(ref, () => {
    return {
      getDate() {
        return date;
      },
      setDate(date: Date) {
        setDate(date);
      },
    };
  });
  const handlePrevMonth = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() - 1));
  };
  const handleNextMonth = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() + 1));
  };

  const daysOfMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
  };
  const firstDayOfMonth = (year: number, month: number) => {
    return new Date(year, month, 1).getDay();
  };
  const renderDays = () => {
    const days = [];
    const daysCount = daysOfMonth(date.getFullYear(), date.getMonth());
    const firstDay = firstDayOfMonth(date.getFullYear(), date.getMonth());
    for (let i = firstDay; i > 0; i--) {
      days.push(
        <div key={`prev-${i}`} className="empty">
          {new Date(date.getFullYear(), date.getMonth(), -i + 1).getDate()}
        </div>
      );
    }
    for (let i = 1; i <= daysCount; i++) {
      const clickHandler = onChange?.bind(
        null,
        new Date(date.getFullYear(), date.getMonth(), i)
      );

      if (i === date.getDate()) {
        console.log(i);
        days.push(
          <div key={`day-${i}`} onClick={clickHandler} className="day selected">
            {i}
          </div>
        );
      } else {
        days.push(
          <div key={`day-${i}`} onClick={clickHandler} className="day">
            {i}
          </div>
        );
      }
    }
    console.log(42 - daysCount - firstDay);
    for (let i = 1; i <= 42 - daysCount - firstDay; i++) {
      days.push(
        <div key={`next-${i}`} className="empty">
          {new Date(date.getFullYear(), date.getMonth(), i).getDate()}
        </div>
      );
    }
    return days;
  };

  return (
    <div className="calendar">
      <div className="header">
        <button onClick={handlePrevMonth}>&lt;</button>
        <div>
          {date.getFullYear()}年{monthNames[date.getMonth()]}
        </div>
        <button onClick={handleNextMonth}>&gt;</button>
      </div>
      <div className="days">
        <div className="week">日</div>
        <div className="week">一</div>
        <div className="week">二</div>
        <div className="week">三</div>
        <div className="week">四</div>
        <div className="week">五</div>
        <div className="week">六</div>
        {renderDays()}
      </div>
    </div>
  );
};
const Calendar = forwardRef(InternalCalendar);
function App() {
  const calendarRef = useRef<CalendarRef>(null);
  useEffect(() => {
    // console.log(calendarRef.current?.getDate().toLocaleDateString());
    // setTimeout(() => {
    //   calendarRef.current?.setDate(new Date("2022-3-22"));
    // }, 3000);
  }, []);
  return (
    <div className="App">
      {/* <Calendar
        onChange={(date) => {
          alert(date.toLocaleDateString());
        }}
      /> */}
      <Calendar
        ref={calendarRef}
        onChange={(date) => {
          console.log(date.toLocaleDateString());
        }}
      />
    </div>
  );
}
export default App;
