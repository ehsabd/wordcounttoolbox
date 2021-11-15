import React, { Component} from 'react';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import WizardModal from './WizardModal';
class App extends Component {
  
  render() {
   return <Router>
    <Switch>
      <Route path="/wordcounttoolbox/wizard">
        <WizardModal saveProject={this.saveProject}></WizardModal>
        <div className={`modal-backdrop fade show`}></div>
      </Route>
      <Route>
        <div className="container-fluid pt-3">
          <div className="row">
            <div className="col-lg-6">
              <div className="alert text-white bg-warning">
                <p>
                Do you want to use the wizard to get started with wordcounttoolbox?

                </p>
                <Link to="/wordcounttoolbox/wizard">Click Here!</Link>
            </div>
            </div>

          </div>
        </div>
       
      </Route>
    </Switch>
    <Home></Home>
  </Router>;
  }
}


export default App;
