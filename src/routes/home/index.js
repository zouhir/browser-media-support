import { h, Component } from 'preact';
import style from './style';

// components
import Header from '../../components/header';
import ListView from '../../components/listview/'
import Footer from '../../components/footer/'

class Home extends Component {
	render({list, browser, os, platform, path, score}) {
		return(
			<div class={style.home}>
				<Header browser={browser} os={os} platform={platform} path={path} score={score} />
				<ListView list={list} />
				<Footer />
			</div>
		)
	}
};

export default Home;
