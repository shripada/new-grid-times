import React from 'react';
import styled from 'styled-components/macro';
import { Menu, Search, User } from 'react-feather';

import { QUERIES } from '../../constants';

import MaxWidthWrapper from '../MaxWidthWrapper';
import Logo from '../Logo';
import Button from '../Button';

const Header = () => {
  return (
    <header>
      <SuperHeader>
        <Row>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
          <DesktopHeader> <Logo /></DesktopHeader>
          <RightActionGroupMobileTablet>
            <button>
              <User size={24} />
            </button>
          </RightActionGroupMobileTablet>

          <RightActionGroup><Button>Subscribe</Button>
          <Link>Already a subscriber?</Link>
          </RightActionGroup>
        </Row>
      </SuperHeader>
      <MainHeader>
        <Logo />
      </MainHeader>
    </header>
  );
};

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;
  @media ${QUERIES.laptopAndUp}{
    background: white;
  }

  &  svg {
    stroke: white;
    @media ${QUERIES.laptopAndUp}{
    stroke: black;
  }
   
  }
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`;

const RightActionGroupMobileTablet = styled(ActionGroup)`
  @media ${QUERIES.laptopAndUp}{
    display:none;
  }
`

const RightActionGroup = styled(ActionGroup)`
  display:none;
  color:black;
  @media ${QUERIES.laptopAndUp}{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap:0;
  }
`

const Link = styled.a`
  margin-top:8px;
  font-family: var(--font-family-serif);
  font-size: calc(14rem/16);
  font-style: italic;
  text-decoration: underline;
  cursor: pointer;
`;
const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;

   @media ${QUERIES.laptopAndUp} {
     display:none;
  } 
`;

const DesktopHeader = styled(MaxWidthWrapper)`
margin-top: 32px;
margin-bottom: 48px;
display:none;
color:black;
@media ${QUERIES.laptopAndUp} {
   display:flex;
   align-items: center;
   justify-content: center;
 
} `
export default Header;
