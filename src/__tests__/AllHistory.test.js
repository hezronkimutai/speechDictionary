import React from 'react';
import { shallow,mount } from 'enzyme';
import AllHistory from '../components/current/AllHistory';
import configureStore from 'redux-mock-store';

const mockStore = configureStore([]);
const initialState = {}; 
let wrapper;
let store;
describe('First React component test with Enzyme', () => {
  beforeEach(() => {  
    store = mockStore(initialState)
    wrapper = mount(<AllHistory store={store}/>)
   })
 
   it('renders without crashing', () => {
    {wrapper}
    });
});
