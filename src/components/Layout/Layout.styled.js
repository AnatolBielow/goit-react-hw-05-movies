import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  padding: 20px;
  width: 800px;
  margin: 0 auto;
  justify-content: center;
  gap: 20px;
`;
export const Nav = styled.nav`
  display: flex;
  gap: 20px;
`;
export const Link = styled(NavLink)`
  display: block;
  padding: 10px 20px;
  color: black;
  font-weight: 700;
  border: 1px solid grey;
  background-color: #d0d0d0;
  &:hover,
  &:focus,
  &.active {
    background-color: #0093ff;
    color: white;
  }
`;
