/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


import React from "react";

class Button extends React.Component{

    constructor(){
        super()
        this.state = {
            count : 0
        }
    }

    addCounter = () => {
        this.setState(
            {
                count : this.state.count + 1
            }
        )
    }

    resetCounter() {
        this.setState({ count: 0 })
    }


render(){
    return( 
    <div>
    <p>gaano ka-cute si Paimon? = {this.state.count}</p>
    <button id="ctr-button"
    onClick={(e) => this.addCounter(e)}>
    pede na 😄
    </button>
    <button
    id="ctr-button"
    onClick={(e) => this.resetCounter(e)}>
    no mare 🤢
    </button>
    </div>
    )
}

}



export default Button