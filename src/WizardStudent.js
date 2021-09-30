import { Component } from 'react';

class WizardStudent extends Component {

    state = {currentSection:'read'}

    constructor(props) {
        super(props);

        this.proceed = this.proceed.bind(this);
    }

    proceed(e) {
        const project = {

        }
        this.props.saveProject(project);
        this.props.closeModal();
    }

    render() {
        return <div className="modal-body">
            <h4 className="text-center mb-2">
                I want to
            </h4>
            <ul className="nav nav-pills mb-3 nav-fill" id="pills-tab" role="tablist">
                <li className="nav-item">
                    <button className={`btn w-100 nav-link ${this.state.currentSection === 'read' ? 'active':''}`} onClick={()=>this.setState({currentSection:'read'})} data-toggle="pill" role="tab" aria-controls="pills-read" aria-selected={this.state.currentSection === 'read'}>Read</button>
                </li>
                <li className="nav-item">
                    <button className={`btn w-100 nav-link ${this.state.currentSection === 'write' ? 'active':''}`} onClick={()=>this.setState({currentSection:'write'})} data-toggle="pill" role="tab" aria-controls="pills-write" aria-selected={this.state.currentSection === 'write'}>Write</button>
                </li>
            </ul>
            <div className="tab-content" id="pills-tabContent">
                <div className={`tab-pane fade ${this.state.currentSection === 'read' ? 'show active' : ''}`} role="tabpanel" aria-labelledby="pills-read-tab">I want to highlight my learning target words in a text

                    Which list aligns well with your learning target?
                    504 , TOEFL, GRE, etc.
                </div>
                <div className={`tab-pane fade ${this.state.currentSection === 'write' ? 'show active':''}`} role="tabpanel" aria-labelledby="pills-write-tab">I want to diversify my writing vocabulary.</div>
            </div>
        </div>
    }
}

export default WizardStudent;
