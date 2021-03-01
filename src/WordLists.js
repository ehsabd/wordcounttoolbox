import React, { Component } from 'react';
class WordListsContainer extends Component {


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
              
              return <WordListItem key={index} wordListIndex={index} wordListLabel={item.label} wordListWords={item.words} itemChanged={this.props.itemChanged}></WordListItem>
  
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
        <li className="list-group-item px-2">
          <div className="row">
            <div className="col-12">
              <div className="form-group">
                <input className="form-control" onChange={this.itemLabelChanged} value={this.props.wordListLabel}/>
              </div>
            </div>
            <div className="col-12">
              <div className="form-group mb-0">
                <textarea className="form-control" onChange={this.itemWordsChanged}>{this.props.wordListWords}</textarea>
              </div>
            </div>
          </div>
        </li>
      )
    }
  
    
  }

  export {WordListsContainer};