const heading = React.createElement('div', { id: 'parent' }, [React.createElement('h2', { id: 'child1' }, "Hi this is the first child of div1"), React.createElement('h2', { id: 'child2' }, "Hi this is the second child of div1")]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading);