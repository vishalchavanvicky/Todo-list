import React from 'react';
import { connect } from 'react-redux';
import { addTask } from '../Redux/Actions/ActionCreators';
import tick from '../icons/tick.png';
import $ from 'jquery';
import { useNavigate } from 'react-router-dom';


const AddTask = (props) => {
    let navigate = useNavigate();

    let minDate = new Date().toISOString().substring(0,10);
    $('#date').prop('min', minDate);

    const addTask = (e) => {
        e.preventDefault();
        let data = {
            "taskName": e.target["taskName"].value,
            "date": e.target["date"].value,
            "startTime": e.target["startTime"].value,
            "endTime": e.target["endTime"].value
        }
        props.addTask(data);
        $('#suceessModal').modal('toggle'); 
    }

    return (
            <div className="my-2" id="addTask">
                <form onSubmit={addTask}>
                    <div className="form-group">
                        <label htmlFor="taskName">Task Name </label>
                        <input type="text" name="taskName" className="form-control"
                         id="taskName" placeholder="ex. Business Meeting" required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="date">Date</label>
                        <input min={minDate} type="date" name="date" className="form-control" id="date" required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="startTime">Start Time</label>
                        <input type="time" name="startTime" className="form-control" id="startTime" required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="endTime">Completion Time</label>
                        <input type="time" name="endTime" className="form-control" id="endTime" required/>
                    </div>
                    <div className="d-flex justify-content-center my-5">
                        <button className="btn btn-outline-light" type="submit">Add Task</button>
                    </div>
                </form>

                <div className="modal fade" id="suceessModal" tabIndex="-1" role="dialog" aria-labelledby="suceessModalTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="suceessModalTitle">Task Added succesfully.</h5>
                        </div>
                        <div className="modal-body d-flex justify-content-center">
                            <img alt="tick-icon" src={tick} width="50px"/>
                        </div>
                        <div className="modal-footer">                            
                            <button type="button" className="btn btn-success"
                             data-dismiss="modal" onClick={()=>navigate("/show-todos")}>Okay</button>
                        </div>
                        </div>
                    </div>
                </div>                
            </div>
        );
}

const mapDispatchToProps = (dispatch) => {
    return ({
        addTask: (pl) => dispatch(addTask(pl))
    })
}

export default connect(null,mapDispatchToProps)(AddTask);