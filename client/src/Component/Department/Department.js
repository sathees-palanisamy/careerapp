import React, { Component, useRef, useEffect } from 'react';
import CareerPath from './subCategory/CareerPath';
import SecondPage from './subCategory/SecondPage';
import SideDrawer from '../Navigation/sideDrawer';
import { connect } from 'react-redux';
import ListSubCategory from './ListSubCategory';

import firebase from '../Firestore';

class Department extends Component {

   constructor(props) {
      super(props);
      this.state = {category:'',backDisable: true,fwdDisable: true,
            subCategory:'',
            firstPageLastEntry:'',
            firstPageCareerDet: [],
            lastEntryPage2: [],
            allFetchEntries: [],
            allFireDoc: [],
            careerDetPage2: [],
            loading: true
         };

      this.softwareClick = this.softwareClick.bind(this);
      this.AerospaceClick = this.AerospaceClick.bind(this);
      this.AgricultureClick = this.AgricultureClick.bind(this);
      this.AutomobileClick = this.AutomobileClick.bind(this);
      this.ChemicalClick = this.ChemicalClick.bind(this);
      this.CivilClick = this.CivilClick.bind(this);
      this.CommunicationClick = this.CommunicationClick.bind(this);
      this.DoctorClick = this.DoctorClick.bind(this);
      this.ElectricalClick = this.ElectricalClick.bind(this);
      this.EntertainmentClick = this.EntertainmentClick.bind(this);
      this.MechanicalClick = this.MechanicalClick.bind(this);
      this.MarineClick = this.MarineClick.bind(this);
      this.ManagementClick = this.ManagementClick.bind(this);
      this.ScienceClick = this.ScienceClick.bind(this);
      this.MathsClick = this.MathsClick.bind(this);
      this.ArtsClick = this.ArtsClick.bind(this);
      this.TextileClick = this.TextileClick.bind(this);
      this.processBack = this.processBack.bind(this);
      this.processFwd = this.processFwd.bind(this);
      this.subCateClick = this.subCateClick.bind(this);
      this.likeClick = this.likeClick.bind(this);
      this.depReload = this.depReload.bind(this);

    }

   softwareClick(event) {
      this.setState({category: 'Information Technology'});
      this.props.updatedDepartUiRender('subCategory');
      this.setState({backDisable: false});
   }

   AerospaceClick(event) {
      this.setState({category: 'Aerospace'});
      this.props.updatedDepartUiRender('subCategory');
      this.setState({backDisable: false});
   }

   AgricultureClick(event) {
      this.setState({category: 'Agriculture & Biology'});
      this.props.updatedDepartUiRender('subCategory');
      this.setState({backDisable: false});
   }

   AutomobileClick(event) {
      this.setState({category: 'Automobile'});
      this.props.updatedDepartUiRender('subCategory');
      this.setState({backDisable: false});
   }

   ChemicalClick(event) {
      this.setState({category: 'Chemical'});
      this.props.updatedDepartUiRender('subCategory');
      this.setState({backDisable: false});
   }

   CivilClick(event) {
      this.setState({category: 'Civil'});
      this.props.updatedDepartUiRender('subCategory');
      this.setState({backDisable: false});
   }

   CommunicationClick(event) {
      this.setState({category: 'Communication'});
      this.props.updatedDepartUiRender('subCategory');
      this.setState({backDisable: false});
   }

   DoctorClick(event) {
      this.setState({category: 'Medical Science'});
      this.props.updatedDepartUiRender('subCategory');
      this.setState({backDisable: false});
   }

   ElectricalClick(event) {
      this.setState({category: 'Electrical & Electronics'});
      this.props.updatedDepartUiRender('subCategory');
      this.setState({backDisable: false});
   }

   EntertainmentClick(event) {
      this.setState({category: 'Entertainment'});
      this.props.updatedDepartUiRender('subCategory');
      this.setState({backDisable: false});
   }

   MechanicalClick(event) {
      this.setState({category: 'Mech & Manufacturing'});
      this.props.updatedDepartUiRender('subCategory');
      this.setState({backDisable: false});
   }


   MarineClick(event) {
      this.setState({category: 'Marine'});
      this.props.updatedDepartUiRender('subCategory');
      this.setState({backDisable: false});
   }

   ManagementClick(event) {
      this.setState({category: 'Business Management'});
      this.props.updatedDepartUiRender('subCategory');
      this.setState({backDisable: false});
   }

   ScienceClick(event) {
      this.setState({category: 'Physics'});
      this.props.updatedDepartUiRender('subCategory');
      this.setState({backDisable: false});
   }

