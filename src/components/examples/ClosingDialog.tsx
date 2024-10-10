import { ButtonWithDialog } from "../Button";
import { Dialog } from "../dialog/Dialog";
import { DialogBody } from "../dialog/DialogBody";
import { DialogButton } from "../dialog/DialogButton";
import { DialogButtonGroup } from "../dialog/DialogButtonGroup";
import { DialogFooter } from "../dialog/DialogFooter";
import { DialogHeader } from "../dialog/DialogHeader";
import { DialogTitle } from "../dialog/DialogTitle";
import { RequiredIcon, StarIcon } from "../Icon";
import { Code, DummyIpsum } from "../layout/Text";
import { useBoolean } from "../../utils/useBoolean";

export const DialogClosing = () => {
  const mandatory = useBoolean();

  return (
    <ButtonWithDialog label="Closing Dialog">
      {({ isOpen, close }) => (
        <Dialog
          isOpen={isOpen}
          close={mandatory.value ? undefined : close}
          size="md"
        >
          <DialogHeader>
            <RequiredIcon />
            <DialogTitle>Closing Dialog</DialogTitle>
          </DialogHeader>
          <DialogBody>
            <p>
              The dialog can be set as mandatory (as shown in the example
              above). The <Code>DialogCloseButton</Code> is rendered
              automatically, controlled by the close property. You can toggle
              the mandatory state of the dialog using the buttons below.
            </p>
            <DummyIpsum length={20} />
          </DialogBody>
          <DialogFooter>
            <span>Select mandatory state:</span>
            <DialogButtonGroup>
              <DialogButton
                icon={<RequiredIcon />}
                $active={mandatory.value}
                onClick={mandatory.setTrue}
              >
                Mandatory
              </DialogButton>
              <DialogButton
                icon={<StarIcon />}
                $active={!mandatory.value}
                onClick={mandatory.setFalse}
              >
                Regular
              </DialogButton>
            </DialogButtonGroup>
          </DialogFooter>
        </Dialog>
      )}
    </ButtonWithDialog>
  );
};
