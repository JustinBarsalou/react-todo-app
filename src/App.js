import React, {Component} from 'react';

class App extends Component {
  constructor(props){
    super(props);

    this.state={
    newTask:"",
    list:[]
    }
  }
  //Added Note for git
  updateInput(key, value){
    //update react state
    this.setState({
    [key]: value
    })
  }
  addItem(){
    //create item with unique id
    const newTask={
      id: 1 + Math.random(),
      value: this.state.newTask.slice()
    };

    //list of items to copy
    const list = [...this.state.list];

    //add new item to list
    list.push(newTask);

    //update state with new list and reset newItem
    this.setState({
      list,
      newTask:""
      })
  }
  deleteItem(id){
  //copy of current list of items
  const list = [...this.state.list];

  //item being deleted
  const updatedList = list.filter(item => item.id !== id);

  this.setState({list: updatedList});

  }
  render() {
    return (
    <div className="App"><div>
    Tasks
    <br/>
      <input
        type="text"
        placeholder="Task ..."
        value={this.state.newTask}
        onChange={e => this.updateInput("newTask", e.target.value)}
      />
      <button onClick={() => this.addItem()}>
      Add
      </button>
    <br/>
    <ul>
      {this.state.list.map(item => {
      return(
        <li key={item.id}>
          {item.value}
          <button onClick={() => this.deleteItem(item.id)}>
          Done!
          </button>
        </li>
    )
    })}
    </ul>

    </div>
    </div>
    )
  }
}

export default App;