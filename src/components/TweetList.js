import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Tweet from './Tweet';

const TweetListStyled = styled.div`
  display: flex;
  flex-direction: column-reverse;
`;

const TweetList = ({ tweets }) => (
  <TweetListStyled>
    {tweets.map( tweet =>
      <Tweet
        key={tweet.id}
        id={tweet.id}
        content={tweet.content}
      />
    )}
  </TweetListStyled>
);

TweetList.propTypes = {
  tweets: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    content: PropTypes.string.isRequired
  }).isRequired).isRequired,
};

export default TweetList;