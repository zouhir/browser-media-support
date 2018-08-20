import { h } from 'preact';
import style from './style';

const ListView = ({ list = [] }) => {
	if ( list.length === 0 ) return ('loading...');
	return (
		<ul class={style.listview}>
			<li class={style.heading}>
				<span>
					MIME
				</span>
				<span>
					canPlayType
				</span>
			</li>
			{
				list.map( item => (
					<li>
						<span>{item.mime}</span>
						<span>{item.canPlay}</span>
					</li>
				))
			}
		</ul>
	);
};

export default ListView;
