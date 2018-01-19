import * as React from 'react';

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
          this.setState({
            source: 'server',
            date: new Date(values[0]),
            datetime: new Date(values[1])
          });
      }).catch(reason => {
        // whatever
    });
  }

  render() {
    if (!this.state) {
      return <div/>;
    } else {
      const data = [
        `${this.state.source} date: ${this.state.date.toLocaleDateString()}`,
        `${this.state.source} time: ${this.state.datetime.toLocaleTimeString()}`
      ];
      return (
        <ul>
          {data.map(item => <li key={item}>{item}</li>)}
        </ul>
      );
    }
  }
}

export default ServerTime;
