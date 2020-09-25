import React from 'react'
import { Jumbotron, Button } from 'reactstrap';
import styles from '../assets/styles/hero.module.css'


export default function Hero() {
    return (
      <div >
        <Jumbotron className={styles.jumboleft}>
          <h1 className="display-3">Welcome to Mesla!</h1>
          <p className="lead">
            Join the community today! <br />
            Learn. Code. Interact.
          </p>
          <hr className="my-2" style={{width: "400px", float: 'left'}}/>
          <p style={{clear: 'both'}}>
            <strong>Login / Register to get started.</strong> 
          </p>
          <p className="lead">
            <Button color="primary">Ask Question</Button>
          </p>
        </Jumbotron>
      </div>
    );
}
