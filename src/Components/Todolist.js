import React, { Component } from 'react';
import { connect } from 'react-redux';
import TodoItem from './TodoItem';
import { fetchTasks } from '../Redux/Actions/ActionCreators';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowsRotate } from '@fortawesome/free-solid-svg-icons'

class Todolist extends Component {  

    constructor(props) {
        super(props)
        this.sortTasks();
    }

    sortTasks = () => {
        this.props.tasks.sort(function(a, b) {
            var c = new Date(a.date);
            c.setHours(a.startTime.split(":")[0]);
            c.setMinutes(a.startTime.split(":")[1]);
            var d = new Date(b.date);
            d.setHours(b.startTime.split(":")[0])
            d.setMinutes(b.startTime.split(":")[1]);
            return c-d;
        });
    }
    
    render() {
        return (
           <div id="todoList">
                <FontAwesomeIcon className="refreshIcon" icon={faArrowsRotate} onClick={()=>this.props.fetchTasks()}/>
                <div className="my-2" >
                    {this.props.tasks.map((x,index)=><TodoItem key={index} task={x} index={index}/>)}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({ tasks: state.tasks })

const mapDispatchToProps = (dispatch) => {
    return ({
        fetchTasks: () => dispatch(fetchTasks())
    })
}

export default connect(mapStateToProps,mapDispatchToProps)(Todolist);