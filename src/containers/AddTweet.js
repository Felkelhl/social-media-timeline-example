import React, { useState, useRef } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { addTweet } from '../actions';

const AddTweetContainer = styled.div`
  background-color: #E8F5FD;
  padding: 10px 12px;
  border: 1px solid #f5f8fa;
  border-radius: 5px;
  margin: 10px 20px 0;
`;
const TweetForm = styled.form`
  display: flex;
  flex-direction: column;
`;
const TweetTextArea = styled.textarea`
  margin-top: 0em;
  background: #fff;
  border: solid #A4D9F9;
  border-width: ${props => props.textAreaSelected ? "2px": "1px"}
  border-radius: 8px;
  line-height: 20px;
  height: 60px;
  width: available;
  padding: 8px;
  font-size: 16px;
  resize: none;
  outline: none;
  overflow: scroll;
`;
const TweetButtonContainer = styled.div`
  display: flex
  justify-content: flex-end;
  padding: 8px 8px 0;
`;
const TweetButton = styled.button`
  background-color: #4AB3F4;
  border: 1px solid #1da1f2;
  border-radius: 100px;
  box-shadow: none;
  cursor: ${props => props.disabled ? 'default' : 'pointer'};
  color: white;
  font-size: 1rem;
  font-weight: 500;
  line-height: 20px;
  padding: 6px 16px;
  position: relative;
  text-align: center;
  white-space: nowrap;
  outline: none;
  opacity: ${props => props.disabled ? '.3' : '1'};

  :active {
    box-shadow: 0 0 0 2px #FFFFFF, 0 0 0 4px #4AB3F4;
    background-color: #1DA1F2;
    border-color: #1DA1F2;
    text-decoration: none;
  }
`;

const AddTweet = ({ dispatch }) => {
  // Use React Hooks since this is a function expression and not a class
  const [textAreaSelected, setTextAreaSelected] = useState(false);
  const [addTweetDisabled, setAddTweetDisabled] = useState(true);
  const input = useRef(null);

  const onSubmit = (event) => {
    event.preventDefault();
    if ( !input.current.value.trim() ) {
      return;
    }
    dispatch(addTweet(input.current.value));
    input.current.value = '';
    setAddTweetDisabled(true);
  }

  /**
   * Enable the submit button if the text length for the tweet is more than 0.
   * Disable the submit button if the text length for the tweet is 0.
   */
  const onChangeTextArea = () => {
    if( Boolean(input.current.value.trim().length) === addTweetDisabled ) { 
      setAddTweetDisabled( !Boolean(input.current.value.trim().length) ) 
    }
  }

  return (
    <AddTweetContainer id="addTweetContainer">
      <TweetForm onSubmit={event => onSubmit(event)}>
        <TweetTextArea 
          placeholder="What's on your mind?"
          ref={input} 
          type="text"
          onChange={onChangeTextArea}
          onFocus={() => setTextAreaSelected(true)}
          onBlur={() => setTextAreaSelected(false)}
          textAreaSelected={textAreaSelected}
        />
        <TweetButtonContainer>
          <TweetButton type="submit" disabled={addTweetDisabled}>
            Tweet
          </TweetButton>
        </TweetButtonContainer>
      </TweetForm>
    </AddTweetContainer>
  );
};

export default connect()(AddTweet);