   MathsClick(event) {
      this.setState({category: 'Maths'});
      this.props.updatedDepartUiRender('subCategory');
      this.setState({backDisable: false});
   }

   ArtsClick(event) {
      this.setState({category: 'Arts and Hotel'});
      this.props.updatedDepartUiRender('subCategory');
      this.setState({backDisable: false});
   }

   TextileClick(event) {
      this.setState({category: 'Textile'});
      this.props.updatedDepartUiRender('subCategory');
      this.setState({backDisable: false});
   }


   depReload(event) {
      this.setState({backDisable: true,fwdDisable: true,});
      this.props.updatedDepartUiRender('');
   }

   processBack(event) {

     
    
      if (this.props.reduxUiRender === 'subCategory' )
      {
         this.props.updatedDepartUiRender('');
         this.setState({fwdDisable: true});
         this.setState({backDisable: true});
         this.setState({firstPageLastEntry:'',});
         this.setState({firstPageCareerDet: [],});
         this.setState({lastEntryPage2: [],});
         this.setState({allFetchEntries: [],});
         this.setState({allFireDoc: [],});
         this.setState({careerDetPage2: [],});
      }
      if (this.props.reduxUiRender === 'careerPath' )
      {
         this.props.updatedDepartUiRender('subCategory');
         this.setState({fwdDisable: true});
         this.setState({backDisable: false});
         this.setState({firstPageLastEntry:'',});
         this.setState({firstPageCareerDet: [],});
         this.setState({lastEntryPage2: [],});
         this.setState({allFetchEntries: [],});
         this.setState({allFireDoc: [],});
         this.setState({careerDetPage2: [],});
      }
      if (this.props.reduxUiRender === 'Next' )
      {
         let execsecondPagePrev = this.secondPageProcessPrev();
         this.setState({backDisable: false});
      }
   }

   processFwd(event) {
     
  
      if (this.state.firstPageCareerDet.length > 2 ) {
      let execDb = this.secondPageExtract();
      this.props.updatedDepartUiRender('Next');
      }
      else
      {
         this.props.updatedDepartUiRender('careerPath');
         this.setState({fwdDisable: true});
      }

   }

   subCateClick(subCatedata,e) {
      
      this.setState({subCategory: subCatedata});
     
      let joinCatSubCat = this.state.category.concat(subCatedata);

      const db = firebase.firestore();

      let first = db.collection('career')
          .where('retrieveKey', '==', joinCatSubCat)
          .limit(3);

      this.setState({loading: true});

      let paginate = first.get()
          .then((snapshot) => {

              if (snapshot.docs.length  === 0 ) {
                  this.setState({nextDisable: true});
              }
              else {

              let last = snapshot.docs[snapshot.docs.length - 1];

              this.setState({ firstPageLastEntry: last });
              this.setState({ lastEntryPage2: last });
            

              let itemArray = [];

              const items = snapshot.docs.map(doc =>

                  itemArray.push(doc.data())

              );

              let itemID = [];

               snapshot.forEach(doc => {
               itemID.push(doc.id);
               });

              let tempCareerDet = [];

              let tempIndiObj;
  
              for (let increI =0;increI < itemArray.length; increI++ )
              {
              
                  tempIndiObj = itemArray[increI];
           
                  tempIndiObj.likeStyle = 'ion-thumbsup icon-small';
                  tempIndiObj.id = itemID[increI];
                  tempCareerDet.push(tempIndiObj);
              }

              this.setState({ firstPageCareerDet: [...tempCareerDet] });
              this.setState({ allFetchEntries: [...tempCareerDet] });
             
              this.setState({loading: false});

              }
          });

      this.props.updatedDepartUiRender('careerPath');
      this.setState({fwdDisable: false});

   }

 
   secondPageExtract = () => {
         const db = firebase.firestore();
 
         if (this.state.firstPageCareerDet.length > 2) {
 
             let next = db.collection('career')
                 .where('retrieveKey', '==', this.state.category.concat(this.state.subCategory))
                 .startAfter(this.state.lastEntryPage2)
                 .limit(3)
                 .get()
                 .then((snapshot1) => {
 
                     if (snapshot1.docs.length === 0) {
                         this.setState({ fwdDisable: true });
                     }
                     else {
                         let last = snapshot1.docs[snapshot1.docs.length - 1];
 
                         let prevArray = [];
                         const tempArray = [...this.state.allFetchEntries];
                         const items1 = snapshot1.docs.map(doc =>
                             prevArray.push(doc.data())
                         );
 
 
                         let tempCareerDet = [];
 
                         let tempIndiObj;

                         let itemID = [];

                         snapshot1.forEach(doc => {
                         itemID.push(doc.id);
                         });
          
 
                         for (let increI = 0; increI < prevArray.length; increI++) {
                           
 
                             tempIndiObj = prevArray[increI];
                             tempIndiObj.likeStyle = 'ion-thumbsup icon-small';
                             tempIndiObj.id = itemID[increI];
                            
                             tempCareerDet.push(tempIndiObj);
                         }
 
 
                         const tempArray1 = tempArray.concat(tempCareerDet);
 
                         let fireDocTemp = [...this.state.allFireDoc];
                         let fireDoc = [...snapshot1.docs];
                         const tempFireDocArray = fireDocTemp.concat(fireDoc);
 
 
 
                         this.setState({ careerDetPage2: [...tempCareerDet] });
                         this.setState({ allFetchEntries: [...tempArray1] });
                         this.setState({ lastEntryPage2: last });
 
                         this.setState({ allFireDoc: [...tempFireDocArray] });
 
                         this.setState({ fwdDisable: false });
                     }
 
                 });
 
         }
         else {
         /*    this.setState({ nextDisable: true });
             this.setState({ prevDisable: true }); */

             this.setState({fwdDisable: true});
             this.props.updatedDepartUiRender('subCategory');
             this.setState({ careerDetPage2: [...this.state.firstPageCareerDet] }); 
         }
     }

