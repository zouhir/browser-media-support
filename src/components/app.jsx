import { Component } from 'preact';
import { Router } from 'preact-router';

import Home from '../routes/home';

// constants
import MIME_TYPES from '../MIME_TYPES';

//libraries
import bowser from 'bowser';

const STATUS = {
	LOADING: 'loading',
	READY: 'ready',
	ERROR: 'error'
}
export default class App extends Component {
	state = {
		status: STATUS.LOADING,
		list: [],
        browser: 'detecting...', 
        os: 'detecting...', 
		platform: 'detecting...',
		score: {}
	}
	componentDidMount() {
		if( typeof document === 'undefined' ) return;
		let ua = bowser.getParser(window.navigator.userAgent) 
		let {browser, platform, os} = ua.parsedResult;
		this.setState({
			browser: `${browser.name} ${browser.version}`,
			os: `${os.name} ${os.versionName ? os.versionName : os.version}`,
			platform: platform.type
		})
	}

	getHTMLMediaElementStatus = () => {
		let score = {
			yes: 0,
			no: 0,
			maybe: 0
		}
		let _list = [];
		let vid = document.createElement('video');
		let aud = document.createElement('audio');
		MIME_TYPES.forEach(_mime => {
			let mime = _mime.toLowerCase();
			let canPlay = null;
			if( mime.indexOf['audio/'] === 0 ) {
				canPlay = aud.canPlayType(mime);
			} else {
				canPlay = vid.canPlayType(mime);
			}
			let canPlayStr = '';
			if( canPlay === '' ) {
				score.no +=1;
				canPlayStr = 'no';
			};
			if( canPlay === 'maybe' ) { 
				score.maybe +=1;
				canPlayStr = 'maybe';
			}
			if( canPlay === 'probably' ) {
				score.yes +=1;
				canPlayStr = 'yes';
			}
			_list.push({mime, canPlay: canPlayStr });
		})
		this.setState({ list: _list, status: STATUS.READY, score });
	}

	getMSEStatus = () => {
		let _list = [];
		let score = {
			yes: 0,
			no: 0
		}
		if( typeof window.MediaSource === "undefined"  ) {
			this.setState({ list: _list, status: STATUS.ERROR });
		}
		MIME_TYPES.forEach(_mime => {
			let mime = _mime.toLowerCase();
			let canPlay = MediaSource.isTypeSupported(mime);
			if( canPlay === true ) { score.yes +=1; } else { score.no +=1;}
			_list.push({mime, canPlay: canPlay ? 'yes' : 'no' });
		})
		this.setState({ list: _list, status: STATUS.READY, score });
	}
	
	handleRoute = e => {
		if( typeof document === 'undefined' ) return;
		switch(e.url) {
			case '/':
				return this.getHTMLMediaElementStatus();
			case '/HTMLMediaElement':
				return this.getHTMLMediaElementStatus();
			case '/mse':
				return this.getMSEStatus();
		}
	};

	render({}, {list, browser, os, platform, score}) {
		return (
			<Router onChange={this.handleRoute}>
				<Home 
					list={list} 
					browser={browser} 
					os={os} 
					platform={platform} 
					path="/HTMLMediaElement"
					score={score}
					default />
				<Home 
					list={list} 
					list={list} 
					browser={browser} 
					os={os} 
					platform={platform}
					score={score}
					path="/mse" />
			</Router>
		);
	}
}
