import * as React from 'react';
import { List, Spin } from 'antd';

interface Props {
}

interface State {
  source: string;
  date: Date;
  datetime: Date;
}

class ServerTime extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {
      source: 'client',
      date: new Date(),
      datetime: new Date()
    };
  }

  componentDidMount(): void {
    Promise.all(['/api/sample/date', '/api/sample/datetime'].map(url => fetch(url).then(res => res.json())))
      .then(values => {
        try {
          this.setState({
            source: 'server',
            date: new Date(values[0]),
            datetime: new Date(values[1])
          });
        } catch {
          // unmounted
        }
      });
  }

  render() {
    if (!this.state) {
      return <Spin size="large"/>;
    } else {
      const data = [
        `${this.state.source} date: ${this.state.date.toLocaleDateString()}`,
        `${this.state.source} time: ${this.state.datetime.toLocaleTimeString()}`
      ];
      return (
        <List
          header={<h2>Data from {this.state.source}:</h2>}
          bordered={true}
          dataSource={data}
          renderItem={(item: string) => (<List.Item>{item}</List.Item>)}
        />
      );
    }
  }
}

export default ServerTime;
