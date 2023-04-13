import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const GoBackBtn = styled(Link)`
display: inline-block;
  padding: 3px 5px;
  border: 1px solid black;
  border-radius: 4px;
  font-size: 10px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  margin-bottom: 5px;

  &:hover {
    background-color: rgb(235,235,235);
  }
`;