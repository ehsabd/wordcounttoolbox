import { Component } from 'react';
import {Link, useRouteMatch} from 'react-router-dom';
import {withRouter} from 'react-router';
class WizardModal extends Component {

    state={whoOptions:[
    {text:'Writer',},{text:'Student'},{text:'Job Seeker'},{text:'Teacher'}]}

    render() {
        const {match:{url, path}} = this.props;
        return  <div className={`modal fade ${(this.props.showModal? 'show d-block':'')}`} tabindex="-1" role="dialog"     aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header border-0">
                            <Link to="/wordcounttoolbox"className="close"><span aria-hidden="true">&times;</span></Link>
                            </div>
                            <div className="modal-body">
                                <p className="text-muted text-center">Let us guide you on how WordCountToolbox helps you!</p>
                                <h2 className="text-center">Who are you?</h2>
                                <div className="row mt-4">
                                {
                                    this.state.whoOptions.map((o)=>{
                                        return <div className="col-sm-3 col-xs-6"><button class="btn shadow w-100 h-100" style={{backgroundColor:o.isSelected?'gold':'white'}} for="option2">{o.text}
                                        </button></div>;
                                    })
                                }
                                
                                </div>
                                
                            

                            </div>
                            <div className="modal-footer border-0">
                            <Link to="/wordcounttoolbox"className="btn btn-secondary">Close</Link>
                                <button type="button" className="btn btn-primary">Next</button>
                            </div>
                        </div>
                    </div>
                </div>
    }
}

export default withRouter(WizardModal);