import React from "react";
import ReactDom from "react-dom";

import { App } from "@@components/App";

const rootElement = document.getElementById("root") as HTMLElement;

ReactDom.render(<App />, rootElement);
