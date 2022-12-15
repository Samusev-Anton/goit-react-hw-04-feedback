import styled from '@emotion/styled';

export const ButtonBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  margin-left: 50px;
  font-size: ${props => props.theme.spacing(6)};
  font-weight: 500;
  padding: 10px 30px 10px 10px;

  gap: ${props => props.theme.spacing(2)};
`;

export const Button = styled.button`
  text-items: center;
  gap: ${props => props.theme.spacing(2)};

  background: ${props => props.theme.colors.white};
  border-radius: ${props => props.theme.spacing(2)};
  box-shadow: ${props => props.theme.shadows.small};

  padding-top: ${props => props.theme.spacing(2)};
  padding-right: ${props => props.theme.spacing(5)};
  padding-bottom: ${props => props.theme.spacing(2)};
  padding-left: ${props => props.theme.spacing(5)};
`;
