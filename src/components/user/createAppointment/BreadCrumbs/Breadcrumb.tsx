import { StyledItem, StyledLi, StyledList } from './Breadcrumb.styled';

type BreadCrumb = {
  crumbs: string[],
  selected: (crumb: string) => void
};

const Breadcrumb = ({ crumbs, selected }: BreadCrumb) => (
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
