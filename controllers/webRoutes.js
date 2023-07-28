const router = require('express').Router();
const { Users, Posts } = require('../models');

router.get('/', async (req, res) => {
	try {
		const posts = await Posts.findAll({
			include: [
				{
					model: Users,
					attributes: ['username'],
				},
			],
		});
		const postsObj = posts.map((post) => post.get({ plain: true }));
		res.render('home', {
			posts: postsObj,
		});
	} catch (err) {
		res.status(500).json(err);
		console.log(err);
	}
});

router.get('/dashboard', (req, res) => {
	try {
		res.render('dashboard', {
			
		});
	} catch (err) {
		res.status(500).json(err);
		console.log(err);
	}
});

router.get('/login', (req, res) => {
	try {
		res.render('login', {
			
		});
	} catch (err) {
		res.status(500).json(err);
		console.log(err);
	}
});

router.get('/signup', (req, res) => {
	try {
		res.render('signup', {
			
		});
	} catch (err) {
		res.status(500).json(err);
		console.log(err);
	}
});

router.get('/logout', (req, res) => {
	try {
		
	} catch (err) {
		res.status(500).json(err);
		console.log(err);
	}
});

module.exports = router;