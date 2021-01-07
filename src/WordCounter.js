import React, { Component } from 'react';
import { WordCountResultTable } from './WordCountResultTable';
import WordCountResultText from './WordCountResultText';
class WordCounter extends Component {

    constructor(props) {
        super(props);
        this.countWords = this.countWords.bind(this);
        this.state = {
            editorHeight: '300px',
            isEditor: true
        };
    }

    countWords() {
        let wordsIndex = {};
        let countDataObject = { undefined: 0 };
        this.props.wordLists.forEach(({ label, words }) => {
            countDataObject[label] = 0;
            words.split(',').forEach(word => {
                wordsIndex[word.trim()] = label;
            })
        });
        let textWords = [...this.props.text.matchAll(/\w+/g)].map(m => m[0].toLowerCase());

        textWords.forEach(w => {
            countDataObject[wordsIndex[w]]++;
        })

        console.log(countDataObject);
        const countData = Object.entries(countDataObject);
        const isEditor = false;
        this.setState({ countData, isEditor });

    }

    render() {
        return (
            <div>
                <div className="text-left pb-2">
                    <button onClick={this.countWords} className="btn btn-primary">Count</button>
                </div>
                {
                    this.state.isEditor ? (
                        <textarea style={{ height: this.state.editorHeight }} className="w-100" rows="10" onChange={this.props.textChanged}>{this.props.text}</textarea>
                    )
                        :
                        (
                            <WordCountResultText height={this.state.editorHeight}></WordCountResultText>
                        )
                }

                {
                    this.state.countData &&
                    <WordCountResultTable countData={this.state.countData}></WordCountResultTable>
                }


            </div>

        )

    }
}

export default WordCounter;