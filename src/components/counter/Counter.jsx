import React from "react";
import Controls from "./Controls";
import Statistics from "./Statistics";
import Section from "./Section";
import SectionStat from "./SectionStat";

class Counter extends React.Component{
state = {
  good: 0,
  neutral: 0,
  bad: 0
}

    handleIncrement = (event) => {
        // console.dir(event.target.id) 
        const { id } = event.target;
        switch (id) {
            case '1':
                this.setState (prevState=> {
                return {good:prevState.good+1}})
                break;
            case '2':
                this.setState (prevState=> {
                return {neutral:prevState.neutral+1}})
                break;
            case '3':
                this.setState (prevState=> {
                return {bad:prevState.bad+1}})
                break;

            default:
         console.log('fignia');
        }
    //     if (id === '1') {
    //         this.setState(prevState => {
    //             return {
    //          good:prevState.good+1,
    //      }
    //     })        
    //     }
    //     if (id === '2') {
    //         this.setState (prevState=> {
    //         return {
    //         neutral:prevState.neutral+1,
    //      }
    //     })
    //     }
    //     if (id === '3') {
    //         this.setState (prevState=> {
    //         return {
    //          bad:prevState.bad+1,
    //      }
    //     })
    //     }
    }
    countTotalFeedback = () => {
        const { good, neutral, bad } = this.state;
            return (good + neutral + bad);
    }
    
    countPositiveFeedbackPercentage = () => {
                const { good, bad } = this.state;
        return (
            Math.round((good / bad) * 100)
)
    }


    render() {
                const { good, neutral, bad } = this.state;

        return (
            <>
           <Section title="Please leave feedBack">
                <Controls onIncrement={ this.handleIncrement} />
           </Section>
             <SectionStat title="Statistic" disable={this.countTotalFeedback()}>
                <Statistics good={good} neutral={neutral} bad={bad} summary={this.countTotalFeedback()} positive={this.countPositiveFeedbackPercentage()} />
         </SectionStat>
</>
    )

    }
} 

export default Counter;