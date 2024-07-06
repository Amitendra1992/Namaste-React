
// let heading = React.createElement("h1", {id: "head"}, "Hello World from React!");

let parent= React.createElement("div", {id: "parent"}, 
            [React.createElement("div", {id: "child"}, [React.createElement("h1", {}, "I am an h1 tag"), React.createElement("p", {}, "I am an paragraph")]), React.createElement("div", {id: "child"}, [React.createElement("h1", {}, "I am an h1 tag"), React.createElement("p", {}, "I am an paragraph")])]);

let root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);