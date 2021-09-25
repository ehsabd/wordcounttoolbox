import React, { Component } from 'react';
import { TwitterPicker } from 'react-color';

class WordListItem extends Component {
    constructor(props) {
      super(props)
      this.state={};
      this.itemLabelChanged = this.itemLabelChanged.bind(this);
      this.itemWordsChanged = this.itemWordsChanged.bind(this);
      this.itemColorChanged = this.itemColorChanged.bind(this);
      this.toggleColorPicker = this.toggleColorPicker.bind(this);
      console.log(this.props.wordListColor );
      if (this.props.wordListColor === undefined){
        const n = this.props.colorPickerColors.length;
        const color = {hex: this.props.colorPickerColors[Math.floor(Math.random()*n)]};
        this.itemColorChanged(color)
      }
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
      this.setState({showColorPicker:false});
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
            <span className="color-picker" style={{backgroundColor:this.props.wordListColor}} onClick={this.toggleColorPicker}></span>  

            { this.state.showColorPicker && <div className="col-12 d-flex flex-row-reverse">
              <TwitterPicker color={this.props.wordListColor} onChangeComplete={this.itemColorChanged} colors={this.props.colorPickerColors} triangle="top-right"></TwitterPicker>
            </div>}
            <div className="col-12">
              <div className="form-group mb-0">
                <textarea className="form-control" onChange={this.itemWordsChanged} value={this.props.wordListWords} placeholder="Comma-Separated Words"></textarea>
              </div>
            </div>
            <div className="col-6">
            <button onClick={this.props.deleteClicked} className="btn btn-primary">Delete</button>
                
            </div>
          </div>
        </li>
      )
    }
}

export default WordListItem;