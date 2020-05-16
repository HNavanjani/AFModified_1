import React, { Component } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Route, Link , Switch } from "react-router-dom";
import { Button, Container } from "reactstrap";

import AddCourse from "./components/AddCourse";
import MyCourses from "./components/MyCourses";
import GetSubjects from "./components/GetSubjects";

class App extends Component {
  render() {
    return (
          <Router>
            <div>
              <Button color="warning">K</Button>
              <div className="row">
                <div className="col-sm">
                  <Link to="/addco">Add Course</Link>
                </div>
                <div className="col-sm">
                  <Link to="/myco">View Courses</Link>
                </div>
                <div className="col-sm">
                  <Link to="/getsub">Get Subjects</Link>
                </div>
              </div>
          <Switch>
          <Route path="/addco" component={AddCourse} />
          <Route path="/myco" component={MyCourses} />
          <Route path="/getsub" component={GetSubjects} />
        </Switch>
            </div>
          </Router>
    );
  }
}
export default App;