import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Button, Badge } from 'antd';
const ButtonGroup = Button.Group;

interface CounterState {
    currentCount: number;
}

export class Counter extends React.Component<RouteComponentProps<{}>, CounterState> {
    constructor(props: any) {
        super(props);
        this.state = { currentCount: 0 };
    }

    public render() {
        return <div>
            <h1>Counter <span><Badge style={{ marginLeft: 10, backgroundColor: '#52c41a' }} count={ this.state.currentCount }>
                <a href="#" className="head-example" />
            </Badge>
            </span></h1>
            <div>
                <Button type="primary" onClick={ () => { this.incrementCounter() } }>Increment</Button>
                <Button style={{ marginLeft: 10 }} type="default" onClick={ () => { this.resetCounter() } }>Reset</Button>
                <Button style={{ marginLeft: 10 }} type="danger" ghost onClick={ () => { this.decreaseCounter() } }>Decrease</Button>
            </div>
            <div style={{ marginTop: 10 }}>
                <ButtonGroup>
                    <Button onClick={ () => { this.incrementCounter() } }>Increment</Button>
                    <Button onClick={ () => { this.resetCounter() } }>Reset</Button>
                    <Button onClick={ () => { this.decreaseCounter() } }>Decrease</Button>
                </ButtonGroup>
            </div>
        </div>;
    }

    incrementCounter() {
        this.setState({
            currentCount: this.state.currentCount + 1
        });
    }

    decreaseCounter() {
        this.setState({
            currentCount: this.state.currentCount - 1
        });
    }

    resetCounter() {
        this.setState({
            currentCount: 0
        });
    }
}
