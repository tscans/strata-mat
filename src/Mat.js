import React from 'react';
import Notifications from './Notifications';
import Profile from './Profile';
import Medals from './Medals';
import Quiz from './Quiz';

class Mat extends React.Component{
    state = {
        onTab: "Profile"
    }
    renderTabs = () =>{
        var tabs = ["Profile","Notifications","Medals","Quiz"];
        return tabs.map(t=>{
            return(
                <div className={this.state.onTab===t?"smat-tab-select":"smat-tab"} 
                key={t}
                onClick={()=>this.setState({onTab:t})}>
                    {t}
                </div>
            );
        });
    }
    renderTabBody = () =>{
        if(this.state.onTab==="Notifications"){
            return(<Notifications notifications={this.props.notifications}/>)
        }
        else if(this.state.onTab==="Profile"){
            return(<Profile/>)
        }
        else if(this.state.onTab==="Medals"){
            return(<Medals/>)
        }
        else{
            return(<Quiz/>)
        }
    }
    render(){
        return(
            <div>
                <div className="smat-tab-line">
                    {this.renderTabs()}
                </div>
                <div className="smat-body">
                    {this.renderTabBody()}
                </div>
            </div>
        )
    }
}

export default Mat;