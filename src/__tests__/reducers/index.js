import reducer from "../../redux/reducers/terms";

describe("Test actions", () => {
  it("Should handle adding a term", () => {
    expect(reducer({},{
        type: "ADD_INPUT",
        payload: { content: "word" }
      })).toEqual({"input": "word"});
  expect(reducer({content: "word"},{
    type: "ADD_CURRENT_ID",
    payload: []
  })).toEqual( {"content": "word", "currentId": undefined});
});
expect(reducer({},{content: "word",id:90},{
    type: "ADD_TERM",
    payload: []
  })).toEqual( {});
});
