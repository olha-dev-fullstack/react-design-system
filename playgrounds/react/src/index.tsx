import { Select } from "@ds.e/react";
import React from "react";
import ReactDOM from "react-dom";

import "@ds.e/scss/lib/global.css";
import "@ds.e/scss/lib/Margin.css";
import '@ds.e/scss/lib/Select.css';
import "@ds.e/scss/lib/Text.css";
import "@ds.e/scss/lib/Utilities.css";

const options = [
  {
    label: "Strict Black",
    value: "strict-black",
  },
  {
    label: "Heavenly Green",
    value: "heavenly-green",
  },
  {
    label: "Sweet Pink",
    value: "pink",
  },
];

ReactDOM.render(
  <div style={{padding: '40px'}}>
    <Select options={options} />
    <p>this is some text</p>
  </div>,
  document.querySelector("#root")
);
