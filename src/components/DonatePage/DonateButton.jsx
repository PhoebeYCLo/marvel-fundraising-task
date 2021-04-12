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
                <div className="donatepage__title">Give a Monthly Gift</div>
                <div className="donatepage__subtitle">You can make a real difference, transforming the lives and the future we share.</div>
                <p className="donatepage__paragraph">Your monthly support:</p>
                <ul className="donatepage__list">
                    <li>Provides reliable, stable funding which enables us to immediately respond to crises, and to develop long-term programs for superheroes around the world</li>
                    <li>It has lower administrative costs and therefore can have a greater impact</li>
                </ul>
                <div className="donatepage__amount-conatiner">
                    <button className="btn__active" value="30">$30</button>
                    <button className="btn__dormant" value="40">$40</button>
                    <button className="btn__dormant" value="50">$50</button>
                    <button className="btn__dormant" value="75">$75</button>
                </div>
            </div>;
            case 'onetime':
            return <div>
                <div className="donatepage__title">Give a One-time Gift</div>
                <div className="donatepage__subtitle">You can make a real difference, transforming the lives and the future we share.</div>
                <p className="donatepage__paragraph">Your gift can:</p>
                <ul className="donatepage__list">
                    <li>Save lives with essential food, clean water, healthcare and medical treatment</li>
                    <li>Give children an education and the chance to change their lives</li>
                </ul>
                <div className="donatepage__amount-conatiner">
                    <button className="btn__active" value="30">$30</button>
                    <button className="btn__dormant" value="50">$50</button>
                    <button className="btn__dormant" value="75">$75</button>
                    <button className="btn__dormant" value="100">$100</button>
                </div>
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