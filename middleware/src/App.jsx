import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { fetchPosts } from '../actions';
import rootReducer from '../reducers';

// Custom middleware for logging actions and state changes
const loggerMiddleware = (store) => (next) => (action) => {
  console.log('Dispatching action:', action);
  const result = next(action);
  console.log('Next state:', store.getState());
  return result;
};

// Create store with middleware applied
const store = createStore(rootReducer, applyMiddleware(loggerMiddleware));

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  // Render component...
  return (
    <div>
      {/* Your app content goes here */}
      <h1>Welcome to my Todo List App</h1>
      <p>This is where you can add your Todo List components, such as TodoForm and TodoList.</p>
    </div>
  );
}

export default App;
