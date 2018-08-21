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
					SUPPORTED
				</span>
			</li>
			{
				list.map( item => (
					<li>
						<span>{item.mime}</span>
						<span class={style[item.canPlay]}>
							{(item.canPlay === '' || item.canPlay === 'no') && 'no'}
							{item.canPlay === 'maybe' && 'maybe'}
							{(item.canPlay === 'probably' || item.canPlay === 'yes') && 'yes'}
						</span>
					</li>
				))
			}
		</ul>
	);
};

export default ListView;
