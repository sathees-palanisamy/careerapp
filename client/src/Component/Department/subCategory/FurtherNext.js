import React, { Component } from 'react';


class FurtherNext extends Component {

    render() {

        let careeritemSecondPage;



        careeritemSecondPage = this.props.careerDetPage2.map(indicareer =>
            <div className="section-plans" key={indicareer.id}>
                <div className="row" >
                    <div className="col col-width-1">
                    </div>
                    <div className="col col-width-2">
                        <div className="plan-box">
                            <div>
                                <ul className="iconDisplay">
                                    <li><p className="plan-price">{indicareer.shortDescription}</p></li>
                                    <li className="customerInter" onClick={(e) => this.props.likeClick(indicareer.id, e)}
                                    ><i className={indicareer.likeStyle}></i>Like</li>
                                </ul>
                                <p className="plan-price-meal">{indicareer.learningDetails}</p>
                            </div>
                            <div className="historyDet">
                                <ul className="iconDisplay">
                                    <li><i className="ion-ios-calendar icon-small"></i>{indicareer.dateEntered} Shared Date</li>
                                    <li><i className="ion-ios-cash icon-small"></i>{indicareer.salaryDetail} Lakhs Salary Annum</li>
                                    <li><i className="ion-ios-heart icon-small"></i>{indicareer.noOfLikes} Likes</li>
                                    <li><i className="ion-ios-time icon-small"></i>{indicareer.experience} Years Of Experience</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col col-width-3">
                    </div>
                </div>
            </div>
        );


        return (
            <div>
                {careeritemSecondPage}
            </div>
        );
    }
}

export default FurtherNext;