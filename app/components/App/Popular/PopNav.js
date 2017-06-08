import React from 'react';
import PropTypes from 'prop-types';

export default function PopNav (props) {

    let languages = ['All', 'Javascript', 'Python', 'Ruby', 'Swift', 'Golang']
	let navs = languages.map((lang, i)=>{
		return(
			<li style={lang === props.selectedLang ? {color:'rgb(161, 28, 44)'}:null}
				key={'lang'+i+1} id={lang} onClick={props.onClick}>
				{lang}
			</li>
		);
	});

    return(

        <ul className="PopNav">
			{navs}
		</ul>

    );

}

PopNav.PropTypes = {
    selectedLang:PropTypes.string.isRequired,
    onClick:PropTypes.func.isRequired
}
