import { useState } from "react";
import { ButtonWithDialog } from "../Button";
import { Dialog, DialogProps } from "../dialog/Dialog";
import { DialogBody } from "../dialog/DialogBody";
import { DialogButton } from "../dialog/DialogButton";
import { DialogButtonGroup } from "../dialog/DialogButtonGroup";
import { DialogFooter } from "../dialog/DialogFooter";
import { DialogHeader } from "../dialog/DialogHeader";
import { DialogTitle } from "../dialog/DialogTitle";
import { LgIcon, MdIcon, SizeIcon, SmIcon } from "../Icon";
import { Code, DummyIpsum } from "../layout/Text";

export const DialogSize = () => {
  const [size, setSize] = useState<DialogProps["size"]>("md");

  return (
    <ButtonWithDialog label="Dialog Sizes">
      {(dialogProps) => (
        <Dialog {...dialogProps} size={size}>
          <DialogHeader>
            <SizeIcon />
            <DialogTitle>Dialog Sizes</DialogTitle>
          </DialogHeader>
          <DialogBody>
            <p>
              The dialog supports multiple sizes, which can be set via the
              <Code>size</Code> property. You can preview the sizes using the
              buttons below.
            </p>
            <DummyIpsum length={20} />
          </DialogBody>
          <DialogFooter>
            <span>Select dialog size here:</span>
            <DialogButtonGroup>
              <DialogButton
                icon={<SmIcon />}
                $active={size === "sm"}
                onClick={() => setSize("sm")}
              >
                Small
              </DialogButton>
              <DialogButton
                icon={<MdIcon />}
                $active={size === "md"}
                onClick={() => setSize("md")}
              >
                Medium
              </DialogButton>
              <DialogButton
                icon={<LgIcon />}
                $active={size === "lg"}
                onClick={() => setSize("lg")}
              >
                Large
              </DialogButton>
            </DialogButtonGroup>
          </DialogFooter>
        </Dialog>
      )}
    </ButtonWithDialog>
  );
};
