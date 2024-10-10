import { useMemo } from "react";
import styled from "styled-components";

export const Heading = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
`;

export const Code = styled.code`
  letter-spacing: 1px;
  font-family: monospace;
  border: 1px solid var(--color-primary);
  background-color: var(--color-backdrop-1);
  padding: 2px 6px;
  margin: 0 4px;
  border-radius: 4px;
  font-size: 1em;
`;

export const Dummy = styled.p`
  font-family: "Redacted Script", system-ui;
  font-size: 1.5rem;
  color: var(--color-gray-3);
`;

export type DummyIpsumProps = {
  length?: number;
};

export const DummyIpsum = (props: DummyIpsumProps) => {
  const { length = 40 } = props;

  const text = useMemo(() => {
    const loremIpsumText =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

    const wordsArray = loremIpsumText.split(" ");

    const repeatedWords = [];
    while (repeatedWords.length < length) {
      repeatedWords.push(...wordsArray);
    }

    // Slice the array to the exact number of words requested
    return repeatedWords.slice(0, length).join(" ");
  }, [length]);

  return <Dummy>{text}</Dummy>;
};
