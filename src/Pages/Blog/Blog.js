import React from "react";

const Blog = () => {
  return (
    <div>
      <h2 className="text-4xl text-success my-6 text-center">This is blog</h2>
      <div className="my-4 card shadow-lg w-1/2 p-8 mx-auto">
        <h5 className="card-title">
          What are the different ways to manage a state in a React application?
        </h5>
        <ul className="card-body">
          <li>
            By using <code>useState</code> hook state can be manage
          </li>
          <li>By using context state can be managed through components</li>
          <li>
            By using props drilling state can be manage component to components
          </li>
        </ul>
      </div>
      <div className="my-4 card shadow-lg w-1/2 p-8 mx-auto">
        <h5 className="card-title">How does prototypical inheritance work?</h5>
        <p className="card-body">
          The Prototypal Inheritance is a feature in javascript used to add
          methods and properties in objects. It is a method by which an object
          can inherit the properties and methods of another object.
          Traditionally, in order to get and set the [[Prototype]] of an object,
          we use Object. getPrototypeOf and Object
        </p>
      </div>
      <div className="my-4 card shadow-lg w-1/2 p-8 mx-auto">
        <h5 className="card-title">
          What is a unit test? Why should we write unit tests?
        </h5>
        <p className="card-body">
          <span>
            Unit testing is a software development process in which the smallest
            testable parts of an application, called units, are individually and
            independently scrutinized for proper operation.
          </span>
          The main objective of unit testing is to isolate written code to test
          and determine if it works as intended. Unit testing is an important
          step in the development process, because if done correctly, it can
          help detect early flaws in code which may be more difficult to find in
          later testing stages.
        </p>
      </div>
      <div className="my-4 card shadow-lg w-1/2 p-8 mx-auto">
        <h5 className="card-title">React vs Angular vs Vue</h5>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Comparison</th>
                <th>Angular</th>
                <th>React</th>
                <th>Vue</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>1</th>
                <td>Complexity</td>
                <td>High</td>
                <td>medium</td>
                <td>easy</td>
              </tr>

              <tr>
                <th>2</th>
                <td>Load time</td>
                <td>High</td>
                <td>Medium</td>
                <td>Easy</td>
              </tr>

              <tr>
                <th>3</th>
                <td>Used by</td>
                <td>Google, Wix</td>
                <td>Facebook,Uber</td>
                <td>Alibaba,Gitlab</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Blog;
