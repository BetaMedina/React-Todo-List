import React,{Component} from 'react'

class Button extends Component{
   
    
    render(){
    if(this.props.hide){
        return (null)
    }else{
        return(
            <button className={'btn btn-'+this.props.style} 
            onClick={this.props.onClick}>
            <i className={'fa fa-'+this.props.icon}></i>
            </button>
            )
        }
    }
}export{Button}