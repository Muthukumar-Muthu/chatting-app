const trimMsg = (msg = "", length = msg.length) => {
  if (length >= msg.length) {
    return msg;
  } else return msg.trim().slice(0, length) + "...";
};
export default trimMsg;
