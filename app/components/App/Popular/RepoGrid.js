import React from 'react';
import PropTypes from 'prop-types';

export default function RepoGrid (props) {
	let repos = props.repos.map((repo, i)=>{
		return (
            <li key={repo.name} className="repoItem">
                <div className="rank">#{i+1}</div>
                <ul className="space-list-items">
                    <li>
                        <img className="avatar" src={repo.owner.avatar_url} alt={repo.owner.login}/>
                    </li>
                    <li>
                        <a href={repo.html_url}>{repo.name}</a>
                    </li>
                    <li>
                        @{repo.owner.login}
                    </li>
                    <li>
                        {repo.stargazers_count} stars
                    </li>
                </ul>
            </li>
        )
	})

	return (
		<ul className="RepoGrid">
			{repos}
		</ul>
	)
}

RepoGrid.PropTypes = {
    repos:PropTypes.arrayOf(PropTypes.object).isRequired
}
