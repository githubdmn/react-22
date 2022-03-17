
// Without properties - props
// function Header() {
// 	return (
// 		<header>
// 			<div className="container">
// 				<h2>Feedback UI</h2>
// 			</div>
// 		</header>
// 	)
// }

// With properties - props
// function Header(props) {
// 	return (
// 		<header>
// 			<div className="container">
// 				<h2>{props.text}</h2>
// 			</div>
// 		</header>
// 	)
// }

import PropTypes from 'prop-types'

// destructuring props
function Header({text}) {
	return (
		<header>
			<div className="container">
				<h2>{text}</h2>
			</div>
		</header>
	)
}

Header.defaultProps = {
	text: "Property default text"
}

Header.propTypes = {
	text: PropTypes.string
}

export default Header