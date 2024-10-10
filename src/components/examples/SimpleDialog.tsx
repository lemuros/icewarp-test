import { ButtonWithDialog } from "../Button";
import { Dialog } from "../dialog/Dialog";
import { DialogBody } from "../dialog/DialogBody";
import { DialogHeader } from "../dialog/DialogHeader";
import { DialogTitle } from "../dialog/DialogTitle";
import { DummyIpsum } from "../layout/Text";

export const SimpleDialog = () => (
  <ButtonWithDialog label="Simple Dialog">
    {(dialogProps) => (
      <Dialog {...dialogProps} size="sm">
        <DialogHeader>
          <DialogTitle>Simple Dialog Example</DialogTitle>
        </DialogHeader>
        <DialogBody>
          <DummyIpsum />
        </DialogBody>
      </Dialog>
    )}
  </ButtonWithDialog>
);
