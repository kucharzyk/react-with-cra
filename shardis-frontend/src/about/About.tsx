import * as React from 'react';
import { StatelessComponent } from 'react';
import { Card, Col, Progress, Row, Steps } from 'antd';

const Step = Steps.Step;

const About: StatelessComponent = () => {
  return (
    <div className="About">
      <h2>This is About component</h2>
      <div>
        <Row>
          <Col sm={8}>
            <Steps current={1} direction="vertical">
              <Step title="Finished" description="This is a description."/>
              <Step title="In Progress" description="This is a description."/>
              <Step title="Waiting" description="This is a description."/>
            </Steps>
          </Col>
          <Col sm={8}>
            <Card title="Card title" extra={<a href="#">More</a>} style={{width: 300}}>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </Col>
          <Col sm={8}>
            <Card title="Card title" extra={<a href="#">More</a>} style={{width: 300}}>
              <Progress type="circle" percent={42}/>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default About;
