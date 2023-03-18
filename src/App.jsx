import * as React from "react";

const title = "React";

const list = [
  {
    title: "React",
    url: "https://reactjs.org/",
    author: "Jordan Walke",
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: "Redux",
    url: "https://redux.js.org",
    author: "Dan Abramov, Andrew Clark",
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

const App = () => (
  <div>
    <h1>Hello {title}</h1>

    <Search />

    <hr />
    <List />
  </div>
);

const List = () => (
  <div>
    <ul>
      {list.map((item) => (
        <Item key={item.objectID} {...item} />
      ))}
    </ul>
  </div>
);

const Item = (props) => (
  <li key={props.objectID}>
    <span>
      <a href={props.url}>{props.title}</a>
    </span>
    <span>{props.author}</span>
    <span>{props.num_comments}</span>
    <span>{props.points}</span>
  </li>
);

const Search = () => (
  <div>
    <label htmlFor="search">Search: </label>
    <input id="search" type="text" />
  </div>
);

export default App;
