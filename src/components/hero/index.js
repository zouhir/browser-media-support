import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

//external libs
import bowser from 'bowser';

class Hero extends Component {
    state = {
        browser: 'detecting...',
        os: 'detecting...',
        version: 'detecting...'
    }
    componentDidMount() {
        // https://github.com/lancedikson/bowser
        let ua = bowser.getParser(window.navigator.userAgent)
        let {browser, platform, os} = ua.parsedResult;
        this.setState({
            browser: browser.name + ' ' + browser.version,
            os: os.name + ' ' + os.versionName,
            platform: platform.type
        })
    }
    render({}, { browser, os, platform }) {
	    return (
            <div class={style.hero}>
                You are running:
                <br />
                {browser}
                <br />
                on {platform} {os}
            </div>
        )
    }
};

export default Hero;
