import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <div>
            <h3>How Does React works?</h3>
            <p>Ans:React basically maintains a tree for you. This tree is able to do efficient diff computations on the nodes.Think of your HTML code as a tree. In fact, that is exactly how the browser treats your DOM (your rendered HTML on the browser). React allows you to effectively re-construct your DOM in JavaScript and push only those changes to the DOM which have actually occurred.</p>
            </div>
            <div>
            <h3>Difference Between Props and State?</h3>
            <p>Ans:
            State:
The state is an updatable structure that is used to contain data or information about the component and can change over time. The change in state can happen as a response to user action or system event. It is the heart of the react component which determines the behavior of the component and how it will render.

Props:
Props are read-only components. It is an object which stores the value of attributes of a tag and work similar to the HTML attributes. It allows passing data from one component to other components. It is similar to function arguments and can be passed to the component the same way as arguments passed in a function. Props are immutable so we cannot modify the props from inside the component.
            </p>
            </div>
            <div>
            <h3>What can be done other than loading data with useEffect API?</h3>
            <p>Ans:
            A functional React component uses props and/or state to calculate the output. If the functional component makes calculations that don't target the output value, then these calculations are named side-effects.Examples of side-effects are fetch requests, manipulating DOM directly, using timer functions like setTimeout(), and more.The component rendering and side-effect logic are independent. It would be a mistake to perform side-effects directly in the body of the component, which is primarily used to compute the output.
            </p>
            </div>
        </div>
    );
};

export default Footer;