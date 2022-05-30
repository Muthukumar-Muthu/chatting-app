export default async function copyToClipBoard(text) {
  console.log(text);

  try {
    await navigator.clipboard.writeText(text);
    // await navigator.clipboard.writeText(text);

    return true;
  } catch (error) {
    console.warn(error);

    return false;
  }
}
