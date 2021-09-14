import React, { Component } from 'react';
import { TwitterPicker } from 'react-color';
import randomColor from 'randomcolor'

class WordListsContainer extends Component {

    constructor(props){
      super(props);
      this.colors = randomColor({luminosity: 'light',count: 27});
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
              
              return <WordListItem key={index} wordListIndex={index} wordListLabel={item.label} wordListWords={item.words}  wordListColor={item.color} itemChanged={this.props.itemChanged}></WordListItem>
  
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
      this.state={};
      this.itemLabelChanged = this.itemLabelChanged.bind(this);
      this.itemWordsChanged = this.itemWordsChanged.bind(this);
      this.itemColorChanged = this.itemColorChanged.bind(this);
      this.toggleColorPicker = this.toggleColorPicker.bind(this);
    }
  
    itemLabelChanged(e){
      const label = e.target.value;
      this.props.itemChanged(this.props.wordListIndex, {label});
    }
  
    itemWordsChanged(e){
      const words = e.target.value;
      this.props.itemChanged(this.props.wordListIndex, {words} );
    }

    itemColorChanged(colorObj){
      const color = colorObj.hex;
      this.props.itemChanged(this.props.wordListIndex, {color});
    }

    toggleColorPicker(){
      const showColorPicker = !this.state.showColorPicker;
      this.setState({showColorPicker});
    }
    
    render() {
      return (
        <li className="list-group-item px-2">
          <div className="row">
            <div className="col-11">
              <div className="form-group">
                <input className="form-control" onChange={this.itemLabelChanged} value={this.props.wordListLabel} placeholder="Word List Label"/>
              </div>
            </div>
            <div className="col-1">
              <span className="color-picker" style={{backgroundColor:this.props.wordListColor}} onClick={this.toggleColorPicker}></span>  
            </div>
            { this.state.showColorPicker && <div className="col-12">
              <TwitterPicker color={this.props.wordListColor} onChangeComplete={this.itemColorChanged} colors={this.colors}></TwitterPicker>
            </div>}
            <div className="col-12">
              <div className="form-group mb-0">
                <textarea className="form-control" onChange={this.itemWordsChanged} value={this.props.wordListWords} placeholder="Comma-Separated Words"></textarea>
              </div>
            </div>
          </div>
        </li>
      )
    }
  
    
  }

  export {WordListsContainer};