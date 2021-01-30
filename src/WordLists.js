import React, { Component } from 'react';
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
          <div className="">
              <button onClick={this.props.addWordList} className="btn btn-primary">+</button>
          </div>
  
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

  export {WordListsContainer};