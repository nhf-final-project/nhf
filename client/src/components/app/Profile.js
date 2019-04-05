import React, { Component } from 'react'
import ProfileImage from '../../images/avatar.png'
import ProfileService from "../../service/profile-service";
import EditProfileForm from './EditProfileForm';
import Calendar from './Calendar';
import './Profile.css'
import RecipeUserCollection from './RecipeUserCollection'

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

function TabContainer(props) {
  return ( <Typography component="div" style={{ padding: 8 * 3 }}>{props.children}</Typography> );
 }

TabContainer.propTypes = { children: PropTypes.node.isRequired };

const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
});

class Profile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            recipes: [],
            value: "0",
            loggedInUser: null
        }
        this.service = new ProfileService();
    }

    handleChange = (event, value) => { this.setState({ value }) };

    getSavedRecipes = () => {
        return this.service.getSavedRecipes()
            .then(recipe => {
                console.log(recipe)
                this.setState({ recipes: recipe.recipes })
            })
    }

    componentDidMount() { this.getSavedRecipes() }

    render() {
      const { classes } = this.props;
      const { loggedInUser } = this.props
      console.log(loggedInUser)

      return (

        <main>
          <header className = "profile-header text-center p-3 pt-5">
            <div className = "user-greeting pt-5" >
              <h2><span>Hello</span>, {loggedInUser.username}!</h2>
              <img className = "profile-image img-fluid z-depth-1" src = { loggedInUser.image } alt = "profile"></img>
            </div>
          </header>
          <div className = "profile-sections">
            <Paper className = { classes.root }>
              <Tabs value = { this.state.value } onChange = { this.handleChange }
                indicatorColor = "secondary"
                textColor = "secondary"
                centered >
                <Tab value = "0" label = "Recipes Collection" />
                <Tab value = "1" label = "Calendar" />
                <Tab value = "2" label = "Profile" />
              </Tabs>
            </Paper >
            {this.state.value === "0" && <TabContainer>
              <section >
                { this.state.recipes.map((oneRecipe, index) => < RecipeUserCollection key = { index } {...oneRecipe } />)}
              </section>
            </TabContainer>}
            { this.state.value === "1" && <TabContainer> <Calendar user = { loggedInUser } recipes = { this.state.recipes } /></TabContainer> }
            { this.state.value === "2" && <TabContainer> <EditProfileForm user = { loggedInUser } checkIfLogged = { this.props.checkIfLogged } /></TabContainer> }
          </div>
        </main>
      )
    }
  }

Profile.propTypes = { classes: PropTypes.object.isRequired };

export default withStyles(styles)(Profile);