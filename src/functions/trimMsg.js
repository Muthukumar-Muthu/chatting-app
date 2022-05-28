const trimMsg = (msg = "", length) => {
  if (length >= msg.length) {
    return msg;
  } else return msg.trim().slice(0, length) + "...";
};
export default trimMsg;
