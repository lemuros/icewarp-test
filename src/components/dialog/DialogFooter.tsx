import { PropsWithChildren } from "react";
import styled from "styled-components";

export type DialogFooterProps = PropsWithChildren;

export const DialogFooter = (props: DialogFooterProps) => {
  return <DialogFooterBase>{props.children}</DialogFooterBase>;
};

const DialogFooterBase = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
  margin: 16px 0 0 0;
`;
