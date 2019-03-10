import { Map, List } from 'immutable';

export const initialTweet = List([
  Map({
    id: 0, 
    content: "Hello World! This is a Social Media Timeline Example built using React with Redux and ImmutableJS!"
  })
]);

const tweets = (state = initialTweet, action) => {
  switch (action.type) {
    case 'ADD_TWEET':
      return state.push( 
        Map({
          id: state.reduce((maxId, tweets) => Math.max(tweets.get('id'), maxId), -1) + 1,
          content: action.content
        })
      );
    default:
      return state
  }
};

export default tweets;