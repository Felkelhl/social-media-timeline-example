import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

const fade = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
const TweedCard = styled.div`
  border-bottom: 1px solid #e6ecf0;
  cursor: default;
  position: relative;
  min-height: 51px;
  padding: 9px 12px;
  margin: 10px 20px 0;
  background-color: #fff;
  box-shadow: 0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12);
  border-radius: 4px;
  animation: ${fade} .4s ease-out;
  
  @media (max-width: 660px) {
    margin: 0;
  }
`;
const TweetRow = styled.span`
  display: flex;
  width: 100%;
  -webkit-box-align: center;
  align-items: center;
`;
const ProfileInfo = styled.div`
  overflow: hidden;
  white-space: nowrap;
`;
const PrimaryInfo = styled.span`
  max-width: 100%;
  color: #14171a;
  margin-right: 4px;
`;
const SecondaryInfo = styled.span`
  font-size: 14px;
  color: #657786;
  white-space: nowrap;
`;
const TweetContent = styled.p`
  font-size: 14px;
  line-height: 20px;
  word-wrap: break-word;
  white-space: pre-wrap;
`;

const Tweet = ({ content }) => (
  <TweedCard>
    <TweetRow>
      <ProfileInfo>
        <PrimaryInfo>Benefitfocus User</PrimaryInfo>
        <SecondaryInfo>@Benefitfocus</SecondaryInfo>
      </ProfileInfo>
    </TweetRow>
    <TweetContent>
      { content }
    </TweetContent>
  </TweedCard>
)

Tweet.propTypes = {
  content: PropTypes.string.isRequired
}

export default Tweet
