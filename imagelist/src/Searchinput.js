import React from 'react';

class Searchinput extends React.Component{
//    constructor()
//    {
//        super()
//        this.onFormSubmit=this.onFormSubmit.bind(this)
//    }
//    onFormSubmit(event){
//     event.preventDefault()
//     console.log(this.state.entry)//-->yesle error dinxa so yellai bind garna mathi constructor banako ya yei fxn lai arrow fxn ma convert garne
// }
    onFormSubmit=(event)=>{
    event.preventDefault()
    this.props.onSearchSubmit(this.state.entry)
    }
    state={entry:''}
    
    render()
    {
        return(
            <div className='ui segment'>
                <form className='ui form' onSubmit={this.onFormSubmit}>
                    <div className='field'>
                        <div className='ui massive icon input'>
                    <input type='text' placeholder='search' onChange={(event)=>this.setState({entry:event.target.value})}
                    value={this.state.entry}  
                    />
                    <i className='search icon'></i>
                    </div>
                    </div>
                </form>
            </div>
        )
    }
}
export default Searchinput;