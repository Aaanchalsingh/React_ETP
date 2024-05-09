import React from 'react';
import RenderPropsComponent from './RenderPropsComponent';

function App() {
  return (
    <div>
      {/* Use RenderPropsComponent and pass a function as children */}
      <RenderPropsComponent>
        {(count, incrementCount) => (
          <div>
            <p>Count: {count}</p>
            <button onClick={incrementCount}>Increment</button>
          </div>
        )}
      </RenderPropsComponent>
    </div>
  );
}

export default App;
