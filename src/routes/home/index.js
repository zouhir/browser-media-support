import { h, Component } from 'preact';
import style from './style';

// components
import Header from '../../components/header';
import ListView from '../../components/listview/'

// constants
import MIME_TYPES from '../../MIME_TYPES';

const STATUS = {
	LOADING: 'loading',
	READY: 'ready',
	ERROR: 'error'
}

class Home extends Component {
	state = {
		status: STATUS.LOADING,
		list: []
	}
	componentDidMount() {
		let listToRender = this.props.path;
		switch(listToRender) {
			case '/HTMLMediaElement':
				this.getHTMLMediaElementStatus();
			case '/MSE':
				this.getMSEStatus();
		}
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
			if( mime.indexOf['audio/'] === 0 ) {
				_list.push({mime: mime, canPlay: aud.canPlayType(mime)});
			} else {
				_list.push({mime: mime, canPlay: vid.canPlayType(mime)});
			}
		})
	}

	render({}, {list}) {
		return(
			<div class={style.home}>
				<Header />
				<ListView list={list} />
			</div>
		)
	}
};

export default Home;
