import React from 'react'
import Button from './Button.jsx';
import List from './List.jsx'

class Content extends React.Component {

    constructor(props) {
        super(props);
        this.state = { articles: [], articlesApproved: [], message: '' };
    }

   handleClick() {
       alert("Handle click");

       articlesApproved.setState(['one','two','three']);
       this.state.articles=['one','two','three'];
    }
   
    render() {
        var simpleContent =
            <div>
                {this.props.text}
                <br />
                Enter text : <input type="text" 
                name="simpletext" id="simpletext" />
                <Button handleClick={this.handleClick} 
                text="SUBMIT" />
                <br />
                <List articles={this.state.articles} 
                listHeader="Submitted Articles" />
                {this.state.message}
                <List articles={this.state.articlesApproved} 
                listHeader="Approval Status" />
            </div>;

        return simpleContent;
    }
}

export default Content;