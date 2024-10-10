import { ButtonWithDialog } from "../Button";
import { Dialog } from "../dialog/Dialog";
import { DialogBody } from "../dialog/DialogBody";
import { DialogFooter } from "../dialog/DialogFooter";
import { DialogHeader } from "../dialog/DialogHeader";
import { DialogTitle } from "../dialog/DialogTitle";
import { LengthIcon } from "../Icon";
import { DummyIpsum } from "../layout/Text";

export const LongContent = () => (
  <ButtonWithDialog label="Long Content">
    {(dialogProps) => (
      <Dialog {...dialogProps} size="md">
        <DialogHeader>
          <LengthIcon />
          <DialogTitle>Long Content Example</DialogTitle>
        </DialogHeader>
        <DialogBody>
          {Array(10)
            .fill(null)
            .map((_, index) => (
              <DummyIpsum key={index} length={50} />
            ))}
        </DialogBody>
        <DialogFooter>The footer remains visible.</DialogFooter>
      </Dialog>
    )}
  </ButtonWithDialog>
);
