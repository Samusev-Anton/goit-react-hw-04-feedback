import styled from '@emotion/styled';

export const Block = styled.section`
  padding-top: ${props => props.theme.spacing(20)};
  padding-bottom: ${props => props.theme.spacing(20)};
`;

export const Title = styled.h2`
  margin-left: 50px;
  font-size: ${props => props.theme.spacing(8)};
  font-weight: 700;
  color: ${props => props.theme.colors.dark};
  padding: 10px 30px 10px 10px;
`;
