import React from 'react';
import { connect } from 'react-redux';

const Backdrop = (props) => (
    props.showSideDrawer ?
        <div className="Backdrop">
            <div className="subTitle">
                <img src="careerblack.png" alt="logo" className="SideDrawerlogo" />
                <p><b>Career Path</b></p>
            </div>
            <ul className="side-nav">

                <li>
                    <i className="ion-md-home icon-small"></i>
                    <a href="/" onClick={props.backDropToggle} ><b>Home</b></a>
                </li>
                <li>
                    <i className="ion-md-person icon-small"></i>
                    <a href="/paths" onClick={props.backDropToggle} ><b>Analyse Other's Path</b></a>
                </li>
                <li>
                    <i className="ion-ios-trophy icon-small"></i>
                    <a href="/sharepath" onClick={props.backDropToggle} ><b>Share Your Career Path</b></a>
                </li>
                <li>
                    <i className="ion-ios-trophy icon-small"></i>
                    <a href="/suggestion" onClick={props.backDropToggle} ><b>Suggestion Please</b></a>
                </li>
            </ul>
        </div>
        : null
);

 const mapStateToProps = (state) => {
    return {
       showSideDrawer: state.pageTag.reduxshowSideDrawer,
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
        backDropToggle: () => dispatch({type: 'BACK_DROP_TOGGLE'})
    }
  }
  
  export default connect(mapStateToProps,mapDispatchToProps)(Backdrop);
