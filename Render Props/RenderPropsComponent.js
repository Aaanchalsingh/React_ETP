import React, { useState } from 'react';

function RenderPropsComponent(props) {
    const [count, setCount]=useState(0);

    const incrementCount=() => {
        setCount(count+1);
    };
    return <div>{props.children(count, incrementCount)}</div>;
}

export default RenderPropsComponent;
