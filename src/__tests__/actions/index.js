import { addTerm, addInput, addCurrentId } from "../../redux/actions";
import { ADD_TERM, ADD_INPUT, ADD_CURRENT_ID } from "../../redux/actionTypes";
describe("Test actions", () => {
  it("Should handle adding a term", () => {
    const content = { list: [{ word: "word" }] };
    const newState = addTerm(content);
    expect(newState).toEqual({
      payload: {
        content: {
          list: [
            {
              word: "word"
            }
          ]
        },
        id: "word"
      },
      type: "ADD_TERM"
    });
  });
  it("Should handle adding input", () => {
    const newState = addInput("word");
    expect(newState).toEqual({
      type: ADD_INPUT,
      payload: { content: "word" }
    });
  });
});
