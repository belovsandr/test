import React, { Component } from 'react';
import SubmitForm from './SubmitForm';
class App extends Component {
    submit = (values) => {
        console.log(values);
    }
    render() {
        return (
            <SubmitForm onSubmit={this.submit}/>
        );
    }
}

export default App;