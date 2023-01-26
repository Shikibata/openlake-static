import styled from '@emotion/styled';
import Image from 'next/image';
import { FaEthereum } from 'react-icons/fa';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Autoplay, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function SearchResults() {
  const [nft, setNft] = useState([]);
  const router = useRouter();


  const fetchCards = async () => {
    const search = localStorage.getItem('search');
    const data = await axios.get(
      `https://openlake-rr6xf.ondigitalocean.app/openlake-api/search/${search}`
    );
    setNft(data.data);
  };
  if (typeof window !== 'undefined') {
    var local = localStorage.getItem('search')
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      fetchCards();
    },[local] );
  }



  const mapCardPopular = () => {
    return nft.map((nfti, id) => (
      <Container key={id} href="explore/id">
        <CardTop>
          <Hidden>
            <NameNft>{nfti.name}</NameNft>
            <NameArt>{nfti.name}</NameArt>
          </Hidden>
          <ClickHolder
            href={{ pathname: `/explore/[id]`, query: { id: nfti._id } }}
          >
            <ImageHolder style={{ backgroundImage: `url(${nfti.image})` }} />
          </ClickHolder>{' '}
        </CardTop>
        <CardBottom>
          <Creator>{nfti.creator}</Creator>
          <Creator>{nfti.title}</Creator>
          <Price>
            <FaEthereum />
            {nfti.price} ETH
          </Price>
        </CardBottom>
      </Container>
    ));
  };

  return <ContainerAll>{mapCardPopular()}</ContainerAll>;
}

const ContainerAll = styled.div`
  display:flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 360px;
  min-width: 100vw;
  margin-top: 50px;

  @media (min-width: 540px) {
    min-width: 240px;
  }
`;

const ClickHolder = styled(Link)``;

const ImageHolder = styled.div`
  border-radius: 10px 10px 0px 0px;
  position: relative;
  bottom: 242px;
  z-index: 0;
  height: 252px;
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-clip: border-box;
  background-position: center center;

  @media (min-width: 540px) {
    width: 240px;
    right: 20px;
  }

  :hover {
    opacity: 0.65;
  }
`;

const CardTop = styled.div`
  width: 100%;
  height: 70%;
  border-radius: 20px;
  padding: 10px;
`;

const Hidden = styled.div`
  width: 100%;
  height: 100%;
`;

const NameNft = styled.div``;

const NameArt = styled.div`
  position: relative;
  bottom: -195px;
`;

const CardBottom = styled.div`
  height: 30%;
  display: flex;
  flex-direction: column;
  background-color: var(--fading-bg);
  border-radius: 0px 0px 10px 10px;
  align-items: baseline;
  justify-content: space-between;
  padding: 1rem 1rem;
  width: 100%;
  margin: 0px 10px;

  @media (min-width: 540px) {
    width: 240px;
    margin-left: -10px;
  }
  a {
    cursor: pointer;
    z-index: 9999;
    color: red;
  }
`;

const Creator = styled.div``;

const Price = styled.span``;
