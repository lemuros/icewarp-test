import { createRoot } from "react-dom/client";
import { App } from "./app/App.tsx";
import { assert } from "./utils/assert.ts";

const rootElement = document.getElementById("root");

assert(rootElement !== null, "Unable to find root element");

createRoot(rootElement).render(<App />);
