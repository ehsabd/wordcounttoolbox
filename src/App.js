import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import React, { Component} from 'react';
import {defaultText} from './DefaultText.js'
import { WordListsContainer } from './WordLists.js';
import WordCounter from './WordCounter';
import {WordFrequencyLoader} from './ExternalWordLists';

class App extends Component {
  
  state = {
    wordLists: [],
    text: defaultText()
  };

  constructor(props) {
    super(props);

    this.loadWordLists();
    console.log(this.state);
    this.wordListItemChanged = this.wordListItemChanged.bind(this);
    this.textChanged = this.textChanged.bind(this);
    this.addWordList = this.addWordList.bind(this);
    this.loadWordFreqLists = this.loadWordFreqLists.bind(this);
  }

  wordListItemChanged(index, label, words) {
    console.log('wordListItemChanged');
    let wordLists = [...this.state.wordLists];
    wordLists[index] = { label: label, words: words };
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
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" /> WordCountToolbox
      </header>
        <div className="container-fluid pt-3">
          <div className="row">
            <div className="col-sm-8">
             <WordCounter textChanged={this.textChanged} text={this.state.text} wordLists={this.state.wordLists}></WordCounter>
            </div>
            <div className="col-sm-4">
              <WordListsContainer addWordList={this.addWordList} loadWordFreqLists={this.loadWordFreqLists} itemChanged={this.wordListItemChanged} wordLists={this.state.wordLists}></WordListsContainer>
            </div>
          </div>

        </div>

      </div>

    );
  }

  localStorageWordListLoader() {
    const promise = new Promise((resolve, reject) => {
      setTimeout(()=>{
      const wordListsJson = localStorage.getItem('wordLists');
      try {
         resolve(JSON.parse(wordListsJson));
      }
      catch (err) {
        reject('ERROR parsing JSON');
      }
    });},0);
    return promise;
  }

  localStorageWordListSaver(wordLists){
    const promise = new Promise((resolve, reject) => {
      setTimeout(()=>{
      try {
        const wordListsJson = JSON.stringify(wordLists);
        localStorage.setItem('wordLists', wordListsJson);
        resolve('success');
      }
      catch (err) {
        reject('error saving to localStorage');
      }},0);
    });
    return promise;
  }

  loadWordLists(loader = this.localStorageWordListLoader) {
    loader().then((wordLists)=>{
      console.log(wordLists);
      if (wordLists != null) {
        this.setState({wordLists:[]});
        this.setState({wordLists});
      }
    })
  }

  saveWordLists(wordLists, saver = this.localStorageWordListSaver) {
    this.setState({ wordLists });
    saver(wordLists);
  }



}


export default App;
