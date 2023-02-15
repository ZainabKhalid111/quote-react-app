import axios from "axios";
import React, { Component } from 'react';
import './Quote.css';

export class Quote extends Component {

  state = { advice: '' }
  componentDidMount() {
    this.fetchAdvice();

  }

  // dont need a const keyword, because its is a method inside a class

  fetchAdvice = () => {

    // to pull requests frpm API

    axios.get('https://api.adviceslip.com/advice')
    

      .then((response) => {
        // destructuring advice from the api
        
        const { advice } = response.data.slip;
        // // console.log(advice);

        // can write advice: 'advice' as
        this.setState({ advice }); 

      })

      .catch((error) => {
        console.log(error);
      })

  }


  render() {
    // const {advice} = this.state;

    return (
    
      <div className="container-fluid">
      <div className="row text-center">
        <div className="col-12 mx-auto">

         {/* CUSTOM BLOCKQUOTE */}
            <blockquote className="blockquote blockquote-custom bg-white p-5 pb-3 shadow ">
            <div className="blockquote-custom-icon shadow-sm"><i className="fa fa-quote-left text-white"></i></div>
              <p className="mb-0 mt-2 font-italic ">"{this.state.advice}"</p>
            <footer className=" pt-2 mt-3 border-top">
                <i class="fa fa-1x fa-heart mb-0 pb-0" style={{ color: "#e9ae0b" }}></i>
            </footer>
          </blockquote>
            <button className="btn button mt-3" onClick={this.fetchAdvice}>
            <span>New Quote!</span>
           </button>

        </div>
      </div>
      </div>
     
    )
  }
}

export default Quote