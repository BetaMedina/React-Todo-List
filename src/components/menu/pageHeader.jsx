import React,{Component} from 'react'

class Page extends Component{
    render(){
        return(
            <header className='page-header'>
                <h2>{this.props.name}
                    <small>{this.props.small}</small>
                </h2>
            </header>
        )
    }
}
export{Page}