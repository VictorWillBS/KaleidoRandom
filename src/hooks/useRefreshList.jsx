import { useEffect } from "react"

export function useRefreshList(setState,callback,update){
  console.log("entrei");
  useEffect(()=>{
    const newState=callback()
  console.log(newState)
    setState(newState)

  },[update])
}