import styled from '@emotion/styled';
import Image from 'next/image';
import { FaEthereum } from 'react-icons/fa';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Autoplay, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link';
export default function CardPopular() {
  const [popular, setPopular] = useState([]);

  const fetchCards = async () => {
    const data = await axios.get('https://openlake-rr6xf.ondigitalocean.app/openlake-api/explore');

    setPopular(data.data.fivePopular);
  };
  useEffect(() => {
    fetchCards();
  }, []);

  const mapCardPopular = () => {
    return (
      <Swiper
        className={'.slider'}
        breakpoints={{
          // when window width is >= 540px
          340: {
            min: 540,
            slidesPerView: 1,
          },
          // when window width is >= 768px
          540: {
            width: 540,
            slidesPerView: 2,
          },
          780: {
            width: 780,
            slidesPerView: 3,
          },
          1024: {
            width: 1024,
            slidesPerView: 4,
          },
          1380: {
            width: 1380,
            slidesPerView: 5,
          },
        }}
        autoplay={{
          delay: 3500,
        }}
        spaceBetween={1}
        slidesPerView={4}
        pagination={{ clickable: true }}
        modules={[Autoplay, Pagination]}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {popular.map((nfti, id) => (
          <SwiperSlide key={`slide-${id}`}>
            <Container key={id}>
              <CardTop>
                <Hidden>
                  <NameNft>{nfti.name}</NameNft>
                  <NameArt>{nfti.name}</NameArt>
                </Hidden>
                <ClickHolder
                  href={{ pathname: `/explore/[id]`, query: { id: nfti._id } }}
                >
                  <ImageHolder
                    style={{ backgroundImage: `url(${nfti.image})` }}
                  />
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
          </SwiperSlide>
        ))}
      </Swiper>
    );
  };

  return <ContainerAll>{mapCardPopular()}</ContainerAll>;
}

const ContainerAll = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(1, 1fr);

  @media (min-width: 540px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 780px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 1024px) {
    display: flex;
    width: 93%;
    margin-left: auto;
    margin-right: auto;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 240px;
  height: 360px;
  margin: 20px;
`;

const ClickHolder = styled(Link)``;

const ImageHolder = styled.div`
  border-radius: 10px 10px 0px 0px;
  position: relative;
  bottom: 242px;
  right: 10px;
  z-index: 0;
  height: 252px;
  width: 240px;
  background-size: cover;
  background-repeat: no-repeat;
  background-clip: border-box;
  background-position: center center;

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
  width: 240px;
`;

const Creator = styled.div``;

const Price = styled.span``;
