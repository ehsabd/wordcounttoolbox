import { Component } from 'react';
import {Link, Route, Switch, BrowserRouter as Router} from 'react-router-dom';
import {withRouter} from 'react-router';
import WizardJobSeeker from './WizardJobSeeker';
class WizardModal extends Component {

    state={whoOptions:[
    {text:'Writer',},{text:'Student'},{text:'Job Seeker', slug:'jobseeker'},{text:'Teacher'}]}

    render() {
        console.log(this.props);
        const {match:{url, path}} = this.props;
        return  <div className="modal fade show d-block" tabindex="-1" role="dialog" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header border-0">
                            <Link to="/wordcounttoolbox"className="close"><span aria-hidden="true">&times;</span></Link>
                            </div>
                            
                            <Router>
                                <Switch>
                                    <Route path={`${path}/jobseeker`}>
                                        <WizardJobSeeker saveProject={this.props.saveProject}></WizardJobSeeker>
                                    </Route>
                                    <Route path={`${path}`}>
                                        <div className="modal-body">
                                            <p className="text-muted text-center">Let us guide you on how WordCountToolbox helps you!</p>
                                            <h2 className="text-center">Who are you?</h2>
                                            <div className="row mt-4">
                                                {
                                                    this.state.whoOptions.map((o) => {
                                                        return <div className="col-sm-3 col-xs-6"><Link to={`${url}/${o.slug}`} class="btn shadow w-100 h-100" style={{ backgroundColor: o.isSelected ? 'gold' : 'white' }} for="option2">{o.text}
                                                        </Link></div>;
                                                    })
                                                }

                                            </div>
                                        </div>
                                        <div className="modal-footer border-0">
                                            <Link to="/wordcounttoolbox"className="btn btn-secondary">Close</Link>
                                            <button type="button" className="btn btn-primary">Next</button>
                                        </div>
                                    </Route>
                                </Switch>
                            </Router>
                            
                        </div>
                    </div>
                </div>
    }
}

export default withRouter(WizardModal);