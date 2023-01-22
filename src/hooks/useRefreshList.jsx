import { useEffect } from "react";
export function useRefreshList(setState, callback, update) {
  useEffect(() => {
    const newState = callback();
    setState(newState);
  }, [update]);
}
