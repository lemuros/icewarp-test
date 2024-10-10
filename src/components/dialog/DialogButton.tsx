import { Button, ButtonProps } from "../Button";
import { useDialogContext } from "./DialogContext";
import { ButtonHTMLAttributes, ReactNode } from "react";
import { useDialogButtonGroupContext } from "./DialogButtonGroupContext";
import { Flex } from "../layout/Flex";

export type DialogButtonProps = {
  icon: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement> &
  ButtonProps;

export const DialogButton = ({
  icon,
  children,
  ...rest
}: DialogButtonProps) => {
  useDialogContext();
  const { variant } = useDialogButtonGroupContext();

  return (
    <Button {...rest}>
      <Flex direction="row" gap={4} alignItems="center">
        {icon}
        {variant === "generic" && <span>{children}</span>}
      </Flex>
    </Button>
  );
};
