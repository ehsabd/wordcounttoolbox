import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import React, { Component} from 'react';
import {defaultText} from './DefaultText.js'
import { WordListsContainer } from './WordLists.js';
import WordCounter from './WordCounter';
import {WordFrequencyLoader} from './ExternalWordLists';
import WizardModal from './WizardModal';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import {EditorState, CompositeDecorator, ContentState, convertToRaw, convertFromRaw, convertFromHTML} from 'draft-js';
import 'draft-js/dist/Draft.css';
import EditorDecoratorHelper from './EditorDecoratorHelper';

class App extends Component {
  
  state = {
  };

  constructor(props) {
    super(props);
    console.log(this.state);
    this.wordListItemChanged = this.wordListItemChanged.bind(this);
    this.addWordList = this.addWordList.bind(this);
    this.loadWordFreqLists = this.loadWordFreqLists.bind(this);
    this.deleteWordList = this.deleteWordList.bind(this);
    this.saveProject = this.saveProject.bind(this);
    this.createOrUpdateWordIndex = this.createOrUpdateWordIndex.bind(this);
    this.WordSpan = this.WordSpan.bind(this);
    this.wordStrategy = this.wordStrategy.bind(this);
    this.onEditorChange = this.onEditorChange.bind(this);
    this.saveWorkspace = this.saveWorkspace.bind(this);    
  }

  wordStrategy(contentBlock, callback, contentState) {
      console.log('wordStrategy run')
      const text = contentBlock.getText();
      const {wordsIndex} = this.state;
      const countData = EditorDecoratorHelper.processWords(text, wordsIndex, callback)
      this.setState({countData}); 
  }

    
  WordSpan(props) {
      
      const color = EditorDecoratorHelper.getWordsIndexRecord(props.decoratedText, this.state.wordsIndex)?.color;
      //console.log(color);
      return (
        <span
          style={{background:color}}
          data-offset-key={props.offsetKey}
          >
          {props.children}{props.hi}
        </span>
      );
  };


  componentDidMount(){
    this.loadWorkspace();
  }

  createOrUpdateWordIndex(wordLists) {
    let wordsIndex = {};
    wordLists.forEach(({ label, words, color }) => {
        if (words !== undefined){
            words.split(',').forEach(word => {
                wordsIndex[word.trim().toLowerCase()] = {label, color};
            });
        }
    });
    this.setState({ wordsIndex });
  }

  deleteWordList(e, index){
    this.saveWordLists(this.state.workspace.project.wordLists.filter((item, i)=>i !== index));
  }

  wordListItemChanged(index, obj) {
    console.log('wordListItemChanged');
    let wordLists = [...this.state.workspace.project.wordLists];
    Object.assign(wordLists[index], obj);
    this.saveWordLists(wordLists);
  }

  addWordList(){
    this.saveWordLists(this.state.workspace.project.wordLists.concat({}));
  }

  loadWordFreqLists(){
    WordFrequencyLoader().then((wordLists)=>{
      console.log(wordLists);
      if (wordLists != null) {
        this.saveProject({wordLists})
      }
    })
  }

  render() {

    return (
      <div className="App">
        <Router>
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
        </Router>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" /> WordCountToolbox
      </header>
      {this.state.workspace &&
        <div className="container-fluid pt-3">
          <div className="row">
            <div className="col-sm-8">
              {this.state.editorState &&
                 <WordCounter editorChanged={this.onEditorChange} editorState={this.state.editorState} countData={this.state.countData}></WordCounter>
              }
            </div>
            <div className="col-sm-4">
              <WordListsContainer addWordList={this.addWordList} deleteWordList={this.deleteWordList} loadWordFreqLists={this.loadWordFreqLists} itemChanged={this.wordListItemChanged} wordLists={this.state.workspace.project.wordLists}></WordListsContainer>
            </div>
          </div>

        </div>
      }
      </div>

    );
  }

  localStorageLoader(key='wct_workspace') {
    const promise = new Promise((resolve, reject) => {
      setTimeout(()=>{
      const objJson = localStorage.getItem(key);
      try {
         resolve(JSON.parse(objJson));
      }
      catch (err) {
        reject('ERROR parsing JSON');
      }
    });},0);
    return promise;
  }

  localStorageSaver(obj, key='wct_workspace'){
    const promise = new Promise((resolve, reject) => {
      setTimeout(()=>{
      try {
        const objJson = JSON.stringify(obj);
        localStorage.setItem(key, objJson);
        resolve('success');
      }
      catch (err) {
        reject('error saving to localStorage');
      }},0);
    });
    return promise;
  }

  loadWorkspace(loader = this.localStorageLoader) {
    loader().then((workspace)=>{
      console.log(workspace);
      
      
      if (workspace === null){
        workspace = {
          showWizard:true,
          project:{
            wordLists: []
          }
        }
      }

      if (workspace.showWizard && window.location.pathname !== '/wordcounttoolbox/wizard' ){
          window.location.href = '/wordcounttoolbox/wizard'; 
      }
      const {project} = workspace;

        this.createOrUpdateWordIndex(project.wordLists);
        const {rawContent} = project;
        let editorState;
        const compositeDecorator = new CompositeDecorator([
          {
            strategy: this.wordStrategy,
            component: this.WordSpan,
          }
        ]);
        if (rawContent !== undefined){
          editorState = EditorState.createWithContent(convertFromRaw(rawContent),compositeDecorator)
        }else{
          editorState = EditorState.createWithContent(
              ContentState.createFromBlockArray(
              convertFromHTML(defaultText()))
            ,compositeDecorator);
        }
        this.setState({workspace, editorState});      
    })
  }


  onEditorChange (editorState) {
    const rawContent = convertToRaw(editorState.getCurrentContent());
    this.saveProject({rawContent});
    this.setState({editorState});
  }

  saveProject(projectMoified ){
    let workspace = {...this.state.workspace};
    Object.assign(workspace.project, projectMoified);
    this.createOrUpdateWordIndex(workspace.project.wordLists);
    this.setState({workspace});
    this.saveWorkspace();
  }

  saveWorkspace(saver = this.localStorageSaver){
    saver(this.state.workspace);
  }

  saveWordLists(wordLists)  {
    this.saveProject({ wordLists });
  }



}


export default App;
