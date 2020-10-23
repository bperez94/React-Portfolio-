import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>

            <h2 style={{paddingTop: '2em'}}>Brandon Perez</h2>
            <h4 style={{color: 'grey'}}>Full Stack and Back End Developer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p></p> 
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>

            <h5>Location</h5>
            <p>Washington, DC </p>

            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>

          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={2020}
              endYear={2020}
              schoolName="George Washington University"
              schoolDescription="Full-Stack Web Developer Coding Bootcamp specializing in the MongoDB-Express.js-React.js-Node.js stack. Projects and Activities available in the Projects section."
               />

               {/*<Education
                 
               <hr style={{borderTop: '3px solid #e22947'}} />*/}

              <h2>Experience</h2>

            {/*<Experience
              startYear={}
              endYear={}
              jobName=""
              jobDescription=""
              />

              <Experience
                startYear={}
                endYear={}
                jobName=""
                jobDescription=""
                />
              <hr style={{borderTop: '3px solid #e22947'}} />*/}

              {/* <h2>Skills</h2>
              <Skills
                skill="javascript"
                progress={100}
                />
                <Skills
                  skill="HTML"
                  progress={80}
                  />
                  <Skills
                    skill="NodeJS"
                    progress={50}
                    />
                    <Skills
                      skill="React"
                      progress={25}
                      /> */}


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;