import styled from "styled-components";

export const SectionStyle = styled.section`
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;
  font-size: ${p => p.theme.fontSizes.s};
  :not(:first-child) {
    margin-top: ${p => p.theme.space[6]}px;
  }
`;

export const SectionTitle = styled.h2`
  font-size: ${p => p.theme.fontSizes.l};
  font-family: ${p => p.theme.fonts.heading};
  margin-bottom: ${p => p.theme.space[4]}px;
`;