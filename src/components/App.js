import React from 'react';
import styled from 'styled-components';

import Navbar from './Navbar';
import Profile from './Profile';
import AddTweet from '../containers/AddTweet';
import TweetListContainer from '../containers/TweetListContainer';

import './App.css';

const AppContainer = styled.div`
  min-height:100vh;
  background: #e6ecf0;
  overflow: hidden;
`;
const MainPageContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 6px auto;
  
  @media (max-width: 660px) {
    flex-wrap: wrap;
  }
`;
const TweetsContainer = styled.div`
  width: 100%;
  margin-right: 4%;
  
  @media (max-width: 660px) {
    margin-right: 0;
  }
`;

const App = () => (
  <AppContainer>
    <Navbar />
    <MainPageContainer>
      <Profile />
      <TweetsContainer>
        <AddTweet />
        <TweetListContainer />
      </TweetsContainer>
    </MainPageContainer>
  </AppContainer>
);

export default App;
