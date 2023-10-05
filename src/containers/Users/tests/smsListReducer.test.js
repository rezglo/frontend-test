import reducer, { smsListAction } from "../reducers/smsListReducer";

test("should return the initial state", () => {
  expect(reducer(undefined, { type: undefined })).toEqual({
    value: [],
  });
});

test("should handle to empty list", () => {
  const previousState = { value: {} };

  expect(
    reducer(previousState, smsListAction({ payload: "Run the tests" }))
  ).toEqual({ value: { payload: "Run the tests" } });
});

test("should handle a new value to user list", () => {
  const previousState = { value: "Run the tests" };

  expect(
    reducer(previousState, smsListAction({ payload: "Use Redux" }))
  ).toEqual({ value: { payload: "Use Redux" } });
});
