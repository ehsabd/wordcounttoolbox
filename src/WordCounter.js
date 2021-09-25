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
    }

    processWords() {
        let wordsIndex = {};
        let wordListsCountData = { undefined: 0 };
        this.props.wordLists.forEach(({ label, words, color }) => {
            wordListsCountData[label] = 0;
            if (words !== undefined){
                words.split(',').forEach(word => {
                    wordsIndex[word.trim()] = {label, color};
                });
            }
        });
        const textWords = [...this.props.text.matchAll(/\w+/g)].map(
            m => {
                const word = m[0].toLowerCase();
                const index = m.index;
                const length = m[0].length;
                let label = undefined;
                let color = undefined;
                if (wordsIndex[word] !== undefined){
                    label = wordsIndex[word].label;
                    color = wordsIndex[word].color;
                }
                return {word, index, length, label, color}
            });
        console.log(JSON.stringify(wordsIndex));
        
        textWords.forEach(item => {
            const key = wordsIndex[item.word]?.label;
            wordListsCountData[key]++;
            
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
                            <WordCountResultText switchedToEditor={()=>{this.setState({isEditor:true});}} textWords={this.state.textWords} labels={this.props.wordLists.map(({label, words})=>label)} text={this.props.text} height={this.state.editorHeight}></WordCountResultText>
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