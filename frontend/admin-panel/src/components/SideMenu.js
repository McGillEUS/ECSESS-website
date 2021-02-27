import SideMenuButton from './SideMenuComponents/SideMenuButton'
import React from 'react';
import '../styles/SideMenu.css';

class SideMenu extends React.Component{

    onChange = (name) => {
        this.props.goToSection(name);
    }

    render() {
    return (
        <div className="sidemenu-wrapper">
            <div className="sidemenu-padding">
            <SideMenuButton onSelect={this.onChange} name="home" buttonText="Home" />
            <SideMenuButton onSelect={this.onChange} name="events-resources" buttonText="Events & Resources" />
            <SideMenuButton onSelect={this.onChange} name="featured" buttonText="Featured Elements" />
            <SideMenuButton onSelect={this.onChange} name="livewire" buttonText="Livewire" />
            <SideMenuButton onSelect={this.onChange} name="industry" buttonText="Industry Opportunities" />
            <SideMenuButton onSelect={this.onChange} name="academics" buttonText="Academics" />
            <SideMenuButton onSelect={this.onChange} name="photos" buttonText="Photos" />
            </div>
        </div>
    )}
}

export default SideMenu;