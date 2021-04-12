import React, { Component } from 'react';

class DonateButton extends Component{
    constructor(props) {
        super(props);
    
        this.state = {
          donateSelection: 'monthly',
          active: false
        }
    
      }
    
      toggleContent = (event) => {
        const currentState = this.state.active;
        event.preventDefault();
        this.setState({
          donateSelection: event.target.value,
          active: !currentState
        })
      }
    
      switchContent = (value) => {
        switch (value) {
            case 'monthly':
            return <div>
                <p>Monthly Content Here</p>
            </div>;
            case 'onetime':
            return <div>
                <p>One Time Content Here</p>
            </div>;
            default:
            return null;
        }
      }
    
      render() {
        const { donateSelection } = this.state;
        const { active } = this.state;
    
        return (
          <div className="container-fluid payment-btn-group">
            <button outline className={donateSelection ==='monthly' ? 'btn__active' : 'btn__dormant'} color="secondary" value="monthly" onClick={this.toggleContent} >Monthly</button>
            <button outline className={donateSelection ==='onetime' ? 'btn__active' : 'btn__dormant'} color="secondary" value="onetime" onClick={this.toggleContent} >One Time</button>
            {this.switchContent(donateSelection)}
          </div>
        );
      }
}

export default DonateButton;