 //~src/components/mydatepicker.component.js
import fr from "date-fns/locale/fr";
import React, { Component } from "react";
import DatePicker , { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";



class MyDatepickerComponent extends Component {

    state = {
        startDate: new Date()
    };

    handleChange = (date, event) => {
        console.log('onChange', date, event);
        this.setState({
            startDate: date
        });
    };

    render() {

    registerLocale('fr', fr);

        return (
            <div>
                <DatePicker
                    
                    onChange={this.handleChange}
                    selected={this.state.startDate}
                    dateFormat="dd/MM/yyyy"  
                    locale = "fr"
                
                />
            </div>
            
        )
    };
}
export default MyDatepickerComponent;