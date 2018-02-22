export function millisecondsToHuman(time) {
  const seconds = Math.floor((time) % 60);
  const minutes = Math.floor((time / 60) % 60);
  const hours = Math.floor(time / 60 / 60);

  return [
    pad(hours.toString(), 2),
    pad(minutes.toString(), 2),
    pad(seconds.toString(), 2)
  ].join(':');
}

function pad(numberString, size) {
  let padded = numberString;
  while (padded.length < size) padded = `0${padded}`;
  return padded;
}
