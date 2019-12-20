import React from 'react';
import { shallow } from 'enzyme';
import AllHistory from '../components/current/AllHistory';
import configureStore from 'redux-mock-store';

const mockStore = configureStore([]);
const initialState = {}; 
let wrapper;
let store;
describe('First React component test with Enzyme', () => {
  beforeEach(() => {  
    store = mockStore(initialState)
    wrapper = shallow(<AllHistory store={store}/>)
   })
 
   it('renders without crashing', () => {
    {wrapper}
    });
});
