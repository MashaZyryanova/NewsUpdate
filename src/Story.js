import React from 'react';
import StoryDetails from './StoryDetails';


class Story extends React.Component {
    constructor(props){
        super(props);
        this.state ={
             story: [{id: 12345, title:"", score: 99}],
             isBookmarked: false,   
        };  
    }
    
    StoryApi(storyId){
        const request = new XMLHttpRequest();
        const storyUrl = "https://hacker-news.firebaseio.com/v0/item/"+storyId+".json";
        request.open('GET',storyUrl);
        request.onload = () => {  
            const storyData = JSON.parse(request.responseText);
            this.setState({story:storyData});   
        }
        request.send();
    }
  
    componentDidMount() {
        this.StoryApi( this.props.storyId);  
    }
    render(){ 
        return (
             <StoryDetails story = {this.state.story} storyId = {this.props.storyId}/> 
        );
    }
}

 export default Story;
