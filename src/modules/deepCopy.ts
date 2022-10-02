export default function deepCopy(obj: any) {
  return JSON.parse(JSON.stringify(obj));
}
