export default function range(startOrEnd, end, step = 1) {
  const output = [];
  if (!end) {
    end = startOrEnd;
    startOrEnd = 0;
  }
  for (let num = startOrEnd; num <= end; num = num + step) {
    output.push(num);
  }
  return output;
}
