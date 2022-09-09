import React, { Component } from 'react'

const getUsers = () => {
    return (
        [
            {id:1, name: 'John', email: 'john@example.com'},
            {id:2, name: 'Jane', email: 'jane@example.com'}, 
            {id:3, name: 'Joe', email: 'joe@example.com'},
            {id:4, name: 'Joana', email: 'joana@example.com'}, 
        ]
    )
}

export default class Child extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users:[]
        }

    }
    handleRandom = () => { 
        let n = Math.floor(Math.random() * this.state.users.length);
       
        this.setState({
            users: this.state.users.filter((item, index) => index !== n)
        })


    }

    componentDidMount() {
        this.setState({
            users: getUsers()
        })
        

    }
    componentDidUpdate(prevState, prevProps){
        if(prevState.users !== this.state.users){
            document.title = this.state.users.length + ' users left'
        }

    }
    componentWillUnmount(){
        document.title = ' Unmounted'
    }
  render() {
    return (
      <div>
        {this.state.users.map(user =>{
        const { id, email, name} = user; 
        return(
            <div key={id} className="user" >
                <p>{name}</p>
                <p>{email}</p>
             
            </div>

        )

        })}
        <button className='handleRandom' onClick={this.handleRandom}>Delete Random</button>

      </div>
    )
  }
}
