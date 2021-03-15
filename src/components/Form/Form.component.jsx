import React, {Component} from 'react';
import './Form.styles.css'

class Form extends Component {
    constructor(){
        super()
        this.state = {
            username: '',
            password: ''
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    

    
    render(){
        return (
            <div>
                <h1>Form</h1>
                <form>
                    <label htmlFor='username'>username:</label>
                    <input type='text' name='username' onChange={this.handleChange}></input>
                
                <button type='submit'>Submit</button>
                </form>
            </div>
        )
    }
}

export default Form