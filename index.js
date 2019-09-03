'use strict';

// App Component
function App(props) {
	return (
		<div className={'container'}>
			<header>
				<h1 className={'sally-intro'}>Hi! I'm Sally!</h1>
				<img
					src={'https://ia.media-imdb.com/images/M/MV5BMTY5NzE3NzU3MF5BMl5BanBnXkFtZTgwMjg0NTQ5MDE@._V1_UX214_CR0,0,214,317_AL_.jpg'}
					alt={'Student Sally Picture'}/>
			</header>
			<main>
				<section id={'summary'}>
					<header><h2>Summary</h2></header>
					<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
					</p>
				</section>

				<section id={'education'}>
					<header><h2>Education</h2></header>
					<ul>
						<li>Bloc.io, 2019</li>
					</ul>
				</section>
				<section id={'experience'}>
					<header>
						<h2>Work Experience:</h2>
					</header>
					<div className={'companies'}>
						<h3>Acompany, Software Developer <span className={'years'}>2018 - 2019</span></h3>
						<p>Acompany is a description Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
						<ul>
							<li>Front-end ...</li>
							<li>Back-end ...</li>
							<li>Dead-end...</li>
						</ul>
					</div>
					<div className={'companies'}>
						<h3>Bcompany, Software Developer <span className={'years'}>2019 - present</span></h3>
						<p>Bcompany is a description Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
						<ul>
							<li>Full-stack ...</li>
							<li>Half-stack ...</li>
							<li>End-stack...</li>
						</ul>
					</div>
				</section>
				<address id={'address'}>
					<h1>{props.name}</h1>
					<a href={'mailto:sally@sally.com'} target={'_blank'}>{props.email}</a>
					<br/>
					<a href={'tel:+123-456-7890'}>{props.phone}</a>
				</address>
			</main>
			<footer>
				&copy; 2019 {props.name}
			</footer>
		</div>
	);
};

ReactDOM.render(
	<App
		name='Sally Student'
		email='sally@sally.com'
		phone='(123)-456-7890'
	/>,
	document.querySelector('#root')
);