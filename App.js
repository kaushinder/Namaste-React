/*
*
*
<div id="parent">
    <div id="child">
        <h1>I'm an h1 Tag</h1>
        <h2>I'm an h2 Tag</h2>
    </div>
    <div id="child2">
        <h1>I'm an h1 Tag</h1>
        <h2>I'm an h2 Tag</h2>
    </div>
</div>

* ReactElement(object) => HTML(browser understand)
*
*/


const parent = React.createElement("div",
    {id: "parent"},[
    React.createElement("div", {id: "child"},[
        React.createElement("h1", {}, "I'm a h1 Tag"),
        React.createElement("h2", {}, "I'm a h2 Tag")
    ]),
    React.createElement("div", {id: "child"},[
        React.createElement("h1", {}, "I'm a h1 Tag"),
        React.createElement("h2", {}, "I'm a h2 Tag")
    ])
]);


// JSX

console.log(parent); // object

const root = ReactDOM.createRoot(document.getElementById("header"));
        
root.render(parent);