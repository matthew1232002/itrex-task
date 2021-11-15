import React from 'react';
import { StyledItem, StyledLi, StyledList } from './Breadcrumb.styled';

const Breadcrumb = ({ crumbs, selected }) => {
  let disabled;

  function isLast(index) {
    return index === crumbs.length - 1;
  }

  return (
    <nav>
      <StyledList>
        {crumbs.map((crumb, i) => {
          disabled = isLast(i);

          return (
            <StyledLi key={i}>
              <StyledItem disabled={disabled} onClick={() => selected(crumb)}>
                { crumb }
              </StyledItem>
            </StyledLi>
          );
        })}
      </StyledList>
    </nav>
  );
};

export default Breadcrumb;
