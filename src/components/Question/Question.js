import React from 'react'
import { FontAwesomeIcon  } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown, faUser } from "@fortawesome/free-solid-svg-icons";

import styles from "../../assets/styles/question.module.css";
import Tag from './Tag';

export default function Question() {
    return (
      <div className={`container shadow text-secondary mb-4 ${styles.shadowEffect}`}>
        <div className="row p-3">
          <div className="col-8 p-2">
            How to get started with coding and programming ?
          </div>
          <div className="col-2 p-2">
            <FontAwesomeIcon icon={faUser} className="mr-2"/> Suraj Ojha
          </div>
          <div className="col-1 p-2">
             <FontAwesomeIcon icon={faArrowUp} className="mr-2"/> 4
          </div>
          <div className="col-1 p-2">
            <FontAwesomeIcon icon={faArrowDown} className="mr-2"/> 4
          </div>
        </div>
        <div className="row">
           <div className="col-md-8 col-12 p-2">
            <Tag btnType="python"/>
            <Tag btnType="javascript"/>
            <Tag btnType="kotlin"/>
           </div>
           <div className="col-md-2 col-6 p-2">
             4 Answers
           </div>
           <div className="col-md-2 col-6 p-2">
             {new Date().toJSON().slice(0,10).replace(/-/g,'/')}
           </div>
        </div>
      </div>
    );
}
