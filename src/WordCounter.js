import React, { Component } from 'react';
import { WordCountResultTable } from './WordCountResultTable';
import {Editor, EditorState, CompositeDecorator, ContentState, convertToRaw, convertFromRaw, convertFromHTML} from 'draft-js';
import 'draft-js/dist/Draft.css';
import {defaultText} from './DefaultText';

class WordCounter extends Component {

    labels=[];

    constructor(props) {
        console.log('WordCounter constructor')
        super(props);
        console.log(this.props.wordsIndex);
        this.WordSpan = this.WordSpan.bind(this);
        this.getWordsIndexRecord = this.getWordsIndexRecord.bind(this);
        this.wordStrategy = this.wordStrategy.bind(this);
        const compositeDecorator = new CompositeDecorator([
            {
              strategy: this.wordStrategy,
              component: this.WordSpan,
            }
        ]);
        this.state = {
            editorHeight: '300px'
        };

        if (this.props.rawContent !== undefined){
            this.state.editorState = EditorState.createWithContent(convertFromRaw(this.props.rawContent),compositeDecorator)
        }else{
            this.state.editorState = EditorState.createWithContent(
                ContentState.createFromBlockArray(
                convertFromHTML(defaultText()))
              ,compositeDecorator);
        }

        this.onEditorChange = (editorState) => {
            const raw = convertToRaw(editorState.getCurrentContent());
            this.props.contentChanged(raw);
            this.setState({editorState});
        }
    }


    wordStrategy(contentBlock, callback, contentState) {
        let wordListsCountData = { undefined: 0 };
        console.log('wordStrategy run')
        var regex=/[\w]+/g;
        const text = contentBlock.getText();
        //console.log(text);
        let matchArr;
        while ((matchArr = regex.exec(text)) !== null) {
          const word = matchArr[0];
          const wordsIndexRecrod = this.getWordsIndexRecord(word); 
          if ( wordsIndexRecrod !== undefined){
            const label = wordsIndexRecrod.label;
            if (!(label in wordListsCountData)){
                wordListsCountData[label]=0;
            }
            wordListsCountData[label]++;
            const start = matchArr.index;
            callback(start, start + matchArr[0].length);
          }
        }
        const countData =  Object.entries(wordListsCountData);
        this.setState({countData}); 
    }
    
    getWordsIndexRecord(word){
        const {wordsIndex} = this.props;
        if (wordsIndex!==undefined){
           return wordsIndex[word.toLowerCase()];
        }else{
           return undefined;
        }
    }
      
    WordSpan(props) {
        
        const color = this.getWordsIndexRecord(props.decoratedText)?.color;
        //console.log(color);
        return (
          <span
            style={{background:color}}
            data-offset-key={props.offsetKey}
            >
            {props.children}{props.hi}
          </span>
        );
    };

    render() {
        return (
            <div>
                
                    <div style={{overflowY:'scroll', height:this.state.editorHeight}}>
                        <Editor editorState={this.state.editorState} onChange={this.onEditorChange} />    
                    </div>
                
                {
                    this.state.countData &&
                    <WordCountResultTable countData={this.state.countData}></WordCountResultTable>
                }
            </div>

        )

    }
}

export default WordCounter;