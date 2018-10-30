import React,{Component} from 'react'
import {Page} from '../menu/pageHeader'


class TodoCadastro extends Component{

   

    render(){
        return(
            <div>
                <h1>
                    <Page name='Tarefas' small=' Cadastro'></Page>
                </h1>
            </div>
        )
    }
}
export{TodoCadastro}