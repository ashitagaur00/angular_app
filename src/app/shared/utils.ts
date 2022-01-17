//cal today/ currentDate for date range

const today = new Date();
const currentDateYear = today.getFullYear();


//if month is less then 10 , we need to append 0 before the  number ;
const currentDateMonth = today.getMonth() + 1 < 10 ? '0' + (today.getMonth() + 1) : today.getMonth() + 1;
//if month is less then 10 , we need to append 0 before the  number ;

const currentDateDay = today.getDate() < 10 ? '0' + today.getDate() : today.getDate();

// const y = currentDateYear.toString();
// const m = currentDateMonth.toString();
// const d = currentDateDay.toString();



export const currentDate = currentDateYear + '-' + currentDateMonth + '-'+ currentDateDay;
// '${currentDateYear}-${currentDateMonth}-${currentDateDay}';