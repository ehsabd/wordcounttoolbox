import React, { Component } from 'react';

class WordCountResultTable extends Component{ 

    render(){

    return (
        <div className="card">
            <div className="card-header">
                Word Count Table
            </div>
            <table className="table">
                <thead>
                    <th>
                        List
                    </th>
                    <th>
                        Count
                    </th>
                </thead>
                <tbody>
                    {
                        this.props.countData.map((item, index)=>{
                            return (
                                <tr key={`list-index`}><td>
                                    {(item[0]==='undefined') ? 'No List':item[0] }</td>
                                    <td>{item[1]}</td></tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    );

    }
}


export {WordCountResultTable};