import React from 'react';
import Mat from './Mat';

class App extends React.Component{
    state = {
        open:false,
        hasNotifications: false,
        notifications:[]
    }
    componentDidMount(){
        window.StrataGame = {
            notification: (message,medal) =>{
                var notifications = [...this.state.notifications];
                notifications.push({
                    message,
                    dateTime: new Date(),
                    medal
                });
                this.setState({notifications});
            },
            hasNotifications: (b)=>{
                this.setState({hasNotifications:b});
            }
        }
    }
    componentWillUnmount(){
        window.Strata = null;
    }
    handleOpen = () =>{
        this.setState({open:!this.state.open});
    }
    renderWindow = () =>{
        if(this.state.open){
            return(
                <div>
                    <div className="smat-app-mat-open">
                        <Mat notifications={this.state.notifications}/>
                    </div>
                    <div className="smat-down-arrow"></div>
                </div>
            )
        }
    }
    render(){
        return(
            <div>
                <div className="smat-app-mat" style={{border:this.state.hasNotifications?"3px solid #04528A":null}} onClick={this.handleOpen}>
                    <img src={"/stratalogobadge.png"} height="30" width="30"/>
                </div>
                {this.renderWindow()}
            </div>
        )
    }
}

export default App;