import { Component } from 'react';
import {Link, Route, Switch, BrowserRouter as Router} from 'react-router-dom';
import {withRouter} from 'react-router';
import WizardJobSeeker from './WizardJobSeeker';
import WizardStudent from './WizardStudent';
class WizardModal extends Component {

    state={whoOptions:[
    {text:'Writer', slug:'writer'},{text:'Student', slug:'student'},{text:'Job Seeker', slug:'jobseeker'},{text:'Teacher', slug:'teacher'}]}

    constructor(props){
        super(props);
        this.closeModal = this.closeModal.bind(this);
    }

    closeModal(){
        this.props.history.push('/wordcounttoolbox');
    }

    render() {
        console.log(this.props);
        const {match:{url, path}} = this.props;
        return  <div className="modal fade show d-block" tabIndex="-1" role="dialog" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header border-0">
                            <button className="border-0 close" onClick={this.closeModal}><span aria-hidden="true">&times;</span></button>
                            </div>
                            
                            <Router>
                                <Switch>
                                    <Route path={`${path}/jobseeker`}>
                                        <WizardJobSeeker closeModal={this.closeModal} saveProject={this.props.saveProject}></WizardJobSeeker>
                                    </Route>
                                    <Route path={`${path}/student`}>
                                        <WizardStudent closeModal={this.closeModal} saveProject={this.props.saveProject}></WizardStudent>
                                    </Route>
                                    <Route path={`${path}`}>
                                        <div className="modal-body">
                                            <p className="text-muted text-center">Let us guide you on how WordCountToolbox helps you!</p>
                                            <h2 className="text-center">Who are you?</h2>
                                            <div className="row mt-4">
                                                {
                                                    this.state.whoOptions.map((o,i) => {
                                                        return <div key={`k${i}`} className="col-sm-3 col-xs-6"><Link to={`${url}/${o.slug}`} className="btn shadow w-100 h-100" style={{ backgroundColor: o.isSelected ? 'gold' : 'white' }}>{o.text}
                                                        </Link></div>;
                                                    })
                                                }

                                            </div>
                                        </div>
                                        <div className="modal-footer border-0">
                                            <button onClick={this.closeModal} className="btn btn-secondary">Close</button>
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