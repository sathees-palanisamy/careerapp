import React, { Component } from 'react';

import firebase from '../Firestore';
import SideDrawer from '../Navigation/sideDrawer';
import { connect } from 'react-redux';


class Sharepath extends Component {

    constructor(props) {
        super(props);
        this.state = {
            jobTitle: '',
            customerDescription: '',
            category: 'Information Technology',
            salary: '',
            SubCategory: 'Others',
            uploadStatus: '',
            experience: '',
            subCategoryArray: []
        };

        this.jobTitleChange = this.jobTitleChange.bind(this);
        this.descriptionChange = this.descriptionChange.bind(this);
        this.categoryChange = this.categoryChange.bind(this);
        this.salaryChange = this.salaryChange.bind(this);
        this.experienceChange = this.experienceChange.bind(this);
        this.SubCategoryChange = this.SubCategoryChange.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    jobTitleChange(event) {
        this.setState({ jobTitle: event.target.value });
    }

    descriptionChange(event) {
        this.setState({ customerDescription: event.target.value });
    }

    categoryChange(event) {
        this.setState({ category: event.target.value });
        let curSkills = [];
        this.props.categoryList.map((curCategory) => {
            if (curCategory.title === event.target.value) {
                curSkills = [...curCategory.skills]
            }
        })
    
        this.setState({ subCategoryArray: [...curSkills] });
    }

    SubCategoryChange(event) {
        this.setState({ SubCategory: event.target.value });
    }

    salaryChange(event) {
        this.setState({ salary: event.target.value });
    }

    experienceChange(event) {
        this.setState({ experience: event.target.value });
    }

    handleSubmit(event) {
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        let current_datetime = new Date();
        let formatted_date = current_datetime.getDate() + "-" + months[current_datetime.getMonth()] + "-" + current_datetime.getFullYear();

        let joinCatSubCat = this.state.category.concat(this.state.SubCategory);


        let DateNum = new Date().getTime();

        const data = {
            "shortDescription": this.state.jobTitle,
            "mainCategory": this.state.category,
            "subCategory": this.state.SubCategory,
            "learningDetails": this.state.customerDescription,
            "noOfLikes": 0,
            "salaryDetail": this.state.salary,
            "dateEntered": formatted_date,
            "created": DateNum,
            "updated": DateNum,
            "retrieveKey": joinCatSubCat,
            "experience": this.state.experience
        };

     

        const db = firebase.firestore();

        var self = this;

        let docRef = db.collection('career').doc().set(data)
            .then(function () {
          
                self.setState({ uploadStatus: 'Thank you for helping us. Data uploaded successfully' });
            })
            .catch(err => {
            
                self.setState({ uploadStatus: 'Server issue' });
            });
        ;

        this.setState({ jobTitle: '', customerDescription: '', category: 'Information Technology', salary: '', SubCategory: 'Others', experience: '' });

        event.preventDefault();
    }

    componentDidMount() {
        let curSkills = [];
        this.props.categoryList.map((curCategory) => {
            if (curCategory.title === this.state.category) {
                curSkills = [...curCategory.skills]
            }
        })
    
        this.setState({ subCategoryArray: [...curSkills] });
    }
  
    render() {

        let subCategoryList = this.state.subCategoryArray.map(suCategories1 =>
            <option value={suCategories1}>{suCategories1}</option>
        );

        let sideDrawerIcon;
        if (this.props.showSideDrawer) {
            sideDrawerIcon = <a className="mobile-nav-icon-black" onClick={this.props.sideDrawerToggleHandler}><i className="ion-ios-close icon-big"></i></a>
        }
        else {
            sideDrawerIcon = <a className="mobile-nav-icon-black" onClick={this.props.sideDrawerToggleHandler}><i className="ion-navicon-round"></i></a>
        }

        let homePageLink = <span className="homePagelink">
           <a href="/"><span className="ion-md-home icon-medium"> </span></a>   
        </span>

        return (
            <section className="sharepath" id="sharepath">
                <SideDrawer
                />
                <div className="section-form">
                    <div className="row subHeadingContainer">
                   
                        <h2>Share Your Career Path</h2>
                    
                   
                        {homePageLink}
                        {sideDrawerIcon}
                    
                    </div>
                    <form onSubmit={this.handleSubmit}>
                        <div className="row">
                            <div className="contact-form">
                                <div className="row">
                                    <div className="col span-1-of-3">
                                        <label>Short description about your path</label>
                                    </div>
                                    <div className="col span-2-of-3">
                                        <input type="text" name="jobTitle" id="jobTitle" placeholder="Your path" required onChange={this.jobTitleChange} value={this.state.jobTitle} />
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col span-1-of-3">
                                        <label>Main Category</label>
                                    </div>
                                    <div className="col span-2-of-3 classic" >
                                        <select value={this.state.category} onChange={this.categoryChange}>
                                            <option value="Information Technology">Information Technology</option>
                                            <option value="Textile">Textile</option>
                                            <option value="Automobile">Automobile</option>
                                            <option value="Medical Science">Medical Science</option>
                                            <option value="Marine">Marine</option>
                                            <option value="Business Management">Business Management</option>
                                            <option value="Agriculture & Biology">Agriculture & Biology</option>
                                            <option value="Electrical & Electronics">Electrical & Electronics</option>
                                            <option value="Chemical">Chemical</option>
                                            <option value="Communication">Communication</option>
                                            <option value="Civil">Civil</option>
                                            <option value="Mech & Manufacturing">Mech & Manufacturing</option>   
                                            <option value="Entertainment">Entertainment</option>  
                                            <option value="Aerospace">Aerospace</option>                                                                                                                                                                 
                                            <option value="Physics">Physics</option>
                                            <option value="Maths">Maths</option>
                                            <option value="Arts and Hotel">Arts and Hotel</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col span-1-of-3">
                                        <label>Sub Category</label>
                                    </div>
                                    <div className="col span-2-of-3 classic">
                                        <select value={this.state.SubCategory} onChange={this.SubCategoryChange}>
                                            {subCategoryList}
                                        </select>
                                    </div>
                                </div>


                                <div className="row">
                                    <div className="col span-1-of-3">
                                        <label>Salary per Annum (lakhs)</label>
                                    </div>
                                    <div className="col span-2-of-3">
                                        <input type="text" name="salary" id="salary" placeholder="Salary in lakhs" required onChange={this.salaryChange} value={this.state.salary} />
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col span-1-of-3">
                                        <label>Experience in years</label>
                                    </div>
                                    <div className="col span-2-of-3">
                                        <input type="text" name="experience" id="experience" placeholder="Years of Experience" required onChange={this.experienceChange} value={this.state.experience} />
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col span-1-of-3">
                                        <label>What and Where to learn?</label>
                                    </div>
                                    <div className="col span-2-of-3">
                                        <textarea className="message" placeholder="learning details" onChange={this.descriptionChange} required value={this.state.customerDescription} ></textarea>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col span-1-of-3">
                                        <label>&nbsp;</label>
                                    </div>
                                    <div className="col span-2-of-3">
                                        <input type="submit" value="Send it!"></input>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </form>
                    <br></br>
                    <div className="emailAdd">
                        <p>{this.state.uploadStatus}</p>
                    </div>
                </div>
               
            </section>
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


 export default connect(mapStateToProps,mapDispatchToProps)(Sharepath);
