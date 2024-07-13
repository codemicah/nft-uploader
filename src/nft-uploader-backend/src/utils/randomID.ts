export function randomID(length: number = 16): string {
  // Convert current timestamp to base-36 string
  const timestamp = Date.now().toString(36);
  let randomPart = "";

  while (randomPart.length < length - timestamp.length) {
    // Generate random base-36 string
    randomPart += Math.random().toString(36).substring(2);
  }

  // Trim the random part to fit the desired length
  randomPart = randomPart.slice(0, length - timestamp.length);

  return `${timestamp}${randomPart}`;
}
