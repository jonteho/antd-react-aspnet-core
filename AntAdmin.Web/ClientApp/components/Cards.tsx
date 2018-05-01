import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Card, Col, Row } from 'antd';

export class Cards extends React.Component<RouteComponentProps<{}>, {}> {
    constructor(props: any) {
        super(props);
    }

    public render() {
        return <div><Card title="Card title" extra={<a href="#">More</a>} style={{ width: 300 }}>
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
    </Card></div>;
    }
}
