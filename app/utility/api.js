import axios from 'axios';

let clientId = 'My_Client_Id';
let secretId = 'My_Secret_Id';
let params = '?client_id='+clientId+'&client_secret='+secretId;


let getProfile = (username)=>{
    return axios.get('https://api.github.com/users/' + username + params)
    .then((res)=>{
        return res.data;
    })
}
let getRepos = (username)=>{
    return axios.get('https://api.github.com/users/' + username +'/repos'+ params+'&per_page=100')
    .then((res)=>{
        return res.data;
    })
}

let getStarCount = (repos)=>{
    return repos.reduce((count, repo)=>{
        return count + repo.stargazers_count;
    },0)
}

let getScore = (profile, repos)=>{
    let followers = profile.followers;
    let stars = getStarCount(repos);

    return (followers * 3) + stars;
}

let handleError = (error)=>{
    console.warn(error);
    return null;
}

let getPlayer = (username)=>{
    return axios.all([getProfile(username), getRepos(username)])
    .then((data)=>{
        let profile = data[0];
        let repos = data[1];
        return {
            profile:profile,
            score:getScore(profile, repos)
        }
    })
}

let sortPlayers = (players)=>{
    return players.sort((a, b)=>{
        return b.score - a.score;
    })
}


export default {

    battle:(usernames)=>{
        return axios.all(usernames.map(getPlayer))
        .then(sortPlayers)
        .catch(handleError);
    },


    fetchPopularRepos:(lang)=>{
        let encodedURI = window.encodeURI('https://api.github.com/search/repositories?q=stars:>1+language:'+lang+'&sort=stars&order=desc&type=Repositories');
        return axios.get(encodedURI).then((res)=>{
            return res.data.items;
        })
    },
}
