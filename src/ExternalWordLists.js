import axios from 'axios';
export const WordFrequencyLoader = ()=>{
    const url = 'https://script.google.com/macros/s/AKfycbwGLoLNyA2xFrt4eRO8WLqikpfLCpn75j53k8blDdHisFpPNf8oQ4mZ/exec';
    const promise = new Promise((resolve, reject)=>{
        axios.get(url)
        .then((value)=>{
            console.log(value.data);
            value.data.forEach((x,i)=>{x.color=`rgba(${200-i*20},${200-i*20},255,1)`})
            resolve(value.data)
        }).catch((reason)=>{reject(reason)});
    })
    return promise;
}