     secondPageProcessPrev = () => {

      this.setState({fwdDisable: false});

      for (let i = 0; i < this.state.allFetchEntries.length; i++) {

          if (this.state.allFetchEntries[i].created === this.state.careerDetPage2[0].created) {

              this.setState({
                  careerDetPage2: [
                      this.state.allFetchEntries[i - 3], this.state.allFetchEntries[i - 2], this.state.allFetchEntries[i - 1]
                  ]
              });
              let tempAllFetch = [...this.state.allFetchEntries];

              let tempAllDocFetch = [...this.state.allFireDoc];

              if (i === 3) {
                  this.props.updatedDepartUiRender('careerPath');
              }
              else
              {
                  let lastTemp = this.state.allFireDoc[i - 4];
                  this.setState({ prevDisable: false });
                  tempAllFetch.pop();
                  tempAllFetch.pop();
                  tempAllFetch.pop();
                  this.setState({ allFetchEntries: [...tempAllFetch] });
                  tempAllDocFetch.pop();
                  tempAllDocFetch.pop();
                  tempAllDocFetch.pop();
                  this.setState({ allFireDoc: [...tempAllDocFetch] });
                  this.setState({ lastEntryPage2: lastTemp });
              }

          }
      }

  }


     likeClick = (id,e) => {
   

      let tempIndiObj;
      let tempCareerDet = [];

    
      if ( this.props.reduxUiRender === 'Next') {

      for (let increI =0;increI < this.state.careerDetPage2.length; increI++ )
      {   
          tempIndiObj = this.state.careerDetPage2[increI];
          if (this.state.careerDetPage2[increI].id === id) {           
          tempIndiObj.likeStyle = 'ion-thumbsup icon-small likebackground';
          }
        
          tempCareerDet.push(tempIndiObj);
      }

      const db = firebase.firestore();  

      const incrementVal = firebase.firestore.FieldValue.increment(1);
     
      const storyRef = db.collection('career').doc(id);

      storyRef.update({ noOfLikes: incrementVal });

      this.setState({careerDetPage2: [...tempCareerDet] });

   }

   if ( this.props.reduxUiRender === 'careerPath') {

      for (let increI =0;increI < this.state.firstPageCareerDet.length; increI++ )
      {   
          tempIndiObj = this.state.firstPageCareerDet[increI];
          if (this.state.firstPageCareerDet[increI].id === id) {           
          tempIndiObj.likeStyle = 'ion-thumbsup icon-small likebackground';
          }
        
          tempCareerDet.push(tempIndiObj);
      }

      const db = firebase.firestore();  

      const incrementVal = firebase.firestore.FieldValue.increment(1);
     
      const storyRef = db.collection('career').doc(id);

      storyRef.update({ noOfLikes: incrementVal });

      this.setState({firstPageCareerDet: [...tempCareerDet] });


   }

   }

   componentWillMount () {

      if (this.props.showSideDrawer) {
         this.setState({sideDrawerIcon: <a className="mobile-nav-icon" onClick={this.props.sideDrawerToggleHandler}><i className="ion-ios-close icon-big"></i></a>});
      }
      else {
         this.setState({sideDrawerIcon: <a className="mobile-nav-icon" onClick={this.props.sideDrawerToggleHandler}><i className="ion-navicon-round"></i></a>});
      }
   
   }
   
