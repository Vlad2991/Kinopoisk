import { useCallback, useState } from "react";

export const useToggle = (initialValue: boolean = false): [boolean, () => void] => {
  const [state, setState] = useState<boolean>(initialValue);

  const toggle = useCallback((): void => setState((state) => !state), []);

  return [state, toggle];
};
