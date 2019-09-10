import React from 'react';
import {PropTypes} from 'prop-types';
import heart from './heart.svg';
import Selected from './Selected.svg';
import {useSelector, useDispatch} from 'react-redux';
import {bookmark, unbookmark} from './actions'

function StoryDetails(props){

    let bookmarksIds = useSelector( state => state.book)
    let is_bookmarked = bookmarksIds.indexOf(props.storyId);
    
    //if the story is not in an array set is_bookmarked to false
    if (is_bookmarked < 0){
        is_bookmarked = false;
    }
    else{
        is_bookmarked = true;
    }
    const dispatch = useDispatch();
    
        return (
            <div className = {!is_bookmarked ? "box":"box bookmarked"}> 
               <div className="cover"> 
                    <h3 > 
                    <a target="_blank" className="storyHeading" href={props.story.url}>{props.story.title}</a>
                    </h3>
               </div>
               <div className = "details">
                    <div className = "detail">
                    <p className="storyAuthor">By: <span>{props.story.by}</span></p>
                    <p className="storyScore">Score: <span>{props.story.score}</span></p>
                </div>
               <button className="bookmark" onClick = {
                       !is_bookmarked  ?
                        () => dispatch(bookmark(props.storyId)):
                        () => dispatch(unbookmark(props.storyId))
                    
                    }>
                   
                    {!is_bookmarked ? 
                        
                        <img className="imgBookmark" src={heart}/> :
                        <img className="imgBookmark" src= {Selected} alt="not"/> 
                     }
                  
                </button>
             </div>
            </div>   
        );
    }

// StoryFun.propTypes = {
//     
//     story: storyType.isRequired
//     };

export default StoryDetails;
//export default connect(mapStateToProps)(Story)