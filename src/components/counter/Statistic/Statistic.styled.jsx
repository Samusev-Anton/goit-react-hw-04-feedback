import styled from '@emotion/styled';

export const StatisticList = styled.ul`
  border-radius: 0 0 ${props => props.theme.spacing(3)};

  padding: ${props => props.theme.spacing(3)} ${props => props.theme.spacing(5)};

  display: grid;
  row-gap: ${props => props.theme.spacing(2)};
`;

export const StatItem = styled.li`
  margin-left: 50px;
  font-size: ${props => props.theme.spacing(6)};
  font-weight: 500;

  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  align-items: center;

  padding: 10px 30px 10px 10px;
`;
