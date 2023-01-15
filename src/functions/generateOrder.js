export function generateOrder(){
const epList = ["Red","Blue","Pink","Green", "Purple", "Yellow", "White", "Orange"];

for(let i = epList.length; i; i--){
  const randomIndex = Math.floor(Math.random()*i);

  const element = epList[i-1];
  epList[i-1]= epList[randomIndex];
  epList[randomIndex]= element
}

return epList;
}

