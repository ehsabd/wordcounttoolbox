import React, { Component } from 'react';
import { WordCountResultTable } from './WordCountResultTable';
import {Editor} from 'draft-js';

class WordCounter extends Component {

    state = {
        editorHeight: '300px'
    };

    render() {
        return (
            <div>
                
                    <div style={{overflowY:'scroll', height:this.state.editorHeight}}>
                        <Editor editorState={this.props.editorState} onChange={this.props.editorChanged} />    
                    </div>
                
                {
                    this.props.countData &&
                    <WordCountResultTable countData={this.props.countData}></WordCountResultTable>
                }
            </div>

        )

    }
}

export default WordCounter;