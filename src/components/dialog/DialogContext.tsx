import { createContext, useContext } from "react";
import { assert } from "../../utils/assert";

interface IDialogContext {
  isOpen: boolean;
  close?: () => void;
}

const DialogContext = createContext<IDialogContext | undefined>(undefined);

export const useDialogContext = () => {
  const ctx = useContext(DialogContext);
  assert(ctx !== undefined, "Unable to use DialogContext outside its provider");
  return ctx;
};

export const DialogContextProvider = DialogContext.Provider;
