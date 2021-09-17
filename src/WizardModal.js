import { Component } from 'react';

class WizardModal extends Component {

    state={whoOptions:[
    {text:'Writer',},{text:'Student'},{text:'Job Seeker'},{text:'Teacher'}]}

    render() {
        return  <div className={`modal fade ${(this.props.showModal? 'show d-block':'')}`} tabindex="-1" role="dialog"     aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header border-0">
                                <button type="button" onClick={this.props.modalClosed} className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
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
                                <button type="button" className="btn btn-secondary" onClick={this.props.modalClosed}>Close</button>
                                <button type="button" className="btn btn-primary">Next</button>
                            </div>
                        </div>
                    </div>
                </div>
    }
}

export default WizardModal;