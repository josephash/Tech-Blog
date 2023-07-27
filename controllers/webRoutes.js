const router = require('express').Router();

router.get('/', (req, res) => {
	try {
		res.render('home', {

		});
	} catch (err) {
		res.status(500).json(err);
	}
});

router.get('/dashboard', (req, res) => {
	try {
		res.render('dashboard', {
			
		});
	} catch (err) {
		res.status(500).json(err);
	}
});

router.get('/login', (req, res) => {
	try {
		res.render('login', {
			
		});
	} catch (err) {
		res.status(500).json(err);
	}
});

router.get('/signup', (req, res) => {
	try {
		res.render('signup', {
			
		});
	} catch (err) {
		res.status(500).json(err);
	}
});

router.get('/logout', (req, res) => {
	try {
		
	} catch (err) {
		res.status(500).json(err);
	}
});

module.exports = router;