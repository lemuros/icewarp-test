import { useCallback, useState } from "react";

/** Utility hook that simplifies work with boolean state */
export const useBoolean = (defaultValue?: boolean) => {
  const [value, setValue] = useState<boolean>(
    defaultValue === undefined ? false : defaultValue
  );

  const setTrue = useCallback(() => setValue(true), [setValue]);
  const setFalse = useCallback(() => setValue(false), [setValue]);
  const toggle = useCallback(() => setValue((v) => !v), [setValue]);

  return { value, setTrue, setFalse, toggle, setValue };
};
