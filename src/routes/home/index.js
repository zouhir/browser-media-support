import { h, Component } from 'preact';
import style from './style';

// components
import Hero from '../../components/hero';

import MIME_TYPES from '../../MIME_TYPES';

const STATUS = {
	LOADING: 'loading',
	READY: 'ready'
}

class Home extends Component {
	state = {
		status: STATUS.LOADING,
		list: []
	}
	componentDidMount() {
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
	render({}, {list}) {
		return(
			<div class={style.home}>
				<Hero />
				{ list.length === 0 && 'Loading...'}
				<ul>
					{
						list.map( item => (
							<li>{item.mime} : {item.canPlay}</li>	
						))
					}
				</ul>
			</div>
		)
	}
};

export default Home;
