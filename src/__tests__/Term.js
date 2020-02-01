import React from "react";
import { shallow, mount } from "enzyme";
import CurrentTermDetails from "../components/current/Term";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
const mockStore = configureStore([]);
const initialState = { terms: [{ id: 9 }], currentId: 90 };
let wrapper;
let store;
describe("First React component test with Enzyme", () => {
  beforeEach(() => {
    store = mockStore(initialState);
    wrapper = mount(
      <Provider store={store}>
        <CurrentTermDetails
          term={{ example: "l/", definition: "/ki", written_on: "k" }}
        />
      </Provider>
    );
  });

  it("renders without crashing", () => {
    {
      wrapper;
    }
  });
});
