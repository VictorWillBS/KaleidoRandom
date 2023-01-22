export function parseColor(color) {
  const hashColor = {
    red: "#B60000",
    yellow: "#FFB016",
    green: "#239806",
    purple: "#8F00FF",
    blue: "#2F37F5",
    orange: "#DC6A00",
    pink: "#E800B5",
    white: "#FFF",
  };
  return hashColor[color.toLowerCase()];
}
