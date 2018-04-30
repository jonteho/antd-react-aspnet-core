import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Form, Icon, Input, Button, Checkbox, Row, Col, message } from 'antd';
const FormItem = Form.Item;
import {FormComponentProps} from 'antd/lib/form/Form';

interface LoginProps {
    test: string;
} 

export class Login extends React.Component<LoginProps & FormComponentProps> {
  handleSubmit = (e:any) => {
    e.preventDefault();
    message.info('Login!');
  }
  render() {
    return (
        <Row>
            <Col xs={{span: 4}} >
      <Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem>
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" /> 
        </FormItem>
        <FormItem>
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
        </FormItem>
        <FormItem>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
        </FormItem>
      </Form>
      </Col>
      </Row>
    );
  }
}

// const WrappedNormalLoginForm = Form.create()(Login as any);
export default Form.create<LoginProps>()(Login);