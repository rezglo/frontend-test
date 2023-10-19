import reducer, { usersListAction } from "../reducers/userListReducer";

test("should return the initial state", () => {
  expect(reducer(undefined, { type: undefined })).toEqual({
    value: [],
  });
});

test("should handle to empty list", () => {
  const previousState = { value: {} };

  expect(
    reducer(previousState, usersListAction({ payload: "Run the tests" }))
  ).toEqual({ value: { payload: "Run the tests" } });
});

test("should handle a new value to user list", () => {
  const previousState = { value: "Run the tests" };

  expect(
    reducer(previousState, usersListAction({ payload: "Use Redux" }))
  ).toEqual({ value: { payload: "Use Redux" } });
});
