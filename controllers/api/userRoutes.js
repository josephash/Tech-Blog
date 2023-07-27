const router = require('express').Router();
const { Users } = require('../../models');

router.get('/login', async (req, res) => {
	try {
		const userObj = await Users.findOne({ where: { email: req.body.email } });
		if (!userObj) {
			res.status(400).json({ message: 'No account found!' });
			return;
		}
		const validPassword = await userObj.checkPassword(req.body.password);
		if (!validPassword) {
			res.status(400).json({ message: 'Incorrect password.' });
			return;
		}
		req.session.save((error) => {
			if (error) {
				res.status(500).json(error);
				return;
			}
			req.session.user_id = userObj.id;
			req.session.loggedIn = true;
			res.status(200).json({ user: userObj, message: 'You are now logged in!' });
		});
	}
	catch (err) {
		res.status(500).json(err);
	}
});

router.get('/signup', async (req, res) => {
	try {
		await Users.create({
			email: req.body.email,
			username: req.body.username,
			password: req.body.password,
		});
		const userObj = Users.findOne({ where: { email: req.body.email } });
		req.session.save(() => {
			req.session.user_id = userObj.id;
			req.session.loggedIn = true;
			res.status(200).json(userObj);
		});
	}
	catch (err) {
		res.status(500).json(err);
	}
});

router.get('/logout', async (req, res) => {
	try {
		if (req.session.loggedIn) {
			req.session.destroy(() => {
				res.status(204).end();
			});
		}
		else {
			res.status(404).end();
		}
	}
	catch (err) {
		res.status(500).json(err);
	}
});

module.exports = router;