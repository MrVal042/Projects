import {Action, Middleware} from 'redux';

import {hideCTA, showCTA} from '../actions';

interface State {
  type: typeof showCTA.type | typeof hideCTA.type;

  payload: CTAtState;
}

const cta: Middleware =
  ({dispatch}) =>
  next =>
  (action: State| any): Action | void | any => {
    if (action.type !== showCTA.type) {
      return next(action);
    }

    const {message, visible, type} = action.payload;

    console.log(message, visible, type);

    setTimeout(() => {
      dispatch(hideCTA());
    }, 5000);

    return next(action);
  };

export default cta;
