import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

const Footer = () => (
	<footer class={style.footer}>
		Made with 🌮 by <a href="https://twitter.com/_zouhir" rel="noopener noreferrer">@_zouhir</a>
	</footer>
);

export default Footer;
