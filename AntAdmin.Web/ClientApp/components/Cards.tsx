import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Card, Col, Row } from 'antd';

interface CardsState {
    cards: StatusCard[];
    loading: boolean;
}

interface StatusCard {
    name: string;
    active: boolean;
}

export class Cards extends React.Component<RouteComponentProps<{}>, CardsState> {
    constructor(props: any) {
        super(props);
        
        this.state = { cards: [], loading: true };

        fetch('api/SampleData/Cards')
            .then(response => response.json() as Promise<StatusCard[]>)
            .then(data => {
                this.setState({ cards: data, loading: false });
            });
    }

    public render() {
        return <div><Row gutter={16}>
            {this.state.cards.map(card =>
                <Col style={{padding: 5}} span={8}>
                <Card title={card.name} extra={<a href="#">More</a>} style={{ width: 270 }}></Card>
                </Col>
            )}
        </Row></div>;
    }
}
