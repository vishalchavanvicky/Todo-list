import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList, faCircleLeft, faGrip } from '@fortawesome/free-solid-svg-icons'

const Header = (props) => {
    const location = useLocation();
    let isHomePage = false;
    if(location.pathname==="/"){
        isHomePage= true
    }

    return (
        <div id="header" className="d-flex justify-content-between my-3">
            <div>
                <FontAwesomeIcon className="headerIcon" icon={faGrip} />
            </div>
            <div>
                <Link to={isHomePage ? "/show-todos" : "/"}>
                    <FontAwesomeIcon className="headerIcon" icon={isHomePage ? faList : faCircleLeft} />
                    { isHomePage &&  props.tasksCount!==0 && <span className="badge badge-danger">{props.tasksCount}</span> }
                </Link>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({ tasksCount: state.tasks.length })

export default connect(mapStateToProps)(Header);