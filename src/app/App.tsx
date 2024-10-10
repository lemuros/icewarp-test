import "normalize.css";
import "@fontsource-variable/open-sans";
import "@fontsource/redacted-script";

import { Container } from "../components/layout/Container";
import { StrictMode } from "react";
import { Header } from "../components/layout/Header";
import { AppGlobalStyles } from "./AppGlobalStyles";
import { Code, Heading } from "../components/layout/Text";
import { Flex } from "../components/layout/Flex";
import { FullDialog } from "../components/examples/FullDialog";
import { MandatoryDialog } from "../components/examples/MandatoryDialog";
import { DialogSize } from "../components/examples/DialogSize";
import { DialogClosing } from "../components/examples/ClosingDialog";
import { SimpleDialog } from "../components/examples/SimpleDialog";
import { EscHandler } from "../components/examples/EscHandler";
import { LongContent } from "../components/examples/LongContent";

export const App = () => (
  <StrictMode>
    <AppGlobalStyles />
    <Header>
      <Container>
        <Heading>IceWarp Modal Test</Heading>
      </Container>
    </Header>
    <Container>
      <Flex direction="column" gap={16} alignItems="flex-start">
        <p>
          This is a simple application developed as a solution for the IceWarp
          test. Additional details, including the assignment, can be found in
          the repository. All components related to dialog functionality are
          located in <Code>/src/components/dialog</Code>.
        </p>

        <Flex direction="row" gap={16} alignItems="center">
          <span>Main examples:</span>
          <FullDialog />
          <MandatoryDialog />
          <SimpleDialog />
          <LongContent />
        </Flex>

        <Flex direction="row" gap={16} alignItems="center">
          <span>Interactive examples:</span>
          <DialogSize />
          <DialogClosing />
          <EscHandler />
        </Flex>
      </Flex>
    </Container>
  </StrictMode>
);
