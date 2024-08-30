import './style.css'
import logo from '../../assets/HealhtyCarely.svg'
import doctor from '../../assets/female doctor_fococlipping_removed 1.png'

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
			<section className="sect">
				<div className='word'>
					<h1 className='title'>Medical Care Now
						Simplified For Everyone</h1>
					<p className='paragraf'>Health carely is a new way to get health insurance quotes. We offer tools similar to those
						provided by insurance companies for free and prices are based on donations and not
						restrictive health plan networks.</p>
					<button className='contactUs'>Contact Us</button>
				</div>
				<div className='doc'>
					<img src={doctor} alt="" />
				</div>
			</section>
		</div>
	)
}
