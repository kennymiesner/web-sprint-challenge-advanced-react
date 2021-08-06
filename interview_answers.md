# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What are the main differences between a stateful and a functional component?

Stateful components keep track of changing data, while functional components print out what is given to them via props, or they always render the same thing.

2. When does a componentWillMount function be called? What about a componentWillUpdate?

`componentWillMount` is a a lifecycle method of React library that is executed inside components right before the component gets attached to the DOM. It is generally used to update the state value right before the component is rendered to the DOM. `componentWillUpdate` is a method that is called once we have determined that we need to re-render in our Update phase. It is passed two arguments: `nextProps` and `nextState`. Just like `componentWillMount`, `componentWillUpdate` is called before `render`.

3. Define stateful logic.

Stateful logic is logic that is built into a component, usually dealing with state within the component. It can be a function that handles a click event, a function that sets toggle state, or maybe even a function that formats data before it gets displayed.

4. What are the three step of creating a successful test? What is done in each phase?

The three steps of creating a successful test are Arrange, Act, and Assert. Arrange initializes objects and sets the value of the data that is passed to the method under test. Act invokes the method under test with the arranged parameters. Assert verifies that the action of the method under test behaves as expected.
