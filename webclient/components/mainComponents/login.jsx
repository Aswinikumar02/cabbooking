const React = require('react');
const {hashHistory} = require('react-router');
import {Button, Checkbox, Form, Card,Segment, Icon, Image} from 'semantic-ui-react';


export default class Login extends React.Component {

  constructor() {
    super();
    this.state = {
      avis : 20000,
      southWest : 10000,
      avisPoint: '',
      southPoint: ''
    }
    this.reducepoints= this.reducepoints.bind(this);
  }
componentDidMount(){
  this.reducepoints();
}
reducepoints(){
  if(window.reload){
    const Avis = this.state.avis;
    const SouthWest = this.state.southWest;
    this.setState({avis:Avis,southWest:SouthWest},function(){
      console.log('avis points final',this.state.avis);
      console.log('south points final',this.state.southWest);
    })
  }
  else if(window.onload)
  {
      const Avis = this.state.avis - 1000;
      const SouthWest = this.state.southWest + 2000;
      this.setState({avis:Avis,southWest:SouthWest},function(){
        console.log('avis ',this.state.avis);
        console.log('south ',this.state.southWest);
      })
  }
  else{
    console.log('false');
  }
}
  render() {

    return (
      <div>
        <Card style={{marginLeft:'30%',marginTop:'10%'}}>
            <Image src='../image/male1.jpg' />
            <Card.Content>
              <Card.Header>
                Claire
              </Card.Header>
              <Card.Meta>
                <span className='date'>
                  Silver(silver++)
                </span>
              </Card.Meta>
              <Card.Description>
                Avis Preferred Points : {this.state.avis} points
                South west rapid Rewards : {this.state.southWest} points
              </Card.Description>
            </Card.Content>
          </Card>

</div>

);
}
};

module.exports = Login;
