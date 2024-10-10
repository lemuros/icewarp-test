import { ButtonWithDialog } from "../Button";
import { Dialog } from "../dialog/Dialog";
import { DialogBody } from "../dialog/DialogBody";
import { DialogButton } from "../dialog/DialogButton";
import { DialogButtonGroup } from "../dialog/DialogButtonGroup";
import { DialogFooter } from "../dialog/DialogFooter";
import { DialogHeader } from "../dialog/DialogHeader";
import { DialogTitle } from "../dialog/DialogTitle";
import { CheckIcon, RequiredIcon } from "../Icon";

export const MandatoryDialog = () => (
  <ButtonWithDialog label="Mandatory Dialog">
    {({ isOpen, close }) => (
      <Dialog isOpen={isOpen} size="md">
        <DialogHeader>
          <RequiredIcon />
          <DialogTitle>Mandatory Dialog Example</DialogTitle>
        </DialogHeader>
        <DialogBody>
          <p>
            The mandatory dialog window cannot be closed by clicking on the
            outer dialog wrapper, and the dialog close button is not rendered.
            The user must complete a specific action (such as agreeing to the
            terms of use) to close it.
          </p>
        </DialogBody>
        <DialogFooter>
          <DialogButtonGroup>
            <DialogButton icon={<CheckIcon />} onClick={close}>
              I Agree
            </DialogButton>
          </DialogButtonGroup>
        </DialogFooter>
      </Dialog>
    )}
  </ButtonWithDialog>
);
