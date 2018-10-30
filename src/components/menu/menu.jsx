import React,{Component} from 'react'

class Navbar extends Component {
    render(){
        return(
            <nav className='navbar navbar-inverse bg-inverse'>
                <div className='container'>
                    <div className='navbar-header'>
                        <a className ='navbar-brand' href='#'>
                            <i className='fa fa-calendar-check-o'></i> TodoApp
                        </a>
                    </div>
                   
                </div>
            </nav>
        )
    }
}
export{Navbar}
