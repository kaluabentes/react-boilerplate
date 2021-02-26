import styled from "styled-components";

import mixins from "./mixins";

const customStyled = (type: any): any => (styles: any): any => styled(type)`
  ${styles}
  ${(props: any) => mixins(props)}
`;

export default customStyled;
