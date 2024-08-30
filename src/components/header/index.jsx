import './style.css'
import logo from '../../assets/HealhtyCarely.svg'
export const Header = () => {
	return (
		<div className='container'>
			<div className='header'>
				<div className='header-icon-text'>
					<div className='logo'>
						<img src={logo} alt='' />
					</div>
					<nav>
						<ul className='navigation'>
							<li>Home</li>
							<li>Doctor</li>
							<li>Services</li>
							<li>Review</li>
						</ul>
					</nav>
				</div>
				<div className='auth'>
					<button className='signIn'>Sign In</button>
					<button className='signUp'>Sign Up</button>
				</div>
			</div>
		</div>
	)
}
