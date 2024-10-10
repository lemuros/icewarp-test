import { PropsWithChildren } from "react";
import styled from "styled-components";

export type DialogTitleProps = PropsWithChildren;

export const DialogTitle = (props: DialogTitleProps) => {
  return <DialogTitleBase>{props.children}</DialogTitleBase>;
};

const DialogTitleBase = styled.span`
  font-size: 1.2rem;
  font-weight: bold;
`;
