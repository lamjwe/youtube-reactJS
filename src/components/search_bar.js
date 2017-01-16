import React, { Component } from 'react';

 // functional component - some information goes in and some jsx comes out. 
// const SearchBar = () => {
//     return <input />
// }

// class component - used when we want our component to have some type of internal record keeping.
// we want to use class component here since we may want to keep track of when the user change the input. 

// functional component : "dumb component" - a function that we could call and it will return some jsx. 
//                          No ability to be aware of its surroundings or state or the ability to communitcate with
//                          other components effectively. 
// class component : Allow us to communicate with other components more effectively. (ex. say something like "User just 
//                  typed in here" or "here is what the user just typed")

// class SearchBar extends React.Component{
class SearchBar extends Component { // creates a new class call SearchBar and give it access to all of the functionality that React.Component has.
    constructor(props) { // only class component have states. 
        super(props);

        this.state = { term: ''};

        // State is a plain javascipt object that exist on any component that is a class based component. 
        // Each instance of a class based component has its own copy of state. 
        // We initialize the state by defining the constructor method and setting the state as "this.state" inside of it.
        // In this case, the name of the first property is 'term'.  
    }
    
    render() {
        /**
         * ONLY manipulate state by using "this.stateState(...)". NEVER use "this.state.term = ..." to manipulate state
         * except in the constructor. Using "this.stateState(...)" allows us to maintain continuity. Behind the scene react 
         * is doing a tremendous of stuff to the state object. If we just do "this.state.term = ...", React doesn't really know
         * the value changed. Therefore, use "this.stateState(...)" to inform React, the state is changing and here is what the new
         * state is. "this.stateState(...)" cause the component to automatically to re-render. 
         */
        return  (
            <div className="search-bar">
                <input 
                    value = {this.state.term} 
                    onChange={(event) => this.setState({ term: event.target.value})} />
            </div>
        );

        // Controlled comopent have its value set by the state. 
    }

    // onInputChange(event) {
    //     console.log(event.target.value);
    // }
}


export default SearchBar;