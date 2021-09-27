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
    wordLists: [],
    text: defaultText(),
    showWizard:true
  };

  constructor(props) {
    super(props);
    console.log(this.state);
    this.wordListItemChanged = this.wordListItemChanged.bind(this);
    this.textChanged = this.textChanged.bind(this);
    this.addWordList = this.addWordList.bind(this);
    this.loadWordFreqLists = this.loadWordFreqLists.bind(this);
    this.deleteWordList = this.deleteWordList.bind(this);

  }

  componentDidMount(){
    this.loadWordLists();
  }

  deleteWordList(e, index){
    this.saveWordLists(this.state.wordLists.filter((item, i)=>i !== index));
  }

  wordListItemChanged(index, obj) {
    console.log('wordListItemChanged');
    let wordLists = [...this.state.wordLists];
    Object.assign(wordLists[index], obj);
    this.saveWordLists(wordLists);
  }

  addWordList(){
    this.saveWordLists(this.state.wordLists.concat({}));
  }

  loadWordFreqLists(){
    this.loadWordLists(WordFrequencyLoader);
  }

  textChanged(e) {
    this.setState({ text: e.target.value });
  }

  render() {

    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path="/wordcounttoolbox/wizard">
              <WizardModal showModal={this.state.showWizard}></WizardModal>
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
             <WordCounter textChanged={this.textChanged} text={this.state.text} wordLists={this.state.wordLists}></WordCounter>
            </div>
            <div className="col-sm-4">
              <WordListsContainer addWordList={this.addWordList} deleteWordList={this.deleteWordList} loadWordFreqLists={this.loadWordFreqLists} itemChanged={this.wordListItemChanged} wordLists={this.state.wordLists}></WordListsContainer>
            </div>
          </div>

        </div>

      </div>

    );
  }

  localStorageLoader(key='wordLists') {
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

  localStorageSaver(obj, key='wordLists'){
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

  loadWordLists(loader = this.localStorageLoader) {
    loader().then((wordLists)=>{
      console.log(wordLists);
      if (wordLists != null) {
        this.setState({wordLists:[]});
        this.setState({wordLists});
      }
    })
  }

  saveWordLists(wordLists, saver = this.localStorageSaver) {
    this.setState({ wordLists });
    saver(wordLists);
  }



}


export default App;
