import React from 'react';
import { shallow,mount } from 'enzyme';
import AllTimeTerm from '../components/history/AllTimeTerm';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
const mockStore = configureStore([]);
const initialState = {}; 
let wrapper;
let store;
describe('First React component test with Enzyme', () => {
  beforeEach(() => {  
    store = mockStore(initialState)
    wrapper = mount(<Provider store={store}><AllTimeTerm term={{id:90,content:{ list:[{definition:'definition'}]}}} /></Provider>)
   })
 
   it('renders without crashing', () => {
    {wrapper}
    });
});
