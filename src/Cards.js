import React, {Component} from 'react';
import {Button, ListGroup, ListGroupItem} from 'react-bootstrap';
import './Cards.css'


export default class Cards extends Component {

    state = {
        show: false
    }
    info = [["Description", this.props.description], ["Company", this.props.company]]
    infoExtended = [...this.info, ["Address", this.props.address]]


    render() {
        return (
            <div className="card text-center">
                <div style={{height:"400px"}}>
                    <div className='overflow'>
                        {(!this.state.show) ?
                            <img src={this.props.img} width="50px" height="120px" alt="Undefined"
                                 className='card-img-top'/>
                                 : ""}
                    </div>
                    <div className="card-body text-dark ">
                        <h4 className="card-title">{this.props.name}</h4>
                        <div className="card-text text-secondary ">

                            <ListGroup className="list-group-flush">
                                {(this.state.show) ? this.infoExtended.map((v) =>
                                    <ListGroupItem>{v[0]}: {v[1]}</ListGroupItem>) : this.info.map((v) =>
                                    <ListGroupItem>{v[0]}: {v[1]}</ListGroupItem>)}
                            </ListGroup>
                        </div>
                    </div>
                </div>
                <Button variant="primary" className="mt-auto" onClick={() => {
                    this.setState({show: !this.state.show})
                }}>{(this.state.show) ? "Show Less" : "Show More"}</Button>
            </div>


        )

    }

}
