import { ButtonWithDialog } from "../Button";
import { Dialog } from "../dialog/Dialog";
import { DialogBody } from "../dialog/DialogBody";
import { DialogButton } from "../dialog/DialogButton";
import { DialogButtonGroup } from "../dialog/DialogButtonGroup";
import { DialogFooter } from "../dialog/DialogFooter";
import { DialogHeader } from "../dialog/DialogHeader";
import { DialogTitle } from "../dialog/DialogTitle";
import { CatIcon, DogIcon, PenguinIcon, StarIcon, TortoiseIcon } from "../Icon";
import { DummyIpsum } from "../layout/Text";

export const FullDialog = () => (
  <ButtonWithDialog label="Full Dialog">
    {(dialogProps) => (
      <Dialog {...dialogProps} size="lg">
        <DialogButtonGroup variant="header">
          <DialogButton onClick={dialogProps.close} icon={<DogIcon />}>
            Dog
          </DialogButton>
          <DialogButton onClick={dialogProps.close} icon={<CatIcon />}>
            Cat
          </DialogButton>
          <DialogButton onClick={dialogProps.close} icon={<PenguinIcon />}>
            Penguin
          </DialogButton>
          <DialogButton onClick={dialogProps.close} icon={<TortoiseIcon />}>
            Tortoise
          </DialogButton>
        </DialogButtonGroup>
        <DialogHeader>
          <StarIcon />
          <DialogTitle>Full Dialog Example</DialogTitle>
        </DialogHeader>
        <DialogBody>
          <DummyIpsum />
          <DummyIpsum />
          <DummyIpsum />
        </DialogBody>
        <DialogFooter>
          <DummyIpsum length={3} />
          <DialogButtonGroup>
            <DialogButton onClick={dialogProps.close} icon={<DogIcon />}>
              Dog
            </DialogButton>
            <DialogButton onClick={dialogProps.close} icon={<CatIcon />}>
              Cat
            </DialogButton>
            <DialogButton onClick={dialogProps.close} icon={<PenguinIcon />}>
              Penguin
            </DialogButton>
          </DialogButtonGroup>
        </DialogFooter>
      </Dialog>
    )}
  </ButtonWithDialog>
);
