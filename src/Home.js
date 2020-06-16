import React, {Component} from 'react';
import {Button, Jumbotron} from 'react-bootstrap'
import './Home.css';


export default class Home extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <Jumbotron>
                        <h1>Hello, User!</h1>
                        <p>
                            Recruiter.com is the best place for you to find most suitable candidates for your company.
                        </p>
                        <p><Button variant="primary">Learn more</Button></p>
                    </Jumbotron>
                </div>
            </div>
        )


    }
}