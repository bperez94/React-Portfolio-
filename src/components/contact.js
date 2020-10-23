import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';


class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Brandon Perez</h2>
            <img
              src="https://avatars2.githubusercontent.com/u/60058577?s=460&u=7f08ac4476a1ad14c9009466057572fb079a208b&v=4"
              alt="avatar"
              style={{ height: "250px" }}
            />
            <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>
              Feel free to contact me via email
              or through LinkedIn.
            </p>
          </Cell>
          <Cell col={6}>
            <h2>Contact</h2>
            <hr />

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "30px", fontFamily: "Anton" }}
                  >
                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                    <a href="https://www.linkedin.com/in/brandon-perez-6460b81b1/"> LinkedIn</a>
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "30px", fontFamily: "Anton" }}
                  >
                    <i className="fa fa-github-square" aria-hidden="true" />
                    <a href="https://github.com/bperez94">bperez94</a>
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "30px", fontFamily: "Anton" }}
                  >
                    <i className="fa fa-envelope" aria-hidden="true" />
                    brandonp940@gmail.com
                  </ListItemContent>
                </ListItem>

               {/* <ListItem>
                  <ListItemContent
                    style={{ fontSize: "30px", fontFamily: "Anton" }}
                  >
                    <i className="fa fa-instagram" aria-hidden="true" />
                   
                  </ListItemContent>
               </ListItem>*/}
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;