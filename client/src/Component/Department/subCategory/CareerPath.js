import React, { Component } from 'react';
import FurtherNext from './FurtherNext';
import Spinner from '../../Navigation/Spinner';
import { connect } from 'react-redux';

class CareerPath extends Component {

    constructor(props) {
        super(props);
        this.myRef = React.createRef()
    }

    scrollToMyRef = () => window.scrollTo(0, this.myRef.current.offsetTop)

    componentDidMount() {
        this.scrollToMyRef();
    }



    render() {

        let noContent;

        let sideDrawerIcon;
        if (this.props.showSideDrawer) {
            sideDrawerIcon = <a className="mobile-nav-icon-black" onClick={this.props.sideDrawerToggleHandler}><i className="ion-ios-close icon-big" onClick={this.props.depReload}></i></a>
        }
        else {
            sideDrawerIcon = <a className="mobile-nav-icon-black" onClick={this.props.sideDrawerToggleHandler}><i className="ion-navicon-round" onClick={this.props.depReload}></i></a>
        }

        if (this.props.careerDet.length === 0) {

            if (this.props.loading) {

                noContent = <div className="spinnerCenter"><Spinner />
                </div>

            }
            else {
                noContent = <div className="row" >
                    <div className="col col-width-1">
                    </div>
                    <div className="col col-width-2">
                        <div className="noContentBox noContent">
                            No Content
                    </div>
                        <div className="col col-width-3">
                        </div>
                    </div>
                </div>

            }

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


        let careeritemDisplay = <FurtherNext
            careerDetPage2={this.props.careerDet}
            likeClick={this.props.likeClick}
        />

        return (
            <div>
                {CareerPathRender}
                {careeritemDisplay}
                {noContent}
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
  
  export default connect(mapStateToProps,mapDispatchToProps)(CareerPath);
