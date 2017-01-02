import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as actions from '../redux/voteApp'
import {Toolbar} from 'material-ui/Toolbar';
import TextField from 'material-ui/TextField';

const styles = { 
  appBar : {
    height: '100%',
    paddingTop: '10px',
    paddingBottom: '10px',
  },
  textInput : {
    fontSize: '2em',
    width: '100%',
  },
}


class AddItem extends Component {

  constructor() {
    super();
    this.state = {currentValue: ''};
  }

  handleInput(e) {
    if(!(e.which === 13)) return;
    if(!this.state.currentValue) return;
    this.props.onAddItem(this.state.currentValue)
    this.setState({currentValue: ''})
  }

  render() {
    return (
      <Toolbar style={styles.appBar} >
        <TextField style={styles.textInput} id='newItem' 
          value={this.state.currentValue}
          hintText='Add a new item...'
          underlineShow={false}
          onKeyDown={e => this.handleInput(e)}
          onChange={e => this.setState({currentValue: e.target.value})}
        />
      </Toolbar>
    )
  }
}

export default connect(
  undefined,
  dispatch => {
    return {
      onAddItem: value => dispatch(actions.addItem(value))
    }
  }
)(AddItem)