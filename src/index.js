import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import APIKEY from './../config';
// Create a new component. This component should produce some HTML.

const API_KEY = APIKEY.YOUTUBE_API_KEY;
// const vs var : 
//  - they both declare a variable, but with const, we are saying 
//    that this is the final value of this variable. Therefore we call it constant.
// const App = function() { 
//   return <div>Hi!</div>; 
// }

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('surfboards');
  }

  videoSearch(term) {
    // *** Downwards Data Flow : We want the most parent component to be responsible for fetching the data. ***
    YTSearch({key: API_KEY, term: term}, (videos) => {
      // when we have a key and a value of the same terms, we can use new ES6 syntax.
      //this.setState({videos}); //this.setState({videos: videos})
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    return (
      <div>
        <SearchBar onSearchTermChange={term => this.videoSearch(term)} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList 
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos} />
      </div>
    );
  }
}

// jsx : 
//    - the HTML in the function is what is referred as jsx. 
//    - jsx is a subset of javascript that allow us to write what looks like HTML
//      inside our javascript. (but is really, behind the scene, javascript) 

// Take this component's generated HTML and put it on the page (DOM)

ReactDOM.render(<App />, document.querySelector('.container'));



// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';

// import App from './components/app';
// import reducers from './reducers';

// const createStoreWithMiddleware = applyMiddleware()(createStore);

// ReactDOM.render(
//   <Provider store={createStoreWithMiddleware(reducers)}>
//     <App />
//   </Provider>
//   , document.querySelector('.container'));
