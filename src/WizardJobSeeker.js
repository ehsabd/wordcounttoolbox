import {Component} from 'react';
import WordTool from './WordTool';

class WizardJobSeeker extends Component{

    state = {}

    constructor(props){
        super(props);
        this.jobDescriptionChanged = this.jobDescriptionChanged.bind(this);
        this.cvChanged = this.cvChanged.bind(this);
        this.proceed = this.proceed.bind(this);
    }

    cvChanged(e){
        this.setState({cv: e.target.value});
        console.log(this.state);
    }

    jobDescriptionChanged(e){
        this.setState({jobDescription: e.target.value});
    }
    
    proceed(e){
        const project = {
            text: this.state.cv,
            wordLists: [{
                label: 'Job Post Words',
                words: WordTool.getWords(this.state.jobDescription).join(',')
            }]
        }
        this.props.saveProject(project);
        this.props.closeModal();
    }

    render(){
        return <div className="modal-body">
            <div className="row">
                <div className="col-12">
                    <div className="form-group">
                        <textarea className="form-control" onChange={this.jobDescriptionChanged} placeholder="Copy & Paste The Job Description Here ..."></textarea>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="form-group">
                        <textarea className="form-control" onChange={this.cvChanged} placeholder="Copy & Paste Your CV Here ..."></textarea>
                    </div>
                </div>
            </div>
            {this.state.jobDescription && this.state.cv &&
                <div className="row">
                    <div className="col-12">
                        <div class="alert alert-primary" role="alert">
                            One measure of a good alignment between your CV and the job post you're applying to is shared words. WordCountToolbox can help you highlight the job post words in your CV.
                            <div className="fomr-group">
                                <button className="btn btn-primary mr-2" onClick={this.proceed}>That is cool!</button>
                                <button className="btn btn-light">I'm not interested</button>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    }
}

export default WizardJobSeeker;
