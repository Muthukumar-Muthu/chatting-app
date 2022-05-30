import { Timestamp } from "firebase/firestore";
import moment from "moment";
export default function timeStampToDate(timeStamp) {
  let date = "";
  if (timeStamp) {
    const time = new Timestamp(timeStamp.seconds, timeStamp.nanoseconds);
    const dateObj = time.toDate();
    date = moment(dateObj).format("L") + " " + moment(dateObj).format("LT");
  } else {
    date = moment().format("L") + " " + moment().format("LT");
  }
  return date;
}
