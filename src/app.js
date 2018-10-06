import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';
import axios from 'axios';
import { runInNewContext } from 'vm';

class Form_Detail extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            searchValue : "",
            searchResult : []
        }
    }

    render() {
        return (
            <div>
                <p>This is forms</p> 
            </div>

                )  
                
        
    }
}


ReactDOM.render(<Form_Detail />, document.getElementById('app'));
