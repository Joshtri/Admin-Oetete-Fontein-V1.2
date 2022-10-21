module.exports = {
	isLoggedIn : (req, res, next) => {

		console.log("user: ", req.session.user_id);
		if (!req.session.user_id)
			res.redirect('/')
		else
			next()

	},
	redirectIfLoggedIn : (req, res, next) => {

		if (req.session.user_id)
			res.redirect('main-admin')
		else
			next()

	}
}