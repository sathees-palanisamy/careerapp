import React, { Component } from 'react';
import { connect } from 'react-redux';


class ListSubCategory extends Component {

    constructor(props) {
        super(props);
        this.myRef = React.createRef()
        this.state = {
            subCategoryArray: [],
          };
    }

    scrollToMyRef = () => window.scrollTo(0, this.myRef.current.offsetTop)

    componentDidMount() {
        this.scrollToMyRef();
        let curSkills = [];
        this.props.categoryList.map((curCategory) => {
            if (curCategory.title == this.props.category) {
                curSkills = [...curCategory.skills]
            }
        })
        this.setState({ subCategoryArray: [...curSkills] });
    }

    render() {
       
      
        let careerPathRender;

        let homePageLink = <span className="homePagelink" onClick={this.props.depReload}>
            <a href="/"><span className="ion-md-home icon-medium"> </span></a>
        </span>

        let sideDrawerIcon;

        if (this.props.showSideDrawer) {
            sideDrawerIcon = <a className="mobile-nav-icon-black" onClick={this.props.sideDrawerToggleHandler}><i className="ion-ios-close icon-big" onClick={this.props.depReload}></i></a>
        }
        else {
            sideDrawerIcon = <a className="mobile-nav-icon-black" onClick={this.props.sideDrawerToggleHandler}><i className="ion-navicon-round" onClick={this.props.depReload}></i></a>
        }

       let subCategoryArrayDiv =[];

        for(let i=0;i < this.state.subCategoryArray.length;i = i + 3) {

            let buildSubCatArr1;
            let buildSubCatArr2;
            let buildSubCatArr3;

        if ( i < this.state.subCategoryArray.length) {
            buildSubCatArr1 =            <div className="col span-1-of-3 box" onClick={(e) => this.props.subCateClick(this.state.subCategoryArray[i], e)}>
            <div className="subCategoryAlign">
                <h3>{this.state.subCategoryArray[i]}</h3>
            </div>
        </div>
        }

        if ( i + 1 < this.state.subCategoryArray.length) {
          buildSubCatArr2 = <div className="col span-1-of-3 box" onClick={(e) => this.props.subCateClick(this.state.subCategoryArray[i+1], e)}>
            <div className="subCategoryAlign">
                <h3>{this.state.subCategoryArray[i+1]}</h3>
            </div>
        </div>
        }

        if ( i + 2 < this.state.subCategoryArray.length) {
            buildSubCatArr3 =<div className="col span-1-of-3 box" onClick={(e) => this.props.subCateClick(this.state.subCategoryArray[i+2], e)}>

                      <div className="subCategoryAlign">
                          <h3>{this.state.subCategoryArray[i+2]}</h3>
                      </div>
      
                  </div> 
        }

            let currentIteration =   <div className="row" key={i}>
            {buildSubCatArr1}
            {buildSubCatArr2}
            {buildSubCatArr3}
            
        </div>

        subCategoryArrayDiv.push(currentIteration);

        }
      

         careerPathRender = <div><div className="row subHeadingContainer" ref={this.myRef}>

            <h2>{this.props.category}</h2>


            {homePageLink}
            {sideDrawerIcon}


        </div>
            {subCategoryArrayDiv}
    
        </div>

        return (
            <div>
                {careerPathRender}
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
       categoryList: state.dataExt,
       showSideDrawer: state.pageTag.reduxshowSideDrawer,
    }
 }

 const mapDispatchToProps = dispatch => {
    return {
        sideDrawerToggleHandler: () => dispatch({type: 'SIDE_DRAW_TOGGLE_HANDLE'})
    }
  }

 
 export default connect(mapStateToProps,mapDispatchToProps)(ListSubCategory);