import { Timestamp } from "firebase/firestore";
import moment from "moment";
export default function timeStampToDate(timeStamp) {
  const date = [];
  if (timeStamp) {
    const time = new Timestamp(timeStamp.seconds, timeStamp.nanoseconds);
    const dateObj = time.toDate();
    date[0] = moment(dateObj).format("L");
    date[1] = moment(dateObj).format("LT");
  } else {
    date[0] = moment().format("L");
    date[1] = moment().format("LT");
  }
  return date;
}
