import React,{Component} from 'react';
import { connect } from 'react-redux';


class Nav extends Component {
    render () {
   
      let sideDrawerIcon;
      if (this.props.showSideDrawer)
        {
          sideDrawerIcon =  <a className="mobile-nav-icon" onClick={this.props.sideDrawerToggleHandler}><i className="ion-ios-close icon-big"></i></a>
        }
      else
      {
        sideDrawerIcon =  <a className="mobile-nav-icon" onClick={this.props.sideDrawerToggleHandler}><i className="ion-navicon-round"></i></a>
      }
        return (
        <nav>
        <div className="row">
          <img src="careergray.png" alt="logo" className="logo"/>
              <ul className="main-nav">
                <li><a href="/paths">Analyse Other's Path</a></li>
                <li><a href="/sharepath">Share Your's</a></li>   
                <li><a href="/suggestion">Suggestion Please</a></li>               
              </ul>
            {sideDrawerIcon}
          </div>
            </nav>
            );
    }
}

const mapStateToProps = (state) => {
  return {
     showSideDrawer: state.pageTag.reduxshowSideDrawer,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    sideDrawerToggleHandler: () => dispatch({type: 'SIDE_DRAW_TOGGLE_HANDLE'})
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Nav);