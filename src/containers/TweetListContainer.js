import { connect } from 'react-redux';
import withImmutablePropsToJS from 'with-immutable-props-to-js'

import TweetList from '../components/TweetList';

const mapStateToProps = state => ({
  tweets: state.get('tweets')
})

/**
 * https://redux.js.org/recipes/using-immutablejs-with-redux#use-a-higher-order-component-to-convert-your-smart-component-s-immutablejs-props-to-your-dumb-component-s-javascript-props
 * Use withImmutablePropsToJS to pass the props of this smart component, TweetListContainer, to the dumb component, TweetList
 */
export default connect(mapStateToProps)(withImmutablePropsToJS(TweetList))