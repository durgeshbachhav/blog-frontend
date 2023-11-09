const readingSpeedWPM = 200; 


export function calculateTimeToRead(content) {
  if (!content) {
    return 0; // or some default value if content is undefined
  }

  const words = content.split(/\s+/);
  const wordCount = words.length;
  const timeToRead = Math.ceil(wordCount / readingSpeedWPM);
  return timeToRead;
}










