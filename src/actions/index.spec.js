import * as actions from './index';

describe('tweet actions', () => {
  it('addTweet should create ADD_TWEET action', () => {
    expect(actions.addTweet('Create Action Using Redux')).toEqual({
      type: 'ADD_TWEET',
      content: 'Create Action Using Redux'
    })
  })
});