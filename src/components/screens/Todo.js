import React from "react";
class Todo extends React.Component{
    constructor(props){
        super(props)
        this.state={
            items:[],
            input:"",
        }
    }
    addItems=()=>{
         return this.state.items.map((item)=>(
            <li key={item.id}>
                {item.title}<button onClick={()=>this.deleteItem(item.id)}>Delete</button>
            </li>
        ));
    };
    updateItem=()=>{
        let new_item={
            id:this.state.items.length,
            title:this.state.input,
        };
        if(this.state.input){
            this.setState({
                items:[...this.state.items,new_item],
                input:"",
            });
        }
    };
    deleteItem=(id)=>{
        let new_items=this.state.items.filter((item)=> item.id !==id);
        this.setState({items:new_items})
    };
    render(){
        return( 
            <>
                <h1>Todo App</h1>
                <ul>
                    {this.addItems()}
                </ul>
                <input 
                    placeholder="add new item" 
                    value={this.state.input}
                    onChange={(e)=> this.setState({input:e.target.value})}
                />
                <button onClick={this.updateItem}>add</button>
            
            </>
        );
    }
}
export default Todo;