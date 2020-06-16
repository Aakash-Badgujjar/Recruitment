import React, { Component } from 'react';
import axios from 'axios';
import Cards from './Cards'
import './Box.css'
import SelectSearch from 'react-select-search';
import './Search.css'
import { BallBeat } from 'react-pure-loaders';


// function renderFriend(props, option, snapshot, className) {
//     const imgStyle = {
//         borderRadius: '50%',
//         verticalAlign: 'middle',
//         marginRight: 10,
//     };
//     console.log("rendering");
//     return (
//         <button {...props} className={className} type="button">
//             <span><img alt="" style={imgStyle} width="32" height="32" src={option.image} /><span>{option.name}</span></span>
//         </button>
//     );
// }

export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allUsers: [],
            users:[],
            isLoading: true,
            searchField: ""
        }
    }
    handleSearch = (event) => {
        const value = event.target.value
        const re = /[0-9A-Za-z]/
        if(value.length!==0 && !re.test(value))
            return
        this.setState({[event.target.name]: event.target.value,
            users:this.state.allUsers.filter( user => user.name.match(event.target.value))})
    }
    fetchResponse = () => {
        //console.log('Component Did mount');
        axios.get('http://localhost:4000/users')
            .then(result => this.setState({
                allUsers: result.data,
                users:result.data,
                isLoading: false

            }))
            .catch(error => this.setState({
                error,
                isLoading: false
            }));

    }
    componentDidMount() {
        this.fetchResponse();
        this.update = setInterval(this.fetchResponse, 40000);
    }


    render() {
        const isLoading = this.state.isLoading;
        let userCards = (user) => <Cards img={user.image} name={user.name} address={user.address} description={user.description} company={user.company} className="box" padding='10'/>
        console.log(this.state)
        if (isLoading) {
            return (
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <p>Please wait Profiles are loading</p>    
                <BallBeat
                        color={'#123abc'}
                        loading={true}
                    />
                </div>
            )
        }
        else {
            return (<div>
                <div className = "search">
                <input
                    // className="select-search"
                    // options={users}
                    name="searchField"
                    value={this.state.searchField}
                    onChange={this.handleSearch}
                    placeholder="Search Profiles"

                />
                </div>
                <p>  </p>
                <div className="grid">{(this.state.users.length===0)?"No profile available":this.state.users.map(userCards)}</div>
            </div>)
        }
    }
}

