import React,{Component} from 'react'
import {Grid} from '../menu/grid'
import{Button} from '../menu/buttonIcon'

class Form extends Component{
 
    constructor(props){
        super(props)
        
    }



        
        
    

    render(){
        return(
            <div role="form" className='todoForm'>
                <Grid cols='12 9 10'>
                <input id='description' className='form-control' placeholder='Adicione uma tarefa'
                value={this.props.description} 
                onChange={this.props.handleChange}></input>
                </Grid>

            <Grid cols='12 3 2'>
              <Button style='primary' icon='plus' onClick={this.props.handleAdd} />
              <Button style='info' icon ='search' onClick={this.props.handleSearch} />
              <Button style='default' icon='close' onClick={this.props.handleClear}/>
            </Grid>
        </div>
        )
    }
}
export{Form}