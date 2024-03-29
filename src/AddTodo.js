import React from 'react';
import {connect} from "react-redux";
import {addTodo} from "./actionCreators/actionCreaters";


class AddTodo extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            inputVal: ""
        };
    }

    changeInput=(e)=>{
        const newVal = e.target.value;
        this.setState({
            inputVal: newVal
        });
    }

       addTodo(newTodo){
      this.props.addTodo({         
          content: newTodo,
          id: Math.random(),
          checked: false
      });
  }

    onAddTodo=(e)=>{ 
        e.preventDefault();
        this.addTodo(this.state.inputVal);       
        console.log(this.state.inputVal);
        this.setState({
            inputVal: ""
        });
    }


    render() {   
        return (
            <div>

                <form onSubmit={this.onAddTodo}>
                    <input
                        type="text"
                        value={this.state.inputVal}
                        onChange={this.changeInput} />
                    <button>Ekle</button>
                
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    show: state.show,
    notificationStatus: state.notificationStatus
});


const mapDispatchToProps = dispatch => ({
    addTodo: (todo) => {dispatch(addTodo(todo))}
});

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);
