import React, { Component } from "react"
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import { withStyles } from '@material-ui/core/styles';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';


const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
  ...theme.mixins.gutters(),
  paddingTop: theme.spacing.unit * 3,
  paddingBottom: theme.spacing.unit * 3,
    flexGrow: 1,
  paper: {
    height: 240,
    width: 100,
  },
  padding: '200px',
  control: {
    padding: theme.spacing.unit * 2,
  }

});
class TodoList extends Component {

  
  state = {
    todo: ""
  }

  handleChange = e => {
    let todo = e.target.value
    this.setState({
      todo
    })
  }
  handleClick = e => {
    e.preventDefault()
    const newItem = this.state.todo
    console.log({newItem})
    this.props.TodoStore.addTodo(newItem)
    this.setState({
      todo: ""
    })
  }
  render() {
    const { classes } = this.props;
    return (
      <div>

<CardHeader title="I'm the Todo List" className={classes.root}>
        
    
      </CardHeader>

       <br></br>
        <List component="nav" className={classes.root}>
          
        {this.props.TodoStore.todos.map((todo, i) => (
          <div>

        
          <ListItem button key={i}>{todo}</ListItem>
          <Divider/>
          </div>
        ))}
                </List>

        <br></br>
        <form onSubmit={this.handleClick}>
          <Input className={classes.root} fullWidth onChange={this.handleChange} value={this.state.todo} required placeholder="Add Item To List"/>
          <div>
            <br></br>
          </div>
            <Button font="black"  fullWidth color="primary" variant="extendedFab" type="submit">ADD</Button>
        </form>
      </div>
    )
  }
}


export default withStyles(styles)(TodoList);

