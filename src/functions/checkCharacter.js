export default function checkCharacters(text, size) {
  if ([...text].length > size) return false;
  else return true;
}
