import PrimaryLayout from '../../components/layouts/primary/PrimaryLayout';
import styled from '@emotion/styled';
import {motion, useScroll} from 'framer-motion';
import Card from '../../components/Card/Card';
import CardNewest from '../../components/Card/CardNewest';
import CardPopular from '../../components/Card/CardPopular';
import {FaArrowUp} from "react-icons/fa";
import {useEffect, useState} from "react";

export default function Index() {
  
  const isBrowser = () => typeof window !== 'undefined';
  const [showButton, setShowButton] = useState();

  useEffect(() => {
    const handleScrollButtonVisibility = () => {
      window.pageYOffset > 300 ? setShowButton(true) : setShowButton(true);
    };
    window.addEventListener('scroll', handleScrollButtonVisibility);

    return () => {
      window.removeEventListener('scroll', handleScrollButtonVisibility);
    }
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  
  return (
    <PrimaryLayout>
    {showButton && (
          <div className={`scrollToTop`}>
            <ButtonScroll className={`buttonscroll`} onClick={handleScrollToTop}>
              <FaArrowUp/>
            </ButtonScroll>
          </div>
      )}
      <ContainerNew>
        <h2>Newest</h2>
        <CardNew>
          <CardItself>
            <CardNewest />
          </CardItself>
        </CardNew>
      </ContainerNew>
      <ContainerTop>
        <h2>Hottest</h2>
        <CardTop>
          <CardItself>
            <CardPopular />
          </CardItself>
        </CardTop>
      </ContainerTop>
      <ContainerIndex>
        <h2>Index</h2>
        <CardIndex>
          <CardItself>
            <Card />
          </CardItself>
        </CardIndex>
      </ContainerIndex>
    </PrimaryLayout>
  );
}

const ContainerIndex = styled(motion.div)`
  padding-bottom: 5rem;

  h2 {
    text-align: center;
    font-size: 3rem;
    margin-bottom: 1.5rem;
  }
`;

const CardIndex = styled(motion.div)`
  display: flex;
  justify-content: center;
`;

const ContainerNew = styled(motion.div)`
  padding-top: 2rem;

  h2 {
    text-align: center;
    font-size: 3rem;
    margin-bottom: 1.5rem;
  }
`;

const CardNew = styled(motion.div)`
  display: flex;
  justify-content: center;
`;

const CardItself = styled(motion.div)`
  width: 90%;
`;

const ContainerTop = styled(motion.div)`
  padding-top: 5rem;

  h2 {
    text-align: center;
    font-size: 3rem;
    margin-bottom: 1.5rem;
  }
`;

const CardTop = styled(motion.div)`
  display: flex;
  margin-bottom: 5rem;
  justify-content: center;
`;

const ButtonScroll = styled.button`
  position: fixed;
  bottom: 3rem;
  right: 1.75rem;
  z-index: 50;
  padding: 1rem;
  cursor: pointer;
`;

