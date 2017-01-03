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
    }
    
    render() {
        //return <input onChange={this.onInputChange} />;
        //return <input onChange={(event) => console.log(event.target.value)} />;
        return  (
            <div>
                <input onChange={(event) => this.setState({ term: event.target.value})} />
                Value of the input: {this.state.term}
            </div>
        );
    }

    // onInputChange(event) {
    //     console.log(event.target.value);
    // }
}


export default SearchBar;