class WordTool{
    static getWords(text){
        return [...text.matchAll(/\w+/g)]
    }
}

export default WordTool;