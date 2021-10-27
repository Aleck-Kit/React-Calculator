import {Component} from 'react';
import './App.css';
import { Button } from './components/Button';
import {Input} from './components/Input';
import {ClearButton} from './components/ClearButton';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            input: ""
        }
    }
    render() { 
        return ( 
            <div className="app">
                <div className="calc-wrapper">
                    <div className="row">
                        <Button/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
