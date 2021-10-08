import React, { Component } from 'react';
import { WordCountResultTable } from './WordCountResultTable';
import {Editor, EditorState, CompositeDecorator, ContentState, convertToRaw, convertFromRaw, convertFromHTML} from 'draft-js';
import 'draft-js/dist/Draft.css';
import {defaultText} from './DefaultText';
import EditorDecoratorHelper from './EditorDecoratorHelper';

class WordCounter extends Component {

    labels=[];

    constructor(props) {
        console.log('WordCounter constructor')
        super(props);
        console.log(this.props.wordsIndex);
        this.WordSpan = this.WordSpan.bind(this);
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
        console.log('wordStrategy run')
        const text = contentBlock.getText();
        const countData = EditorDecoratorHelper.processWords(text, this.props.wordsIndex, callback)
        this.setState({countData}); 
    }
    
      
    WordSpan(props) {
        
        const color = EditorDecoratorHelper.getWordsIndexRecord(props.decoratedText, this.props.wordsIndex)?.color;
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