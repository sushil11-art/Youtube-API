import React from 'react';
import SearchBar from './SearchBar';
import axios from 'axios';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

/// youtube api access gareko
const KEY='AIzaSyByuTqzzpR40FQ7JhYrXOwhxmOiUwZzQZE';

class App extends React.Component{
/// parmas ma specify vako paramters haru sbaia utube api ko document bata herera rakheko ho http response ko lagi
    state={videos:[],selectedVideo:null};
    componentDidMount()
    {
        this.onTermSubmit('buildings');
    }

onTermSubmit =async (term)=>
    {
        const response= await axios.get('https://www.googleapis.com/youtube/v3/search',{
            params: {
                part:'snippet',
                maxResults:'5',
                key: KEY,
                q:term

            }

        });
        // the function onTermSubmit is call from searchbar.js ko onsearchsubmit
    // onTermSubmit is a call back fun which is called when form is submited
       // console.log(term);
console.log(response);
this.setState({state:response.data.items,
    selectedVideo:response.data.items}
    );
   
};
onVideoSelect=(video)=>
{
   // console.log('loading',video);
   this.setState({selectedVideo:video});
};

    render(){
        return(
            <div ui conatiner>
                <SearchBar callMeWhenSubmit={this.onTermSubmit}/>
                < div className="ui grid">
                    <div className="ui row">
                    <div className="eleven wide column">
                <VideoDetail video={this.state.selectedVideo} />
                </div>
               <div className="five wide column">
                    <VideoList videos={this.state.videos}   onVideoSelect={this.onVideoSelect}/>
               </div>
       </div>
       </div>
       </div>
     );

    }
}
export default App;
