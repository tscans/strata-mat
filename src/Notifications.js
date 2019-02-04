import React from 'react';

class Notifications extends React.Component{
    renderNotifications = () =>{
        var notes = [...this.props.notifications].reverse();
        return notes.map((n,i)=>{
            return(
                <div key={i} className="smat-notifications">
                    <div style={{width:30,height:30,backgroundColor:'red',borderRadius:50,float:'left',marginRight:10,marginTop:8}}></div>
                    <div className="smat-notification-message">{n.message}</div>
                </div>
            )
        })
    }
    render(){
        return(
            <div className="smat-notifications-body">
                <h3>{this.props.notifications.length} Notifications</h3>
                {this.renderNotifications()}
            </div>
        )
    }
}

export default Notifications;