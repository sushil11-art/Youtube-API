import React from'react'

class SearchBar extends React.Component{

    state={text:''};
        onInputChange=(event)=>
        {
            this.setState({text :event.target.value})
        }
        onSearchSubmit=(event)=>
        {
            event.preventDefault();
// to do we make sure that we call callback from parent component
//when user submit the form we call that prop
this.props.callMeWhenSubmit(this.state.term);
        }

    render()
    {
        return  (
            <div className="search-bar ui segment">
            <form className="ui form" onSubmit={this.onSearchSubmit}>
 <div className="field">
     <label>Seacrh Video</label>
                <input type='text' onChange={this.onInputChange} value={this.state.text} />
                </div>
                </form>
                </div>
        );
    }
}
export default SearchBar;
