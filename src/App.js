import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import React, { Component } from 'react';
class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      wordLists: [
        {label:'1x', words: 'hi,hello,howdy'},
        {label:'2x', words: 'big,brag,band'}
      ]
    };

    this.loadWordLists();
    console.log(this.state);
    this.wordListItemChanged = this.wordListItemChanged.bind(this);
  }

  wordListItemChanged(index,label,words){
    console.log('wordListItemChanged');
    let wordLists = [...this.state.wordLists];
    wordLists[index] ={label:label, words:words};
    this.saveWordLists(wordLists);
  }
  

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" /> WordCountToolbox
      </header>
        <div className="container">
          <div className="row">
            <div className="col-sm-8">

            </div>
            <div className="col-sm-4">
              <WordListsContainer itemChanged={this.wordListItemChanged} wordLists={this.state.wordLists}></WordListsContainer>
            </div>
          </div>

        </div>

      </div>

    );
  }

  loadWordLists(){
    let wordLists = null;
    const wordListsJson = localStorage.getItem('wordLists');
    try {
      wordLists = JSON.parse(wordListsJson);
    }
    catch(err) {
      console.log('ERROR parsing JSON');
    }
    console.log(wordLists);
    if (wordLists!=null){
      this.state['wordLists']=wordLists;
    }
  }

  saveWordLists(wordLists){
    this.setState({wordLists});
    const wordListsJson = JSON.stringify(wordLists);
    localStorage.setItem('wordLists',wordListsJson);
  }

}

class WordListsContainer extends Component {

  

  render() {
    return (

      <div className="card">
        <div className="card-header">
          Word Lists
      </div>
        {
          this.props.wordLists.map((item, index) => {
            
            return <WordListItem key={index} wordListIndex={index} wordListLabel={item.label} wordListWords={item.words} itemChanged={this.props.itemChanged}></WordListItem>

          })
        }

      </div>
    )
  }
}

class WordListItem extends Component {
  constructor(props) {
    super(props)

    this.itemLabelChanged = this.itemLabelChanged.bind(this);
    this.itemWordsChanged = this.itemWordsChanged.bind(this);
  }

  itemLabelChanged(e){
    this.props.itemChanged(this.props.wordListIndex, e.target.value, this.props.wordListWords);
  }

  itemWordsChanged(e){
    this.props.itemChanged(this.props.wordListIndex, this.props.wordListLabel, e.target.value);
  }
  
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-sm-3">
            <div className="form-group">
              <input className="form-control" onChange={this.itemLabelChanged} value={this.props.wordListLabel}/>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form-group">
              <textarea className="form-control" onChange={this.itemWordsChanged}>{this.props.wordListWords}</textarea>
            </div>
          </div>
        </div>
      </div>
    )
  }

  
}

export default App;
