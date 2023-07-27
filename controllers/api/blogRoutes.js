const router = require('express').Router();
const { Posts } = require('../../models');

router.get('/', async (req, res) => {
	try {
		const postlist = await Posts.findAll();
		res.json({ postlist });
	}
	catch (err) {
		res.status(500).json(err);
	}
});

router.get('/user/:id', async (req, res) => {
	try {
		const postlist = await Posts.findAll({ where: { user_id: req.params.id }});
		res.json({ postlist });
	}
	catch (err) {
		res.status(500).json(err);
	}
});

router.get('/:id', async (req, res) => {
	try {
		const post = await Posts.findOne({ where: { id: req.params.id } });
		res.json(post);
	}
	catch (err) {
		res.status(500).json(err);
	}
});

router.post('/', async (req, res) => {
	try {
		const post = await Posts.create({
			title: req.body.title,
			content: req.body.content,
			user_id: req.session.user_id,
		});
		res.status(200).json(post);
	}
	catch (err) {
		res.status(500).json(err);
	}
});

router.put('/:id', async (req, res) => {
	try {
		if (post.user_id === req.session.user_id) {
			const post = await Posts.update({
				title: req.body.title,
				content: req.body.content,
			}, {
				where: { id: req.params.id }
			});
			res.status(200).json(post);
		}
		else {
			res.status(400).json({ message: 'You are not the author of this post.' });
		}
	}
	catch (err) {
		res.status(500).json(err);
	}
});

router.delete('/:id', async (req, res) => {
	try {
		if (post.user_id === req.session.user_id) {
			const post = await Posts.destroy({
				where: { id: req.params.id }
			});
			res.status(200).json(post);
		}
		else {
			res.status(400).json({ message: 'You are not the author of this post.' });
		}
	}
	catch (err) {
		res.status(500).json(err);
	}
});

module.exports = router;