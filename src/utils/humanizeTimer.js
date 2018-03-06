export function millisecondsToHuman(time) {
  const centisecond = Math.floor(time % 100);
  const seconds = Math.floor((time / 100) % 60);
  const minutes = Math.floor((time / 100 / 60) % 60);
  const hours = Math.floor(time / 100 / 60 / 60 / 60);

  return [
    hours.toString().padStart(2, '0'),
    minutes.toString().padStart(2, '0'),
    seconds.toString().padStart(2, '0'),
    centisecond.toString().padStart(2, '0')
  ].join(':');
}
