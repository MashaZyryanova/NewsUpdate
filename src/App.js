import React from 'react';

import {BrowserRouter as Router, Route} from 'react-router-dom';

import Bookmarks from './Bookmarks'
import StoriesContainer from './StoriesContainer.js';
import Nav from './Nav.js';

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import isLogged from './reducers1';
import rootReducer from './reducers';
import {combineReducers} from 'redux';
import { setBookmarks } from './actions';


const allReducers = combineReducers({
  book: rootReducer,
  isLogged: isLogged
});
//create Redux Store to manage the state of the application
const Store = createStore(
    allReducers, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

class App extends React.Component{
    constructor(props){
        super(props);
    };
  
    componentDidMount(){
   
        if (localStorage.ids_bookmarked_stories) {
            //get bookmarks from the local storage
            const BM = JSON.parse(localStorage.getItem('ids_bookmarked_stories'));
            //to do: catch and error if not able to load bookmarks

            //update state with bookmarks from local storage
            Store.dispatch(setBookmarks(BM));
        } 
        else
         {
            console.log("no bookmarks");
         }
        //save bookmarks to local storage before exiting the application
        window.addEventListener("beforeunload", () => localStorage.setItem('ids_bookmarked_stories',JSON.stringify(Store.getState().book))); 
        // Every time the state changes, log it
        // Note that subscribe() returns a function for unregistering the listener
        const unsubscribe = Store.subscribe(() => console.log(Store.getState()))
};

componentWillUnmount(){ 
     this.unsubscribe();
     window.removeEventListener('beforeunload', ()=>console.log("event listener removed"))  
}

render(){
    return (
        <Provider store={Store}> 
            <Router>
                <div>
                    <Nav/>
                    <Route path="/" exact component = {StoriesContainer}/>
                    <Route path="/my-bookmarks" exact component = {Bookmarks}/>
                </div>
            </Router>
        </Provider>
    );
};  
        
    
}

export default App;