import React from 'react';
import PopNav from './PopNav';
import RepoGrid from './RepoGrid';
import github from '../../../utility/api';






export default class Popular extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			selectedLang:'All',
			repos:null,
		}

		this.handleClick = this.handleClick.bind(this);
	}

	getRepos(){
		github.fetchPopularRepos(this.state.selectedLang).then((repos)=>{
			this.setState({repos:repos});

		});
	}

	componentDidMount(){
		this.getRepos();
	}

	handleClick(e){
		this.setState({selectedLang:e.target.id, repos:null});
		this.getRepos();
	}

	render(){
		return(
			<div className="Popular">
				<PopNav selectedLang={this.state.selectedLang} onClick={this.handleClick}/>
				{!this.state.repos ? "Loading":<RepoGrid repos={this.state.repos} />}
			</div>
			);
	}
}
