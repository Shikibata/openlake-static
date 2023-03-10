import styled from '@emotion/styled';
import NavItem from '../header/NavItem';

export default function Footer({ text, href }) {

  return (
    <Feeter>
      <Border />
      <Span>© 2023 - Maxime & Loïc</Span>
    </Feeter>
  );
}

const Border = styled.div`
  margin: 0px auto 0px auto;
  border-top: 2px solid var(--fading-bg);
  width: 75%;
`;

const Feeter = styled.footer`
  display: flex;
  flex-flow: row wrap;
  text-align: center;
  max-width: 100%;
  flex-shrink: 0;
  flex-direction: column;
  flex-basis: auto;
  -webkit-box-align: stretch;
  align-items: stretch;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: var(--bg);
  margin-top: auto;
  z-index: 1;
`;

const Span = styled.span`
  margin: 10px 16px;
  color: var(--fg);
`;

const ContainerList = styled.div`
  display: flex;
  flex-flow: row wrap;
  text-align: center;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;

  > * {
    margin: 4px 16px;
  }
`;
