import React from 'react';
import { shallow ,mount} from 'enzyme';
import AllTimeTermsHistory from '../components/history/AllTimeTermsHistory';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux'
const mockStore = configureStore([]);
const initialState = {}; 
let wrapper;
let store;
describe('First React component test with Enzyme', () => {
  beforeEach(() => {  
    store = mockStore(initialState)
    wrapper = mount(<Provider store={store}><AllTimeTermsHistory terms={{input:'k'}} /></Provider>)
   })
 
   it('renders without crashing', () => {
    {wrapper}
    });
});
