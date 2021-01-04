import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import React, { Component, useState, useRef } from 'react';
import JoditEditor from "jodit-react";

import { WordListsContainer } from './WordLists.js';
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      wordLists: [
        { label: '1x', words: 'hi,hello,howdy' },
        { label: '2x', words: 'big,brag,band' }
      ]
    };

    this.loadWordLists();
    console.log(this.state);
    this.wordListItemChanged = this.wordListItemChanged.bind(this);
  }

  wordListItemChanged(index, label, words) {
    console.log('wordListItemChanged');
    let wordLists = [...this.state.wordLists];
    wordLists[index] = { label: label, words: words };
    this.saveWordLists(wordLists);
  }


  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" /> WordCountToolbox
      </header>
        <div className="container pt-3">
          <div className="row">
            <div className="col-sm-8">
              <Editor></Editor>
            </div>
            <div className="col-sm-4">
              <WordListsContainer itemChanged={this.wordListItemChanged} wordLists={this.state.wordLists}></WordListsContainer>
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


const Editor  = ({}) => {
 
  const editor = useRef(null)
  const [content, setContent] = useState('')

  const config = {
    readonly: false // all options from https://xdsoft.net/jodit/doc/
  }

  return (
    <JoditEditor
      ref={editor}
      value={content}
      config={config}
      tabIndex={1} // tabIndex of textarea
      onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
      onChange={newContent => { }}
    />
  );
}

export default App;
