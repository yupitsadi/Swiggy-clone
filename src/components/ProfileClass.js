import React from "react";

class Profile extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            userInfo : {
                name : "Dummy Name",
                location : "Dummy Location",
            },
        };
        console.log("");
    }

async componentDidMount(){
    const data = await fetch("https://api.github.com/users/yupitsadi");
    const json = await data.json();
    this.setState({
        userInfo: json,
    });
    console.log(json);
}

    render(){
        
        console.log("render");
        return(
        <div>
            <h1>Component class</h1>
            <img src={this.state.userInfo.avatar_url}/>
            <h2>Name : {this.state.userInfo.name}</h2>
            <h2>location : {this.state.userInfo.location}</h2>
        </div>
        );
    }
}

export default Profile;