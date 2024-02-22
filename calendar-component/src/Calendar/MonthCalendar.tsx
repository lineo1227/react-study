import { Dayjs } from "dayjs";
import { CalendarProps } from "./index";

interface MonthCalendarProps extends CalendarProps {}
function getAllDays(data: Dayjs) {
  const daysInMonth = data.daysInMonth();
  const startDate = data.startOf("month");
  const day = startDate.day();
  const daysInfo: Array<{ date: Dayjs; currentMonth: boolean }> = new Array(
    6 * 7
  );

  for (let i = 0; i < day; i++) {
    daysInfo[i] = {
      date: startDate.subtract(day - i, "day"),
      currentMonth: false,
    };
  }
  for (let i = day; i < daysInfo.length; i++) {
    const calcDate = startDate.add(i - day, "day");
    daysInfo[i] = {
      date: calcDate,
      currentMonth: calcDate.month() === data.month(),
    };
  }
  return daysInfo;
}
function renderDays(days: { date: Dayjs; currentMonth: boolean }[]) {
  const rows = [];
  for (let i = 0; i < 6; i++) {
    const row = [];
    for (let j = 0; j < 7; j++) {
      const item = days[i * 7 + j];
      row[j] = (
        <div
          className={
            "calendar-month-body-cell " +
            (item.currentMonth ? "calendar-month-body-cell-current" : "")
          }
        >
          {item.date.date()}
        </div>
      );
    }
    rows.push(row);
  }
  return rows.map((row) => (
    <div className="calendar-month-body-row">{row}</div>
  ));
}
export default function MonthCalendar(props: MonthCalendarProps) {
  const weekList = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
  const allDays = getAllDays(props.value);
  return (
    <div className="calendar-month">
      <div className="calendar-month-week-list">
        {weekList.map((week) => (
          <div className="calendar-month-week-list-item" key={week}>
            {week}
          </div>
        ))}
      </div>
      {renderDays(allDays)}
    </div>
  );
}
