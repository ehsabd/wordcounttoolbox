import React, { Component } from 'react';
import randomColor from 'randomcolor'
import WordListItem from './WordListItem';

class WordListsContainer extends Component {

    constructor(props){
      super(props);
      this.colorPickerColors = randomColor({luminosity: 'bright',count: 27});
    }
    render() {
      return (
  
        <div className="card mb-2 word-lists">
          <div className="card-header">
            <div className="d-flex flex-row justify-content-between align-items-center">
               Word Lists
             <button className="btn btn-primary" onClick={this.props.loadWordFreqLists}>Load Word Freq. Lists</button></div>
          </div>
        <ul className="list-group list-group-flush">
          {
            this.props.wordLists.map((item, index) => {
              
              return <WordListItem key={index} wordListIndex={index} 
              wordListLabel={item.label} 
              wordListWords={item.words}  
              wordListColor={item.color} 
              itemChanged={this.props.itemChanged}
              colorPickerColors={this.colorPickerColors}></WordListItem>
  
            })
          }
          
        
          <li className="list-group-item px-2">
            <div className="row">
              <div className="col-12">
                <div className="form-group mb-0 text-right">
                <button onClick={this.props.addWordList} className="btn btn-primary">+ Add Word List</button>
                </div>
               
              </div>
            </div>   
          </li>
        </ul>
        </div>
      )
    }
  }

  export {WordListsContainer};