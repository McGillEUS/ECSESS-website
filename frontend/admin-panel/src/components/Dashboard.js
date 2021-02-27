import React from 'react';
import '../styles/Dashboard.css';
import EventCategoriesTab from './EventCategoriesTab';
import EventsTab from './EventsTab';
import NewsTab from './NewsTab';

class Dashboard extends React.Component{

    render () {

        if (this.props.section === "home") {
            return (
                <div className="dashboard-wrapper">
                    <div classname="dashboard-title">
                        <h2>Home</h2>
                    </div>
                    <div className="dashboard-content">

                    </div>
                </div>
            )
        } else if (this.props.section === "events-resources") {
            return (
                <div className="dashboard-wrapper">
                    <div classname="dashboard-title">
                        <h2>Manage events & resources</h2>
                    </div>
                    <div className="dashboard-content">
                        <div className="section-wrapper">
                            <EventsTab/>
                        </div>
                        <div className="section-wrapper">
                            <EventCategoriesTab/>
                        </div>
                        <div className="section-wrapper">
                            <EventsTab/>
                        </div>
                    </div>
                </div>
            )
        } else if (this.props.section === "featured") {
            return (
                <div className="dashboard-wrapper">
                    <div classname="dashboard-title">
                        <h2>Manage items featured on the home page</h2>
                    </div>
                    <div className="dashboard-content">
                    <div className="section-wrapper">
                            <NewsTab/>
                        </div>
                    </div>
                </div>
            )
        } else if (this.props.section === "livewire") {
            return (
                <div className="dashboard-wrapper">
                    <div classname="dashboard-title">
                        <h2>Manage Livewire submissions</h2>
                    </div>
                    <div className="dashboard-content">
                        
                    </div>
                </div>
            )
        } else if (this.props.section === "industry") {
            return (
                <div className="dashboard-wrapper">
                    <div classname="dashboard-title">
                        <h2>Manage industry opportunities</h2>
                    </div>
                    <div className="dashboard-content">
                        
                    </div>
                </div>
            )
        } else if (this.props.section === "academics") {
            return (
                <div className="dashboard-wrapper">
                    <div classname="dashboard-title">
                        <h2>Manage academic concerns</h2>
                    </div>
                    <div className="dashboard-content">
                        
                    </div>
                </div>
            )
        } else if (this.props.section === "photos") {
            return (
                <div className="dashboard-wrapper">
                    <div classname="dashboard-title">
                        <h2>Manage photos</h2>
                    </div>
                    <div className="dashboard-content">
                        
                    </div>
                </div>
            )
        }
        return (
                <div className="dashboard-wrapper">
                    <div classname="dashboard-title">
                        <h2>Not Found</h2>
                    </div>
                    <div className="dashboard-content">
                        
                    </div>
                </div>
        )
    }


    
}

export default Dashboard;