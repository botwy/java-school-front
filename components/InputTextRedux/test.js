// Эти данные скопированиы с консоли

import {fromJS} from 'immutable';
import reducers from './reducer';

const filterNode = (state) => fromJS(state.app);

describe('InputTextRedux', () => {

  const prevState = filterNode({ app: {} });
  const action = { type: 'SET_COUNT_COUNT0', payload: '1', node: 'count0' };
  const nextState = reducers(prevState, action);



  it('reducers', () => {

    const state = filterNode({ app: { count0: '1' } });
    expect(true).toEqual(nextState.equals(state));

  });


});

