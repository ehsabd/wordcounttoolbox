import React, { Component } from 'react';
import { WordCountResultTable } from './WordCountResultTable';
import WordCountResultText from './WordCountResultText';
class WordCounter extends Component {

    labels=[];

    constructor(props) {
        super(props);
        this.processWords = this.processWords.bind(this);
        this.state = {
            editorHeight: '300px',
            isEditor: true
        };
        this.labels = this.props.wordLists.map(({label, words})=>label);
    }

    processWords() {
        let wordsIndex = {};
        let wordListsCountData = { undefined: 0 };
        let colorId = 0;
        this.props.wordLists.forEach(({ label, words }) => {
            wordListsCountData[label] = 0;
            if (words != undefined){
                words.split(',').forEach(word => {
                    wordsIndex[word.trim()] = label;
                });
            }
        });
        const textWords = [...this.props.text.matchAll(/\w+/g)].map(
            m => {
                const word = m[0].toLowerCase();
                const index = m.index;
                const length = m[0].length;
                const label = wordsIndex[word];
                return {word, index, length, label}
            });

        textWords.forEach(item => {
            wordListsCountData[wordsIndex[item.word]]++;
        })

        const countData =  Object.entries(wordListsCountData);
        const isEditor = false;
        this.setState({ countData, textWords, isEditor });

    }

    render() {
        return (
            <div>
                <div className="text-left pb-2">
                    <button onClick={this.processWords} className="btn btn-primary">Count</button>
                </div>
                {
                    this.state.isEditor ? (
                        <textarea style={{ height: this.state.editorHeight }} className="w-100" rows="10" onChange={this.props.textChanged} value={this.props.text}></textarea>
                    )
                        :
                        (
                            <WordCountResultText switchedToEditor={()=>{this.setState({isEditor:true});}} textWords={this.state.textWords} labels={this.labels} text={this.props.text} height={this.state.editorHeight}></WordCountResultText>
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