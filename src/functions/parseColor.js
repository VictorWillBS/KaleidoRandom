export function parseColor(color){
  console.log(color);
  const hashColor = {
    red:"#B60000",
    yellow:"#FFC700",
    green:"#24B600",
    purple:"#B556FF",
    blue:"#2F37F5",
    orange:"#DC6A00",
    pink:"#E800B5",
    white:"#FFF"
  };
  return hashColor[color.toLowerCase()]
}
