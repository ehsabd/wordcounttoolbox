import {Component} from 'react';

class WizardJobSeeker extends Component{

    render(){
        return <div className="modal-body">
            <div className="row">
                <div className="col-12">
                    <div className="form-group">
                        <textarea className="form-control" placeholder="Copy & Paste The Job Description Here ..."></textarea>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="form-group">
                        <textarea className="form-control" placeholder="Copy & Paste Your CV Here ..."></textarea>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default WizardJobSeeker;
