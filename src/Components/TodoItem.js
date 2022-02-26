import React from 'react';

const TodoItem = (props) => {

    let {taskName, startTime, endTime} = props.task;

    return (
      <div className="todoItem">
        <div className="accordion" id="accordionContainer">
                <button id={"head"+props.index} className="btn btn-link taskNameFontSize" type="button" data-toggle="collapse" data-target={"#collapse"+props.index}
                    aria-expanded="true" aria-controls="collapseOne">
                    {taskName}
                </button>

                <div id={"collapse"+props.index} className="collapse textAlignCenter" aria-labelledby={"head"+props.index} 
                        data-parent="#accordionContainer">
                        <div> Start Time : {startTime} </div>
                        <div> End Time : {endTime} </div>
                </div>
            </div>
      </div>
    );
}


export default TodoItem;