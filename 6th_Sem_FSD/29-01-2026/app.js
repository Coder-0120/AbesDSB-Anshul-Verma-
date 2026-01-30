console.log("Hello");

const parent = document.getElementById("container");
const root = ReactDOM.createRoot(parent);

root.render(React.createElement("h3", {}, "Loading..."));

setTimeout(() => {
    const h2 = React.createElement("h2", {}, "Welcome to React dev");
    const li1 = React.createElement("li", {}, "Java Programming");
    const li2 = React.createElement("li", {}, "C++ Programming");

    const ul = React.createElement("ul", {}, li1, li2);
    const div = React.createElement("div", {}, h2, ul);

    root.render(div);
}, 2000);