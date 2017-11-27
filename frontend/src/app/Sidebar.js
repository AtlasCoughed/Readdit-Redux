import React, {Component} from 'react';
import ChevronLeftIcon from 'material-ui-icons/ChevronLeft';
import ChevronRightIcon from 'material-ui-icons/ChevronRight';
import Divider from 'material-ui/Divider';
import List from 'material-ui/List';
import Drawer from 'material-ui/Drawer';
import {IconButton} from "material-ui";
import classNames from 'classnames';



class Sidebar extends Component {


	render(){
		const { classes, theme, sidebarStatus} = this.props;

		return(
		<div>
			<div
				tabIndex={0}
				role="button"
				onClick={this.toggleDrawer( false)}
				onKeyDown={this.toggleDrawer(false)}
			>
				<div className='sidebarList'>
					<h3>Navigation</h3>
					<List>Test</List>
					<Divider/>
					<h3>Categories</h3>
					<Categories categories={categories}/>
				</div>
			</div>
		</div>
		)
	}
}

export default Sidebar;