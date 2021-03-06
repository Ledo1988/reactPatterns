/* 1. Function component */

// Wrong
class Greeting extends React.Component {
  render() {
    return (
      <div>
        <h1>Hi {this.props.name}!</h1>
        <h2>I work as a {this.props.position}</h2>
      </div>
    );
  }
};

// Correct
const Greeting = (props) => (
  <div>
    <h1>Hi {props.name}!</h1>
    <h2>I work as a {props.position}</h2>
  </div>
);

/* 2. Destructuring props */

// Wrong
const Greeting = (props) => (
  <div>
    <h1>Hi {props.name}!</h1>
  	<h2>I work as a {props.position}</h2>
  </div>
);

// Correct
const Greeting = ({ name, position }) => (
  <div>
    <h1>Hi {name}!</h1>
    <h2>I work as a {position}</h2>
  </div>
);

// Default values for props
const Greeting = (props) => {
  const { name = '', position = '' } = this.props;
  
  return ( 
    <div>
      <h1>Hi {name}!</h1>
      <h2>I work as a {position}</h2>
    </div>
  )
};

/* 3. JSX spread attributes */

// Example of component props
<Greeting
  name="Jack"
  position="Front-end Developer"
  dataName="position"
  onClick={showFunction}
  currentId="personPosition"
/>
    
//REST
const Greeting = ({name, position, ...restProps }) => {  
    <div>
      <h1>Hi {name}!</h1>
      <h2>I work as a {position}</h2>
      <NewElem {...restProps}/>
    </div>
);
  
/* 4. Merge destructured props with other values */

// Example of custom props
<Greeting
  name="Jack"
  position="Front-end Developer"
  className="new-class"
/>

const Greeting = ({ name, position, ...restProps }) => (
  <div>
    <h1>Hi {name}!</h1>
    <h2 className="old-class" {...restProps}>I work as a {position}</h2>
  </div>
);

/* 5. Conditional rendering */

// Render if 'true'
const Greeting = ({ name, position }) => (
  <div>
    {name && <h1>Hi {name}!</h1>}
    <h2>I work as a {position}</h2>
  </div>
);

// Render if 'false'
const Greeting = ({ name }) => (
  <div>
    <h1>Hi {name}!</h1>
    {position || <h2>I work as a Developer</h2>}
  </div>
);

// Ternary operator
const Greeting = ({ name, position }) => (
  <div>
    {name ? <h1>Hi {name}!</h1> : <span>No name</span>}
    <h2>I work as a {position}</h2>
  </div>
);

/* 6. Component as Props */

<LayoutComponent
  top={<Navigation />}
  leftSide={<SideBar />}
  rightSide={<Main />}
  bottom={<Footer />}
/>
    
const LayoutComponent = ({ top, leftSide, rightSide, bottom }) => (
  <div>
    {top}
    {leftSide}
    {rightSide}
    {bottom}
  </div>
);

/* 7. Modern Class syntax */

// Old version
class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {};
};

// Modern
class Counter extends React.Component {
  state = {
    counter: 0,
  }

  handleClick = () => {};
};

/* 8. Array as children */

// Wrong
const List = () => (
  <ul>
    <li>first</li>
    <li>second</li>
  </ul>
);

// Correct
const List = () => (
  <ul>
    {["first", "second"].map(item => <li key={item}>{item}</li>)}
  </ul>
);

/* 9. Fragment */

// Possible
const Greeting = ({ name, position }) => (
  <div>
    <h1>Hi {name}!</h1>
    <h2>I work as a {position}</h2>
  </div>
);

// Use Fragment
import { Fragment } from 'react';

const Greeting = ({ name, position }) => (
  <Fragment>
    <h1>Hi {name}!</h1>
    <h2>I work as a {position}</h2>
  </Fragment>
);

// Much better
const Greeting = ({ name, position }) => (
  <>
    <h1>Hi {name}!</h1>
    <h2>I work as a {position}</h2>
  </>
);

/* 10. Return Array */

const Layout = ({ children }) => [
  <Navigation key="navigation" />,
  <Main key="main">{children}</Main>,
  <Footer key="footer" />,
];

// Example with children
const App = () => {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Layout>
        <p>Layout child</p>
      </Layout>
    </div>
  );
}

const Layout = ({ children }) => [
  <div key={1}>One</div>,
  <div key={2}>{children}</div>,
  <div key={3}>Three</div>
];

/* 11. setState and 2nd argument */

handleChange = () => {
  this.setState({ someValue: this.state.someValue + 1 },
    () => { this.callbackFunc(this.state.someValue)
  });
};

/* 12. Proxy component */

// Not good
<button type="button"></button>

// Instead create component
const Button = (props) => <button type="button" {...props} />

// And use component everywhere
<Button />

/* 13. Event switch */

// A lot of methods
handleClick() => { this.doSomething() };
handleMouseEnter() { this.setState({ hovered: true }) };
handleMouseLeave() { this.setState({ hovered: false }) };

// One Event switch
handleEvent({ type }) {
  switch(type) {
    case "click": return this.doSomething();
    case "mouseenter": return this.setState({ hovered: true });
    case "mouseenter": return this.setState({ hovered: false });
    default: return console.warn(`No case for event type ${type}`);
  }
};
