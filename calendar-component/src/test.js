const dayjs = require("dayjs");

console.log(dayjs("2023-11-1").daysInMonth());

const dd = dayjs("2023-11-1").startOf("month");
const time = dd.day();
console.log(time);
const result = dd.add(44 - time, "day");
console.log(result.format("YYYY-MM-DD"));
console.log(42 - dayjs("2023-11-1").startOf("month").day() + 1);

console.log(dayjs("2023-11-1").endOf("month").day());
