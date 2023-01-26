import styled from '@emotion/styled';
import Link from 'next/link';
import Image from 'next/image';
import Theme from '../../../components/navigation/header/Theme';
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';


export default function Index() {
  const router = useRouter();
  const Form = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [login, setLogin] = useState(false);

    const configuration = {
      method: 'post',
      url: 'https://openlake-rr6xf.ondigitalocean.app/openlake-api/auth',
      data: {
        email,
        password,
      },
      withCredentials: true,
    };

    const handleSubmit = (e) => {
      // prevent the form from refreshing the whole page
      e.preventDefault();
      axios(configuration)
        .then((result) => {
          const profileId = result.data.data.UserInfo.profile_id;
          const userId = result.data.data.UserInfo.id;
          localStorage.setItem('profile_id', `${profileId}`);
          localStorage.setItem('user_id', `${userId}`);
          setLogin(true);
          router.push('/');
        })
        .catch((error) => {
          console.log(error.response, email, password);
        });
    };

    return (
      <FormContainer>
        <label htmlFor="email" onSubmit={(e) => handleSubmit(e)}>
          Email{' '}
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" onClick={(e) => handleSubmit(e)}>
          Login
        </button>
        <a href={'/user/signup'}>Don't have an account already ?</a>
        {login ? (
          <p className="text-success">You Are Logged in Successfully</p>
        ) : (
          <p className="text-danger">You Are Not Logged in</p>
        )}
      </FormContainer>
    );
  };

  return (
    <Container>
      <ThemeSelector>
        <Theme />
      </ThemeSelector>
      <LeftContainer>
        <Logo>
          <Link href={'/'}>
            <Image
              priority
              src={'/assets/logo.svg'}
              height={60}
              width={60}
              alt=""
            />
          </Link>
        </Logo>
      </LeftContainer>
      <RightContainer>
        <FormTextAbove>
          <h3>Get on the boat</h3>
          <span>Login and explore the awesome world of OpenLake !</span>
        </FormTextAbove>
        <Form />
      </RightContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  -webkit-box-flex: 1;
  flex-grow: 1;
  max-width: 1920px;
`;

const LeftContainer = styled.div`
  position: relative;
  left: 0;
  top: 0;
  bottom: 0;
  z-index: 1;
  width: 600px;
  background-image: url('/assets/loginpage.jpeg');
  background-size: cover;
  background-position: center;
  display: none;

  @media (min-width: 768px) {
    display: block;
    width: 35%;
    background-image: url('/assets/loginpage.jpeg');
    background-size: cover;
    background-position: center center;
  }
`;

const Logo = styled.div`
  margin-left: 2rem;
  display: flex;
  align-items: center;
  height: 70px;
  flex-flow: row nowrap;
`;

const RightContainer = styled.div`
  margin: auto 0;
  width: 100%;

  @media (min-width: 578px) {
    max-width: 75%;
    margin: 125px auto;
  }

  @media (min-width: 912px) {
    padding: 0px 100px;
    max-width: 686px;
  }
`;
const FormContainer = styled.form`
  display: table;
  min-width: 350px;
  margin: 0 auto;
  padding: 1rem;

  label {
    display: table;
    width: 100%;
    margin-bottom: 0.7rem;
    color: var(--fg);
  }
  input {
    display: table;
    width: 100%;
    padding: 0.5rem;
    border-radius: 0.25rem;
    margin-bottom: 1.4rem;
    border: none;
    background-color: var(--fading-bg);
  }
  input:focus {
    outline-color: var(--main);
  }

  button {
    display: table;
    width: 100%;
    padding: 0.5rem;
    border: none;
    border-radius: 0.25rem;
    box-sizing: border-box;
    background-color: var(--main);
    color: #fff;
    cursor: pointer;
    margin-bottom: 1rem;
  }

  button:hover {
    background-color: var(--fg);
    color: var(--bg);
  }

  a {
    margin-top: 15px;
  }
  a:hover {
    color: var(--main);
  }
`;

const FormTextAbove = styled.div`
  display: flex;
  flex-direction: column;
  h3 {
    font-size: 40px;
    line-height: 46px;
    font-weight: 700;
    margin-bottom: 14px;
    text-align: center;
  }

  span {
    margin: 20px auto;
  }
`;

const ThemeSelector = styled.div`
  position: absolute;
  right: 10px;
  top: 14px;
  @media (min-width: 768px) {
    right: -15px;
  }
`;
