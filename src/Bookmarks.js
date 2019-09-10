import React from 'react'
import Story from './Story'
import {useSelector} from 'react-redux';

function Bookmarks(props){
    
   let myBookmarks = useSelector( state => state.book)
  
        return (
       
            <div className="mainBox bookmarks">
                 {myBookmarks.map((storyId) => (
                   <Story storyId = {storyId} />
                 ))}
            </div>
    );
    
}

export default Bookmarks;