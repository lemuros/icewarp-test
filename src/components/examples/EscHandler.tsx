import { ButtonWithDialog } from "../Button";
import { Dialog } from "../dialog/Dialog";
import { DialogBody } from "../dialog/DialogBody";
import { DialogButton } from "../dialog/DialogButton";
import { DialogButtonGroup } from "../dialog/DialogButtonGroup";
import { DialogFooter } from "../dialog/DialogFooter";
import { DialogHeader } from "../dialog/DialogHeader";
import { DialogTitle } from "../dialog/DialogTitle";
import { KeyboardIcon, KeyboardOffIcon } from "../Icon";
import { Code, DummyIpsum } from "../layout/Text";
import { useBoolean } from "../../utils/useBoolean";

export const EscHandler = () => {
  const handleEsc = useBoolean(true);

  return (
    <ButtonWithDialog label="Escape Handling">
      {(dialogProps) => (
        <Dialog {...dialogProps} size="md" disableEscHandler={!handleEsc.value}>
          <DialogHeader>
            <KeyboardIcon />
            <DialogTitle>Escape Handling Example</DialogTitle>
          </DialogHeader>
          <DialogBody>
            <p>
              By default, the dialog can be closed by pressing the Esc key. This
              behavior can be disabled using the <Code>disableEscHandler</Code>
              property.
            </p>
            <DummyIpsum length={20} />
          </DialogBody>
          <DialogFooter>
            <span>Select behavior:</span>
            <DialogButtonGroup>
              <DialogButton
                icon={<KeyboardIcon />}
                $active={handleEsc.value}
                onClick={handleEsc.setTrue}
              >
                Handle Esc
              </DialogButton>
              <DialogButton
                icon={<KeyboardOffIcon />}
                $active={!handleEsc.value}
                onClick={handleEsc.setFalse}
              >
                Don't handle Esc
              </DialogButton>
            </DialogButtonGroup>
          </DialogFooter>
        </Dialog>
      )}
    </ButtonWithDialog>
  );
};
