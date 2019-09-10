import React from 'react';
import Story from './Story';


class StoriesContainer extends React.Component{

    constructor(props){
        super(props);
        this.state ={
            stories: [],  
        };  
    }
    //make a call to an API and fetch id's of top 100 stories
    StoriesApi() {
        //Initialize new request
        const request = new XMLHttpRequest();
        request.open('GET','https://hacker-news.firebaseio.com/v0/topstories.json');
        //Callback function for when requests completes
        request.onload = () => {
            //extarct JSON data from request
            const data = JSON.parse(request.responseText);
            const data100 = data.slice(0,100);
            this.setState({stories:data100});
        }
        request.send();   
    }
    
    //after component renders call api and fetch the info 
    componentDidMount() {  
        this.StoriesApi(); 
    }

    render(){
        return(
             <div className="mainBox"> 
                {this.state.stories.map((storyId) => (
                    <Story  storyId = {storyId} />
                ))} 
              </div>    
        );
    };    
}

export default StoriesContainer;