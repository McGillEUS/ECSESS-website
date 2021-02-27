import React from 'react';
import '../../styles/SideMenuButton.css';

class SideMenuButton extends React.Component{

    goToSection = (event) => {
        this.props.onSelect(this.props.name)
    }

    render() {
        return (
            <div className="sidemenu-button-wrapper">
                <button className="sidemenu-button" onClick={this.goToSection}>
                    {this.props.buttonText}
                </button>
            </div>
        )
    }
}

export default SideMenuButton;