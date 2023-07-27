const router = require('express').Router();
const { Comments } = require('../../models');

router.get('/:id', async (req, res) => {
	try {
		const comments = await Comments.findAll({ where: { post_id: req.params.id } });
		res.json(comments);
	}
	catch (err) {
		res.status(500).json(err);
	}
});

router.post('/', async (req, res) => {
	try {
		const comment = await Comments.create({
			comment_text: req.body.comment_text,
			user_id: req.session.user_id,
			post_id: req.body.post_id,
		});
		res.status(200).json(comment);
	}
	catch (err) {
		res.status(500).json(err);
	}
});

router.delete('/:id', async (req, res) => {
	try {
		Comments.destroy({ where: { id: req.params.id } });
		res.status(200).json({ message: 'Comment deleted.' });
	}
	catch (err) {
		res.status(500).json(err);
	}
});

module.exports = router;