import React, { Component } from 'react'
import ProfileService from "../../service/profile-service";
import { Link } from 'react-router-dom'
import RecipeUserCollection from "./RecipeUserCollection"
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import './Profile.css'
import EditProfileForm from './EditProfileForm';
import Calendar from './Calendar';



// import backgroundImage from '../../images/profile-background.jpg'


function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
});


class Profile extends Component {

  constructor(props) {
    super(props)
    this.state = { 
      recipes: [],
      value: 0,
      loggedInUser: null,
      calendarRecipes: []
    }
    this.service = new ProfileService();

  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

    
  toggle = tab => () => {
    if (this.state.activeItem !== tab) {
    this.setState({
      activeItem: tab
    });
    }
  }

 

  getSavedRecipes = () => {
    return this.service.getSavedRecipes()
      .then(recipe => {
        console.log(recipe)
        this.setState({
          recipes: recipe.recipes      
        })
      })
  }


  componentDidMount() {
    this.getSavedRecipes()
    
  }


  render() {
    const { classes } = this.props;
    const { loggedInUser, value } = this.props
    console.log(this.props)
    return (
      <main>

        <header className="profile-header">
          <div>
             <img src="/open-iconic/svg/menu.svg"/>
             <a id="profile-menu">Menu</a>
             <Link to={"/recipes"}> Go to recipes</Link>
             {/* <Link to="/profile">Go to profile</Link> */}
          </div>
          <div className="user-greeting">
              <h1><span>Hello</span>, {loggedInUser.username}!</h1>
              <img className="profile-image" src={loggedInUser.image}></img>
          </div>
          <div>
              <h3>My collection</h3>
              <h3>Following</h3>         
          </div> 

          <EditProfileForm user={loggedInUser} checkIfLogged={this.props.checkIfLogged}/>
          <Calendar user={loggedInUser} recipes={this.state.recipes}/>


        </header>






        {/* <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="scrollable"
            scrollButtons="auto"
          >
            <Tab label="Item One" />
            <Tab label="Item Two" />
            <Tab label="Item Three" />
            <Tab label="Item Four" />
            <Tab label="Item Five" />
            <Tab label="Item Six" />
            <Tab label="Item Seven" />
          </Tabs>
        </AppBar>
        {value === 0 && <TabContainer>Item One</TabContainer>}
        {value === 1 && <TabContainer>Item Two</TabContainer>}
        {value === 2 && <TabContainer>Item Three</TabContainer>}
        {value === 3 && <TabContainer>Item Four</TabContainer>}
        {value === 4 && <TabContainer>Item Five</TabContainer>}
        {value === 5 && <TabContainer>Item Six</TabContainer>}
        {value === 6 && <TabContainer>Item Seven</TabContainer>}
      </div> */}
{/* 
        <section>
          {this.state.recipes.map((oneRecipe, index) => <RecipeUserCollection key={index} {...oneRecipe} />)}
        </section> */}
        
      </main>
    )
  }
}

Profile.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Profile);
