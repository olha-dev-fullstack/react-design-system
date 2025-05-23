import React from "react";
import ReactDOM from "react-dom";
import { Margin, Text } from "@ds.e/react";

import "@ds.e/scss/lib/Utilities.css";
import "@ds.e/scss/lib/Text.css";
import "@ds.e/scss/lib/global.css";
import '@ds.e/scss/lib/Margin.css'

ReactDOM.render(
    <div>
  <Margin space='md'>
    <Text size="xl">This is some text</Text>
  </Margin>
  </div>,
  document.querySelector("#root")
);
