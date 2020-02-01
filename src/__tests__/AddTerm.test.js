import React from 'react';
import { shallow,mount } from 'enzyme';
import AddTerm from '../components/current/AddTerm';
import configureStore from 'redux-mock-store';

const mockStore = configureStore([]);
const initialState = {}; 
let wrapper;
let store;
describe('First React component test with Enzyme', () => {
  beforeEach(() => {  
    store = mockStore(initialState)
    wrapper = mount(<AddTerm terms={{input:'k'}} store={store}/>)
   })
 
   it('renders without crashing', () => {
     const inputField = wrapper.find('input')
     inputField.simulate('change')
     const form = wrapper.find('form')
     form.simulate('submit')
     expect(jest.fn().mock.calls).toBeDefined();
    {wrapper}
    });
});



