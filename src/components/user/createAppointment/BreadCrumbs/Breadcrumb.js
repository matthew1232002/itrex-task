import React from 'react';
import { StyledItem, StyledLi, StyledList } from './Breadcrumb.styled';

const Breadcrumb = ({ crumbs, selected }) => (
  <nav>
    <StyledList>
      {crumbs.map((crumb, i) => (
        <StyledLi key={i}>
          <StyledItem disabled={i === crumbs.length - 1} onClick={() => selected(crumb)}>
            { crumb }
          </StyledItem>
        </StyledLi>
      ))}
    </StyledList>
  </nav>
);
export default Breadcrumb;
