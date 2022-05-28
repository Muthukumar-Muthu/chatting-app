export default function getChatListHeight() {
  const leftsideHeight = document
    .querySelector(".leftbar")
    ?.getBoundingClientRect().height;
  const headerHeight = document
    .querySelector(".leftbar>.header")
    ?.getBoundingClientRect().height;
  const searchBarHeight = document
    .querySelector(".search-bar")
    ?.getBoundingClientRect().height;

  const chatListHeight = leftsideHeight - (headerHeight + searchBarHeight + 40);

  return chatListHeight;
}
