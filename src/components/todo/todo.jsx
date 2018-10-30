import 'modules/bootstrap/dist/css/bootstrap.min.css'
import 'modules/font-awesome/css/font-awesome.min.css'
import React,{Component} from 'react'
import axios from 'axios'
import {Navbar} from '../../components/menu/menu'
import {Form} from './todoForm'
import {TodoList} from './todoList'
import {TodoCadastro} from './todoCadastro'
import '../menu/custom.css'


const URL = 'http://localhost:3003/api/todos'


class Todo extends Component{

    constructor(props){
        super(props)

        this.state={description:"" ,list:[]}


        this.handleChange=this.handleChange.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
        this.refresh()
        this.handleRemove = this.handleRemove.bind(this)
        this.handleMarkAsDone = this.handleMarkAsDone.bind(this)
        this.handleMarkAsPending = this.handleMarkAsPending.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
        this.handleClear = this.handleClear.bind(this)

        
    }
    
  
        refresh(description = ''){
            const search = description ? `&description__regex=/${description}/`: ''
            axios.get(`${URL}?sort=-createdAt${search}`)
            .then(resp => this.setState({...this.state, description, list: resp.data}))
        }


        handleChange(e){
        this.setState({...this.state,description: e.target.value})  
        }

        handleAdd () {
            const description = this.state.description
        axios.post(URL, { description })
            .then(resp => this.refresh())
        }

        handleRemove(todo){
            axios.delete(`${URL}/${todo._id}`)
            .then(resp=>this.refresh(this.state.description))
        }
        handleMarkAsDone(todo)
        {
            axios.put(`${URL}/${todo._id}`,{...todo,done: true})
            .then(resp=>this.refresh(this.state.description))
        }
        handleMarkAsPending(todo){
            axios.put(`${URL}/${todo._id}`,{...todo,done:false})
            .then(resp=>this.refresh(this.state.description))
        }
        handleSearch(){
            this.refresh(this.state.description)
        }
        handleClear(){
            this.refresh()
        }

        render(){
            return(
                <div>
                
                <Navbar />
                <TodoCadastro/>
                <Form description={this.state.description}
                handleChange={this.handleChange}
                handleAdd={this.handleAdd}
                handleSearch={this.handleSearch}
                handleClear={this.handleClear}/>

                <TodoList list={this.state.list}
                handleRemove={this.handleRemove} 
                handleMarkAsDone={this.handleMarkAsDone}
                handleMarkAsPending={this.handleMarkAsPending}
                />
                </div>
                
            )
        }
    }
export{Todo}