    render () {

      let renderDetail;

   
      let backStyleclassName;

        if (this.state.backDisable) {
            backStyleclassName = 'pagePrevbtnOff';
        }
        else {
            backStyleclassName = 'pagePrevbtn';
        }

        let fwdStyleclassName;

        if (this.state.fwdDisable) {
            fwdStyleclassName = 'pageNextbtnOff';
        }
        else {
            fwdStyleclassName = 'pageNextbtn';
        }
      
        let sideDrawerIcon;
        if (this.props.showSideDrawer) {
            sideDrawerIcon = <a className="mobile-nav-icon-black" onClick={this.props.sideDrawerToggleHandler}><i className="ion-ios-close icon-big" onClick={this.depReload}></i></a>
        }
        else {
            sideDrawerIcon = <a className="mobile-nav-icon-black" onClick={this.props.sideDrawerToggleHandler}><i className="ion-navicon-round" onClick={this.depReload}></i></a>
        }

       let homePageLink = <span className="homePagelink" onClick={this.depReload}>
          <a href="/"><span className="ion-md-home icon-medium"> </span></a>
       </span>

      if (this.props.reduxUiRender === '') {

         renderDetail = <div>
            <div className="row subHeadingContainer" >
           
                <h2>Analyse Other's Path </h2>
           
         
                {homePageLink}
                {sideDrawerIcon}
      
            </div>
            
            <div className="row">

               <div className="col span-1-of-3 box">
                  <div className="departFirstClick" onClick={this.softwareClick}>
                     <img src="software.png" alt="Information Technologyf" />
                     <div className="departNameDisplay">
                        <h3>Information Technology</h3>
                     </div>
                  </div>
               </div>

               <div className="col span-1-of-3 box">
                  <div className="departFirstClick" onClick={this.TextileClick}>
                     <img src="Textile.png" alt="Textile" />
                     <div className="departNameDisplay">
                        <h3>Textile</h3>
                     </div>
                  </div>
               </div>
               <div className="col span-1-of-3 box">
                  <div className="departFirstClick" onClick={this.AutomobileClick}>
                     <img src="Automobile.png" alt="Automobile" />
                     <div className="departNameDisplay">
                        <h3>Automobile</h3>
                     </div>
                  </div>
               </div>
            </div>
            <div className="row">
               <div className="col span-1-of-3 box">
                  <div className="departFirstClick" onClick={this.DoctorClick}>
                     <img src="Doctor.png" alt="Medical Science" />
                     <div className="departNameDisplay">
                        <h3>Medical Science</h3>
                     </div>
                  </div>
               </div>
               <div className="col span-1-of-3 box">
                  <div className="departFirstClick" onClick={this.MarineClick}>
                     <img src="Marine.png" alt="Marine" />
                     <div className="departNameDisplay">
                        <h3>Marine</h3>
                     </div>
                  </div>
               </div>
               <div className="col span-1-of-3 box">
                  <div className="departFirstClick" onClick={this.ManagementClick}>
                     <img src="Management.png" alt="Management" />
                     <div className="departNameDisplay">
                        <h3>Business Management</h3>
                     </div>
                  </div>
               </div>
            </div>
            <div className="row">

               <div className="col span-1-of-3 box">
                  <div className="departFirstClick" onClick={this.AgricultureClick}>
                     <img src="Agriculture.png" alt="Agriculture" />
                     <div className="departNameDisplay">
                        <h3>Agriculture & Biology</h3>
                     </div>
                  </div>
               </div>

               <div className="col span-1-of-3 box">
                  <div className="departFirstClick" onClick={this.ElectricalClick}>
                     <img src="Electronics.png" alt="Electrical" />
                     <div className="departNameDisplay">
                        <h3>Electrical & Electronics</h3>
                     </div>
                  </div>
               </div>
               <div className="col span-1-of-3 box">
                  <div className="departFirstClick" onClick={this.ChemicalClick}>
                     <img src="Chemical.png" alt="Chemical" />
                     <div className="departNameDisplay">
                        <h3>Chemical</h3>
                     </div>
                  </div>
               </div>
            </div>
            <div className="row">
               <div className="col span-1-of-3 box">
                  <div className="departFirstClick" onClick={this.CommunicationClick}>
                     <img src="communication.png" alt="communication" />
                     <div className="departNameDisplay">
                        <h3>Communication</h3>
                     </div>
                  </div>
               </div>
               <div className="col span-1-of-3 box">
                  <div className="departFirstClick" onClick={this.CivilClick}>
                     <img src="civil.png" alt="civil" />
                     <div className="departNameDisplay">
                        <h3>Civil</h3>
                     </div>
                  </div>
               </div>
               <div className="col span-1-of-3 box">
                  <div className="departFirstClick" onClick={this.MechanicalClick}>
                     <img src="Mechanical.png" alt="Mechanical" />
                     <div className="departNameDisplay">
                        <h3>Mech & Manufacturing</h3>
                     </div>
                  </div>
               </div>
            </div>
            <div className="row">
               <div className="col span-1-of-3 box">
                  <div className="departFirstClick" onClick={this.EntertainmentClick}>
                     <img src="Entertainment.png" alt="Entertainment" />
                     <div className="departNameDisplay">
                        <h3>Entertainment</h3>
                     </div>
                  </div>
               </div>
               <div className="col span-1-of-3 box">
                  <div className="departFirstClick" onClick={this.AerospaceClick}>
                     <img src="Aerospace.png" alt="Aerospace" />
                     <div className="departNameDisplay">
                        <h3>Aerospace</h3>
                     </div>
                  </div>
               </div>
               <div className="col span-1-of-3 box">
                  <div className="departFirstClick" onClick={this.ScienceClick}>
                     <img src="Science.png" alt="Physics" />
                     <div className="departNameDisplay">
                        <h3>Physics</h3>
                     </div>
                  </div>
               </div>
            </div>
            <div className="row">
               <div className="col span-1-of-3 box">
                  <div className="departFirstClick" onClick={this.MathsClick}>
                     <img src="Maths.png" alt="Maths" />
                     <div className="departNameDisplay">
                        <h3>Maths</h3>
                     </div>
                  </div>
               </div>
               <div className="col span-1-of-3 box">
                  <div className="departFirstClick" onClick={this.ArtsClick}>
                     <img src="Arts.png" alt="Arts" />
                     <div className="departNameDisplay">
                        <h3>Arts and Hotel</h3>
                     </div>
                  </div>
               </div>
            </div>
         </div>       
      }

      if (this.props.reduxUiRender === 'subCategory') {
            renderDetail = <ListSubCategory category={this.state.category}  subCateClick={this.subCateClick}   
            depReload={this.depReload}
            />
      }

      if (this.props.reduxUiRender=== 'careerPath') {

         renderDetail = <CareerPath category={this.state.category} subCategory={this.state.subCategory} 
         backDisable={this.state.backDisable}
         fwdDisable={this.state.fwdDisable}
         processBack={this.processBack}
         processFwd={this.processFwd}
         lastEntry={this.state.firstPageLastEntry}
         careerDet={this.state.firstPageCareerDet}
         careerDetPage2={this.state.careerDetPage2}
         likeClick={this.likeClick}
         loading={this.state.loading}
         depReload={this.depReload}
         />

     }

       if (this.props.reduxUiRender === 'Next') {

         renderDetail = <SecondPage lastEntry={this.state.firstPageLastEntry}
             firstEntry={this.state.firstPageCareerDet}
             joinCatSubCat={this.state.category.concat(this.state.subCategory)}
             category={this.state.category} subCategory={this.state.subCategory} 
             lastEntryPage2={this.state.lastEntryPage2}
             allFetchEntries={this.state.allFetchEntries}
             allFireDoc={this.state.allFireDoc}
             careerDetPage2={this.state.careerDetPage2}
             likeClick={this.likeClick}
             depReload={this.depReload}
             />
       }

        return (
            <section id="paths">
              <SideDrawer
                        />
               {renderDetail}
               <div className="row">
                  <div className="iconDisplay">
                     <div disabled={this.state.backDisable} onClick={this.processBack} className={backStyleclassName}>
                          Back <i className="ion-ios-skipbackward icon-small"></i>       
                     </div>
                     <div disabled={this.state.fwdDisable} onClick={this.processFwd} className={fwdStyleclassName}>              
                         <i className="ion-ios-skipforward icon-small"></i> Fwd      
                     </div>
                  </div>
               </div>
            </section>
    
        );
    }
}

const mapStateToProps = (state) => {
   return {
      reduxUiRender: state.pageTag.departmentRender,
      showSideDrawer: state.pageTag.reduxshowSideDrawer,
   }
}

const mapDispatchToProps = dispatch => {
   return {
      updatedDepartUiRender: (localUiRender) => dispatch({type: 'UPDATE_UIRENDER',CopieddepartmentRender: localUiRender}),
      sideDrawerToggleHandler: () => dispatch({type: 'SIDE_DRAW_TOGGLE_HANDLE'})
   }
}

export default connect(mapStateToProps,mapDispatchToProps)(Department);