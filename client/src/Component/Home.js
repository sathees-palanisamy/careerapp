import React, { Component } from 'react';
import Nav from './Navigation/Nav';
import mobileImage from './Homepic.jpeg';
import desktopImage from './Homepic.jpeg';
import SideDrawer from './Navigation/sideDrawer';
import Footer from './Footer/Footer';


class Home extends Component {


    render() {
        const imageUrl = window.innerWidth >= 650 ? desktopImage : mobileImage;
        return (
            <div>
                <div className="HomeStyle" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),url(${imageUrl})`, backgroundImage: `-webkit-linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${imageUrl})` }}>
                    <div >
                        <Nav />
                        <SideDrawer
                        />
                        <div className="hero-text-box clearfix">
                            <h1>Share Your Career Path</h1>
                            <p>Guide our Junior's to pursue a career that is meaningful and fulfilling</p>
                            <br></br>
                            <a className="btn btn-full" href="/sharepath">Share Your's</a>
                            <a className="btn btn-ghost" href="/paths">Analyse Other's</a>
                        </div>
                    </div>

                </div>
                <Footer />
            </div>
        );
    }
}

export default Home;
