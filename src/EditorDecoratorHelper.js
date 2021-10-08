class EditorDecoratorHelper{
    static processWords(text, wordsIndex, callback){
        let wordListsCountData = { undefined: 0 };
        var regex=/[\w]+/g;
        
        console.log(wordsIndex);
        let matchArr;
        while ((matchArr = regex.exec(text)) !== null) {
          const word = matchArr[0];
          const wordsIndexRecrod = EditorDecoratorHelper.getWordsIndexRecord(word, wordsIndex); 
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
        return countData;
    }
    
    static getWordsIndexRecord(word, wordsIndex){
        if (wordsIndex!==undefined){
           return wordsIndex[word.toLowerCase()];
        }else{
           return undefined;
        }
    }
}

export default EditorDecoratorHelper;