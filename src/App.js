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

class App extends Component {
  
  state = {
    project:{
      wordLists: [],
      text: defaultText(),
    },
    showWizard:true
  };

  constructor(props) {
    super(props);
    console.log(this.state);
    this.wordListItemChanged = this.wordListItemChanged.bind(this);
    this.contentChanged = this.contentChanged.bind(this);
    this.addWordList = this.addWordList.bind(this);
    this.loadWordFreqLists = this.loadWordFreqLists.bind(this);
    this.deleteWordList = this.deleteWordList.bind(this);
    this.saveProject = this.saveProject.bind(this);
    this.createOrUpdateWordIndex = this.createOrUpdateWordIndex.bind(this);
        

  }

  componentDidMount(){
    this.loadProject();
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
    this.saveWordLists(this.state.project.wordLists.filter((item, i)=>i !== index));
  }

  wordListItemChanged(index, obj) {
    console.log('wordListItemChanged');
    let wordLists = [...this.state.project.wordLists];
    Object.assign(wordLists[index], obj);
    this.saveWordLists(wordLists);
  }

  addWordList(){
    this.saveWordLists(this.state.project.wordLists.concat({}));
  }

  loadWordFreqLists(){
    WordFrequencyLoader().then((wordLists)=>{
      console.log(wordLists);
      if (wordLists != null) {
        this.saveProject({wordLists})
      }
    })
  }

  contentChanged(rawContent) {
    console.log(rawContent);
    this.saveProject({rawContent})
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
              <p>
              Do you want to use the wizard to get started with wordcounttoolbox?

              </p>
              <Link to="/wordcounttoolbox/wizard">Click Here!</Link>
            </Route>
          </Switch>
        </Router>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" /> WordCountToolbox
      </header>
        <div className="container-fluid pt-3">
          <div className="row">
            <div className="col-sm-8">
             <WordCounter contentChanged={this.contentChanged} text={this.state.project.text} wordLists={this.state.project.wordLists} wordsIndex={this.state.wordsIndex}></WordCounter>
            </div>
            <div className="col-sm-4">
              <WordListsContainer addWordList={this.addWordList} deleteWordList={this.deleteWordList} loadWordFreqLists={this.loadWordFreqLists} itemChanged={this.wordListItemChanged} wordLists={this.state.project.wordLists}></WordListsContainer>
            </div>
          </div>

        </div>

      </div>

    );
  }

  localStorageLoader(key='wct_project') {
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

  localStorageSaver(obj, key='wct_project'){
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

  loadProject(loader = this.localStorageLoader) {
    loader().then((project)=>{
      console.log(project);
      if (project != null) {
        this.createOrUpdateWordIndex(project.wordLists);
        this.setState({project});  
        
      }
    })
  }

  saveProject(projectMoified, saver = this.localStorageSaver ){
    let project = {...this.state.project};
    Object.assign(project, projectMoified);
    this.createOrUpdateWordIndex(project.wordLists);
    this.setState({project});
    saver(project);
  }

  saveWordLists(wordLists)  {
    this.saveProject({ wordLists });
  }



}


export default App;
