import React from 'react';
import { shallow,mount } from 'enzyme';
import App from '../App';
import {Provider} from 'react-redux'
import configureStore from 'redux-mock-store';
const mockStore = configureStore([]);
const initialState = {terms:[{id:9,},],currentId:90}; 
let wrapper;
let store;
describe('First React component test with Enzyme', () => {
   store = mockStore(initialState)
   test('renders without crashing', () => {
      expect(mount(<Provider store={store}><App /></Provider>)).toMatchSnapshot();
    });
});