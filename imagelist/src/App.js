import React from 'react';
import axios from 'axios';
import Searchinput from './Searchinput';
import ImageList from './ImageList';

class App extends React.Component
{
    state= {images:[] }//empty array banaye
    onSearchSubmit=async (entry)=>{ //async le network response lai lagne time deal garxa,, await le chai return hune value lai assign garxa value lai yo case ma response, so yesle grada paxi response freely use garna milxa
       const response= await axios.get(`https://pixabay.com/api/?key=27240481-82ae634358969009d241508d5&q=${entry}&image_type=photo`)
        // console.log(response.data.total)
        this.setState({images:response.data.hits})
    }

    render()
    {
        return(
            <div className='ui container' style={{marginTop:'30px'}}>
            <Searchinput onSearchSubmit={this.onSearchSubmit}/>
            <ImageList images={this.state.images}/>
            {/* We have {this.state.images.length} images */}
            </div>
        )
    }
}
export default App;
