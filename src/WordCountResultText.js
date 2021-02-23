import React, { Component } from 'react';
import randomColor from 'randomcolor'
export default class WordCountResultText extends Component{ 

    constructor(props) {
        super(props);
        this.state = {};
    } 

    colors = randomColor({luminosity: 'light',count: 27})

    getColor(label){
        return this.colors[this.props.labels.indexOf(label)];
    }

    render(){

    let spans = [];
    const {text, textWords} = this.props;
    for (var i=0;i<textWords.length;i++){
        const word = textWords[i];
        if (i>0){//whitespaces!
          spans.push({text:text.substring(textWords[i-1].index+textWords[i-1].length, word.index)})
        }
        spans.push({text: word.word, color:this.getColor(word.label)});
    }

    return (
        <div style={{height:this.props.height, overflowY:'scroll'}} className={this.state.isHovered?"border":""}>
            <div className="result-text-wrap" onClick={this.props.switchedToEditor} 
            onMouseEnter={()=>{this.setState({isHovered:true})}}
            onMouseLeave={()=>{this.setState({isHovered:false})}}>
                {spans.map((item, index)=>{
                    return (
                        <span key={`span-${index}`} style={{backgroundColor:item.color}}>{item.text}</span>
                    )
                })}
            </div>
        </div>
    )
 }
}
