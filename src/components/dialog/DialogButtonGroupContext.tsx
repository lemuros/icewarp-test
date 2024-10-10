import { createContext, PropsWithChildren, useContext, useMemo } from "react";
import { assert } from "../../utils/assert";

export type ButtonGroupVariant = "header" | "generic";

interface IButtonGroupContext {
  variant: ButtonGroupVariant;
}

const ButtonGroupContext = createContext<IButtonGroupContext | undefined>(
  undefined
);

export const useDialogButtonGroupContext = () => {
  const ctx = useContext(ButtonGroupContext);
  assert(
    ctx !== undefined,
    "Cannot use DialogButton outside button group component"
  );
  return ctx;
};

export type DialogButtonGroupContextProvider = {
  variant: ButtonGroupVariant;
} & PropsWithChildren;

export const DialogButtonGroupContextProvider = (
  props: DialogButtonGroupContextProvider
) => {
  const ctxValue = useMemo(() => ({ variant: props.variant }), [props.variant]);
  return (
    <ButtonGroupContext.Provider value={ctxValue}>
      {props.children}
    </ButtonGroupContext.Provider>
  );
};
