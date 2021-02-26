import { css } from "styled-components";
import React from "react";

import styled from "styles/utils/styled";
import BaseProps from "styles/utils/BaseProps";

const Div = styled("div")(css``);

function Box(props: BaseProps) {
  return <Div {...props} />;
}

export default Box;
