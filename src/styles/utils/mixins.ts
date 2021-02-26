import { css } from "styled-components";

import { CSS_PROPS } from "./constants";

interface PropObject {
  name: string;
  value: string;
}

function mixins(props: any) {
  function upcaseFirstLetter(word: string) {
    return word
      .split("")
      .map((letter: string, index: number) =>
        index === 0 ? letter.toUpperCase() : letter
      )
      .join("");
  }

  function getPropKey(prop: any): string {
    return prop
      .split("-")
      .map((word: string, index: number) =>
        index === 0 ? word : upcaseFirstLetter(word)
      )
      .join("");
  }

  const propsObject: PropObject[] = CSS_PROPS.map((prop) => ({
    name: prop,
    value: props[getPropKey(prop)],
  }));

  let styleString = css``;
  propsObject.forEach((prop: any) => {
    styleString = css`
      ${styleString}
      ${prop.name}: ${prop.value};
    `;
  });

  return styleString;
}

export default mixins;
