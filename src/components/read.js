import React from "react";
import { Books } from "./books";
import axios from "axios";

export class Read extends React.Component {

    constructor(){
        super();
        //this.Reload = this.Reload.bind(this);  
        this.componentDidMount = this.componentDidMount.bind(this); 
    }

    /*
     *As a second option componentDidMount() can be called in the constructor instead of the
     extra function Reload 
     */

    // Reload(){
    //     axios.get('http://localhost:4000/api/books')
    //     .then((response) => {
    //         this.setState({ books: response.data })
    //     })
    //     .catch((error) => {
    //         console.log(error);
    //     })
    // }

    componentDidMount() {
        axios.get('http://localhost:4000/api/books')
            .then((response) => {
                this.setState({ books: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    state = {
        books: []
    }

    render() {
        return (
            <div>
                <h3>Book List</h3>
                <Books books={this.state.books} Reload={this.componentDidMount}></Books>
            </div>
        );
    }
}