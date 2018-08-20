import { h, Component } from 'preact';
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
        platform: 'detecting...' 
	}
	componentDidMount() {
		let ua = bowser.getParser(window.navigator.userAgent) 
		let {browser, platform, os} = ua.parsedResult; 
		this.setState({
			browser: browser.name + ' ' + browser.version,
			os: os.name + ' ' + os.versionName, 
			platform: platform.type
		})
	}

	getHTMLMediaElementStatus = () => {
		let _list = [];
		let vid = document.createElement('video');
		let aud = document.createElement('audio');
		MIME_TYPES.forEach(_mime => {
			let mime = _mime.toLowerCase();
			if( mime.indexOf['audio/'] === 0 ) {
				_list.push({mime: mime, canPlay: aud.canPlayType(mime)});
			} else {
				_list.push({mime: mime, canPlay: vid.canPlayType(mime)});
			}
		})
		this.setState({ list: _list, status: STATUS.READY });
	}

	getMSEStatus = () => {
		let _list = [];
		if( !'MediaSource' in window  ) {
			this.setState({ list: _list, status: STATUS.ERROR });
		}
		MIME_TYPES.forEach(_mime => {
			let mime = _mime.toLowerCase();
			_list.push({mime: mime, canPlay: MediaSource.isTypeSupported(mime) ? 'yes' : 'no' });
		})
		console.log(_list)
		this.setState({ list: _list, status: STATUS.READY });
	}
	
	handleRoute = e => {
		switch(e.url) {
			case '/':
				return this.getHTMLMediaElementStatus();
			case '/HTMLMediaElement':
				return this.getHTMLMediaElementStatus();
			case '/mse':
				return this.getMSEStatus();
		}
	};

	render({}, {list, browser, os, platform}) {
		return (
			<div id="app">
				<Router onChange={this.handleRoute}>
					<Home 
						list={list} 
						browser={browser} 
						os={os} 
						platform={platform} 
						path="/HTMLMediaElement" 
						default />
					<Home 
						list={list} 
						list={list} 
						browser={browser} 
						os={os} 
						platform={platform}
						path="/mse" />
				</Router>
			</div>
		);
	}
}
