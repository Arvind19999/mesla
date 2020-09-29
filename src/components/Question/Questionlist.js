import React from 'react'
import Question from './Question'

export default function Questionlist() {
    return (
        <div className="container-fluid d-flex">
            <div className="row">
                <div className="col-12">
                    <Question /> 
                </div>
                <div className="col-12"> 
                    <Question />
                </div>
                <div className="col-12">
                    <Question />
                </div>
            </div>
        </div>
    )
}
