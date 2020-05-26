import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import SideDrawer from '../Navigation/sideDrawer';

class SuggestList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            dataList: [],
            email: '',
            customerDescription: '',
            uploadStatus: '',
            uiStatus: '',
        }

        this.emailChange = this.emailChange.bind(this);
        this.descriptionChange = this.descriptionChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.displayList = this.displayList.bind(this);
        this.DeleteClick = this.DeleteClick.bind(this);
    }

    emailChange(event) {
        this.setState({ email: event.target.value });
    }

    DeleteClick = (id,e) => {

        const data = {
            id: id,
        };

 

        axios.post('/api/suggestion/delete', data)
            .then(response => {
                this.displayList();
            })
            .catch((error) => {
                console.log(error)
            });

   
    }


    descriptionChange(event) {
        this.setState({ customerDescription: event.target.value });
    }

    displayList(event) {
        this.setState({ uiStatus: 'list' });

        axios.get('/api/suggestion/list')
        .then(response => {
            this.setState({ dataList: [...response.data] });
        })
        .catch((error) => {
            console.log(error)
        });
    }


    handleSubmit(event) {
    
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        let current_datetime = new Date();

        let formatted_date = current_datetime.getDate() + "-" + months[current_datetime.getMonth()] + "-" + current_datetime.getFullYear() + "." + current_datetime.getTime();

        const data = {
            email: this.state.email,
            detail: this.state.customerDescription,
            date: formatted_date,
        };


        var self = this;

        axios.post('/api/suggestion/create', data)
            .then(response => {
       
                if (response.status === 200) {
                    self.setState({ uploadStatus: 'Thank you for helping us.' });
                }

            })
            .catch((error) => {
                console.log(error)
            });

        this.setState({ email: '', customerDescription: '' });

        event.preventDefault();
    }

    render() {

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

        let renderList;

        if (this.state.uiStatus === '') {

            renderList = <div className="section-form">
                <div className="row subHeadingContainer">

                    <h2>Suggestion Form</h2>


                    {homePageLink}
                    {sideDrawerIcon}

                </div>
                <form onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="contact-form">


                            <div className="row">
                                <div className="col span-1-of-3">
                                    <label>Email ID</label>
                                </div>
                                <div className="col span-2-of-3">
                                    <input type="text" name="email" id="email" placeholder="Your Email ID" required onChange={this.emailChange} value={this.state.email} />
                                </div>
                            </div>

                            <div className="row">
                                <div className="col span-1-of-3">
                                    <label>Suggestion Details</label>
                                </div>
                                <div className="col span-2-of-3">
                                    <textarea className="message" placeholder="details" onChange={this.descriptionChange} required value={this.state.customerDescription} ></textarea>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col span-1-of-3">
                                    <label>&nbsp;</label>
                                </div>
                                <div className="col span-2-of-3">
                                    <input type="submit" value="Log it!"></input>
                                </div>
                            </div>

                        </div>

                    </div>
                </form>
                <br></br>
                <div className="emailAdd">
                    <p>{this.state.uploadStatus}</p>
                </div>
                <br></br>
                <br></br>
                <div className="row">
                    <div className="col span-1-of-3">
                        <label>&nbsp;</label>
                    </div>
                    <div className="col span-2-of-3">
                        <input type="button" value="List of Suggestions" onClick={this.displayList}></input>
                    </div>
                </div>
            </div>

        }

        let suggestionListPage;

        if (this.state.uiStatus === 'list') {

            suggestionListPage = this.state.dataList.map(indiSuggestion =>
                <div className="section-plans" key={indiSuggestion.id}>
                    <div className="row" >
                        <div className="col col-width-1">
                        </div>
                        <div className="col col-width-2">
                            <div className="plan-box">
                                <div>
                                    <ul className="iconDisplay">
                                        <li><p className="plan-price">{indiSuggestion.email}</p></li>
                                        <li className="customerInter" onClick={(e) => this.DeleteClick(indiSuggestion.id, e)}
                                        ><i className="ion-ios-crop icon-small"></i>Delete</li>
                                    </ul>
                                    <p className="plan-price-meal">{indiSuggestion.details}</p>
                                </div>
                                <div className="historyDet">
                                    <ul className="iconDisplay">
                                        <li><i className="ion-ios-calendar icon-small"></i>{indiSuggestion.date} Shared Date</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col col-width-3">
                        </div>
                    </div>
                </div>
            );


            renderList = <div className="section-form">
                <div className="row subHeadingContainer">

                    <h2>Suggestion List</h2>


                    {homePageLink}
                    {sideDrawerIcon}
                  

                </div>

                {suggestionListPage}
                </div>

        }

        return (
            <section>
                <SideDrawer
                />
                {renderList}

            </section>

        );
    };
}

const mapStateToProps = (state) => {
    return {
        showSideDrawer: state.pageTag.reduxshowSideDrawer,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        sideDrawerToggleHandler: () => dispatch({ type: 'SIDE_DRAW_TOGGLE_HANDLE' })
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(SuggestList);
