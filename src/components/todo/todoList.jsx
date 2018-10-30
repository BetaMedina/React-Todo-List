import React,{Component} from 'react'
import {Button} from '../menu/buttonIcon'


class TodoList extends Component{
   constructor(props){
       super(props)
   } 
    renderRows(){

        const list= this.props.list || []
        
        return(
            list.map(todo=>
                    <tr key={todo._id}>
                        <td className={todo.done ? 'markedAsDone' : ''}>{todo.description}</td>
                        <td>
                        <Button style='success' icon='check' hide={todo.done}
                            onClick={() => this.props.handleMarkAsDone(todo)}/>
                        <Button style='warning' icon='undo' hide={!todo.done}
                            onClick={() => this.props.handleMarkAsPending(todo)}/>
                        <Button style='danger' icon='trash-o' hide={!todo.done}
                            onClick={() => this.props.handleRemove(todo)}/>
                            
                        </td>
                    </tr>
                )
            )
    }

    render(){
        return(
            <div>
                <table className='table'>
                <thead>
                    <tr>
                        <th>Descrição</th>
                        <th className='tableActions'>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderRows()}
                </tbody>
                </table>
            </div>
        )
    }
}
export{TodoList}