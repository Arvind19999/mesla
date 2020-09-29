import React from 'react'
import Tag from './Tag'

export default function QuestionListHeader() {
    return (
        <div className="container-fluid m-2 mb-4 p-2 border border-primary">
            <div className="row">
                <div className="col-8 text-left">
                  <h2>Popular Questions</h2>  
                </div>
                <div className="col-4 text-right">
                    <button className="btn btn-info">Ask Question</button>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <Tag btnType="javascript"/>
                    <Tag btnType="kotlin"/>
                    <Tag btnType="python"/>
                </div>
            </div>
        </div>
    )
}
