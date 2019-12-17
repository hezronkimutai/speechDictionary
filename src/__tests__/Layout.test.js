import React from 'react';
import { shallow } from 'enzyme';
import Layout from '../components/Layout';
import configureStore from 'redux-mock-store';

const mockStore = configureStore([]);
const initialState = {}; 
let wrapper;
let store;
describe('First React component test with Enzyme', () => {
  beforeEach(() => {  
    store = mockStore(initialState)
    wrapper = shallow(<Layout store={store}/>)
   })
 
   it('renders without crashing', () => {
    {wrapper}
    });
});
