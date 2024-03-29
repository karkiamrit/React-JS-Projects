import React from 'react';
import ReactDOM from 'react-dom';
import Hemisphere from './Hemisphere';

// const App=()=>
// {
//     window.navigator.geolocation.getCurrentPosition(
//         (position)=>console.log(position),
//         (error)=>console.log(error)
//     );
//     return(
//     <div>
//         latitude:
//     </div>)
// }
class App extends React.Component{
    // constructor(props)
    // {
    //     super(props)  ;
    //     this.state={ latitude: null, errorMessage: ''}
        // window.navigator.geolocation.getCurrentPosition(
        //     (position)=>{
        //         this.setState({latitude:position.coords.latitude})
        //     },
        //     (error)=>{
        //         this.setState({erroMessage:error.message})
        //     }
        // );
    // }
    state={ latitude: null, errorMessage: ''}
    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            (position)=>{
                this.setState({latitude:position.coords.latitude})
            },
            (error)=>{
                this.setState({erroMessage:error.message})
            }
        );

    } 
    componentDidUpdate()
    {
    console.log('componentDidUpdate')
    }
    
    render()
    {
       

            if(this.state.errorMessage && !this.state.latitude)
            {
                return <div>
                {this.state.errorMessage}
                </div>

            }
            if(!this.state.errorMessage && this.state.latitude)
            {
                return <div>
                <Hemisphere
                latitude={this.state.latitude}
                />
                </div>

            }
            else
            {
                return <div>
                Loading....
                </div>

            }

        }
    }

ReactDOM.render(
    <App/>,document.querySelector('#root')
) 