import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import React, { Component} from 'react';

import { WordListsContainer } from './WordLists.js';
import WordCounter from './WordCounter';
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      wordLists: [
        { label: '1x', words: 'hi,hello,howdy' },
        { label: '2x', words: 'big,brag,band' },
        { label:'wh questions', words:'what,when,where'}
      ],
      text: 'Hi there!, howdy? What if I brag about something'
    };

    this.loadWordLists();
    console.log(this.state);
    this.wordListItemChanged = this.wordListItemChanged.bind(this);
    this.textChanged = this.textChanged.bind(this);
    this.addWordList = this.addWordList.bind(this);
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
              <WordListsContainer addWordList={this.addWordList} itemChanged={this.wordListItemChanged} wordLists={this.state.wordLists}></WordListsContainer>
            </div>
          </div>

        </div>

      </div>

    );
  }

  loadWordLists() {
    let wordLists = null;
    const wordListsJson = localStorage.getItem('wordLists');
    try {
      wordLists = JSON.parse(wordListsJson);
    }
    catch (err) {
      console.log('ERROR parsing JSON');
    }
    console.log(wordLists);
    if (wordLists != null) {
      this.state['wordLists'] = wordLists;
    }
  }

  saveWordLists(wordLists) {
    this.setState({ wordLists });
    const wordListsJson = JSON.stringify(wordLists);
    localStorage.setItem('wordLists', wordListsJson);
  }



}


export default App;
