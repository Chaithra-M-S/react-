/* <div id='parent'>
  <div id='child1'>
    <h1></h1>
    <h2></h2>
    <h3></h3>
  </div>
  <div id='child2'>
    <h1></h1>
    <h2></h2>
    <h3></h3>
  </div>
</div> */ const heading = React.createElement('div', {
    id: 'parent'
}, [
    React.createElement('div', {
        id: 'child1'
    }, [
        React.createElement('h1', {}, "I amm h1 tag"),
        React.createElement('h2', {}, "I am h2 Tag"),
        React.createElement('h3', {}, "I am h3 Tag")
    ]),
    React.createElement('div', {
        id: 'child2'
    }, [
        React.createElement('h1', {}, "I am h1 tag"),
        React.createElement('h2', {}, "I am h2 Tag"),
        React.createElement('h3', {}, "I am h3 Tag")
    ])
]);
// const heading=React.createElement('h1',{id:'heading',xyz:"abc"},'Hello World From React !!');
console.log(heading); // cReatying the object
const root = ReactDOM.createRoot(document.getElementById('root'));
console.log(root);
root.render(heading);

//# sourceMappingURL=React.7c0ccee6.js.map
