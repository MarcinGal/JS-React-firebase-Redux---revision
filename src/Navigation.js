import React from 'react'

import Drawer from 'material-ui/Drawer'
import { AppBar } from 'material-ui'
import { Link } from 'react-router-dom'
import { ListItem } from 'material-ui/List'

class Navigation extends React.Component {
    state = {
        isDrawerOpen: true
    }


    toggleDrawer = () => this.setState({ isDrawerOpen: !this.state.isDrawerOpen })


    render() {
        // can be better optimized
        const MenuLink = (props) => (
          <Link
            to={props.to}
            style={{ textDecoration: 'none' }}
            onClick={this.toggleDrawer}
          >
            <ListItem>
              {props.label}
            </ListItem>
          </Link>
        )

        return (
          <div>
            <AppBar
              onLeftIconButtonClick={this.toggleDrawer}
            />
            <Drawer
              docked={false}
              width={200}
              open={this.state.isDrawerOpen}
              onRequestChange={this.toggleDrawer}
            >
              <MenuLink to={'/'} label="Home" />
              <MenuLink to={'/counter'} label="Counter" />
              <MenuLink to={'/counter-with-start-value'} label="Counter 15" />
              <MenuLink to={'/passing-props'} label="Passing Props" />
              <MenuLink to={'/random-users'} label="Random Users" />
              <MenuLink to={'/sync-users'} label="Sync Users" />
              <MenuLink to={'/add'} label="Add" />
            </Drawer>
          </div>
        )
      }
    }

    export default Navigation
