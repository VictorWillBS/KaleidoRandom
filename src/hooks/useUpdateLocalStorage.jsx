import { useEffect } from "react";

export function useUpdateLocalStorage(
  value,
  state,
  setState,
  limit,
  dependency
) {
  useEffect(() => {
    if (!value.length) {
      return;
    }
    if (state.length >= limit) {
      for (let i = state.length; i >= limit; i--) {
        state.shift();
      }
    }
    setState([...state, value]);
  }, [dependency]);
}
