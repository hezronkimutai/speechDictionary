import React from 'react';
import { shallow } from 'enzyme';
import AddTerm from '../components/AddTerm';
import configureStore from 'redux-mock-store';

const mockStore = configureStore([]);
const initialState = {}; 
let wrapper;
let store;
describe('First React component test with Enzyme', () => {
  beforeEach(() => {  
    store = mockStore(initialState)
    wrapper = shallow(<AddTerm store={store}/>)
   })
 
   it('renders without crashing', () => {
    {wrapper}
    });
});



