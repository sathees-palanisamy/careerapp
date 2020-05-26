import React, { Component } from 'react';
import FurtherNext from './FurtherNext';
import { connect } from 'react-redux';
import firebase from '../../Firestore';

class SecondPage extends Component {

    constructor(props) {
        super(props);
        this.myRef = React.createRef()
    }

    scrollToMyRef = () => window.scrollTo(0, this.myRef.current.offsetTop)

    componentDidMount() {
        this.scrollToMyRef();
    }

    render() {

        let sideDrawerIcon;
        if (this.props.showSideDrawer) {
            sideDrawerIcon = <a className="mobile-nav-icon-black" onClick={this.props.sideDrawerToggleHandler}><i className="ion-ios-close icon-big" onClick={this.props.depReload}></i></a>
        }
        else {
            sideDrawerIcon = <a className="mobile-nav-icon-black" onClick={this.props.sideDrawerToggleHandler}><i className="ion-navicon-round" onClick={this.props.depReload}></i></a>
        }

        let homePageLink = <span className="homePagelink" onClick={this.props.depReload}>
            <a href="/"><span className="ion-md-home icon-medium"> </span></a>
        </span>

        let CareerPathRender = <div ref={this.myRef}>
            <div className="row subHeadingContainer">

                <h2>{this.props.category} - {this.props.subCategory} </h2>


                {homePageLink}
                {sideDrawerIcon}

            </div>
        </div>

        return (
            <div>
                {CareerPathRender}
                <FurtherNext careerDetPage2={this.props.careerDetPage2} likeClick={this.props.likeClick} />
            </div>
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
  
  export default connect(mapStateToProps,mapDispatchToProps)(SecondPage);
