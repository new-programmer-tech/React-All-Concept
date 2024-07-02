# REDUX AND REDUX TOOLKIT

- store :-

1.  used a global variable
2.  also know as single source of truth
3.  every application only have 1 store
4.

- reducer ( used when want to make any changes in store ) ->
- useDispatch

Here's why we use these commands:

- npm install @reduxjs/toolkit
  @reduxjs/toolkit: This package is the official, recommended way to write Redux logic. It simplifies Redux usage by providing utility functions that help reduce boilerplate code. It includes features like configureStore, createSlice, and createAsyncThunk, which make setting up and writing Redux logic more efficient and less error-prone.
  npm install react-redux

- react-redux: This package provides bindings to use Redux with React. It allows your React components to interact with the Redux store. With react-redux, you can connect your components to the Redux store using the Provider component and the useSelector and useDispatch hooks. This makes it easy to read state from the store and dispatch actions from your React components.
  By installing both of these packages, you get the tools you need to set up and use Redux effectively in a React application.

---

- ** imp points ** :-

1. useDispatchHooks use the reducer to make changes in the store

2. slice provide us the reducers
