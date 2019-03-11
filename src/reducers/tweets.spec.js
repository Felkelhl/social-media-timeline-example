import tweetsReducers, { initialTweet } from './tweets'

import Immutable, { Map, List } from 'immutable';
import * as matchers from 'jest-immutable-matchers';

describe('tweets reducer', () => {
  beforeEach(function () {
    jest.addMatchers(matchers);
  });
  // Use toEqualImmutable for deep searching of the Immutable Object
  it('should handle initial state', () => {
    expect(
      tweetsReducers(initialTweet, {})
    ).toEqualImmutable(initialTweet)
  })

  it('should handle ADD_TWEET', () => {
    expect(Immutable.is(
      tweetsReducers(List([]), {
        type: 'ADD_TWEET',
        content: 'Run the tests'
      }),
      List([
        Map({
          id: 0,
          content: 'Run the tests'
        })
      ])
    )).toEqual(true)

    expect(Immutable.is(
      tweetsReducers(List([
        Map({
          id: 0,
          content: 'Run the tests'
        })
      ]), {
        type: 'ADD_TWEET',
        content: 'Using Immutablejs'
      }),
      List([
        Map({
          id: 0,
          content: 'Run the tests'
        }),
        Map({
          id: 1,
          content: 'Using Immutablejs'
        })
      ])
    )).toEqual(true)
  })

  /** 
   * Verify that deep searching of the Immutable objects is working properly 
   * for the testing script through the Immutable.is() function check 
   * by using different content string for the comparsion
   */
  it('should handle ADD_TWEET Test Spelling', () => {
    expect(Immutable.is(
      tweetsReducers(List([]), {
        type: 'ADD_TWEET',
        content: 'Run the tests'
      }),
      List([
        Map({
          id: 0,
          content: 'Run the tests. Misspelled'
        })
      ])
    )).toEqual(false)

    expect(Immutable.is(
      tweetsReducers(List([
        Map({
          id: 0,
          content: 'Run the tests'
        })
      ]), {
        type: 'ADD_TWEET',
        content: 'Using Immutablejs'
      }),
      List([
        Map({
          id: 0,
          content: 'Run the tests'
        }),
        Map({
          id: 1,
          content: 'Using Immutablejs. Misspelled'
        })
      ])
    )).toEqual(false)

  })
})
