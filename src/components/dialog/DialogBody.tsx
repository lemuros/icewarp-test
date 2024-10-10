import { PropsWithChildren } from "react";
import styled from "styled-components";
import { Flex } from "../layout/Flex";

export type DialogBodyProps = PropsWithChildren;

export const DialogBody = (props: DialogBodyProps) => {
  return (
    <DialogBodyBase>
      <Flex direction="column" gap={16}>
        {props.children}
      </Flex>
    </DialogBodyBase>
  );
};

const DialogBodyBase = styled.div`
  padding: 0 24px;
  overflow: auto;
`;
