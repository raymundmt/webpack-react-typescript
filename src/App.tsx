import React from "react";
const App2 = React.lazy(() => import('remote/App'))

const App: React.FC = () => {
    return <>
        <div>Hello from Host Application!</div>
        <div><App2 /></div>
    </>
};

export default App