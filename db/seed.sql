INSERT INTO Users (email, username, password)
VALUES
	('jeff@fake.email', 'Techy', 'fake1'),
	('james@fake.email', 'bluegreen', 'fake2'),
	('sarah@fake.email', 'interblogosphere', fake2);

INSERT INTO Posts (title, body, user_id)
VALUES
	('Brain-computer interfaces and their effect on our future', 'Brain-computer interfaces (BCIs) are devices that measure brain activity and output signals that are used to control computers or other devices. The technology has been around for decades, but it has only recently become more accessible to the general public. This blog post will explore how BCIs work, what they can do for us, and what their impact might be on society in the future.', 1),
	('How to make a blog post', 'This is a blog post. It has been written by someone who wants to share their thoughts with the world. The author of this blog post has decided that they want to write about how to make a blog post. They have decided on the topic and now they are going to write it out in detail so that you can read all about it!', 2),
	('Why GPU prices will remain rediculous', 'The GPU market has been a hot topic for the past few years. With the rise of cryptocurrency mining, GPUs have become more valuable than ever before. This blog post will explore why GPU prices will remain rediculous and what you can do to protect yourself from this trend.', 3);

INSERT INTO Comments (body, user_id, post_id)
VALUES
	("I didn't even think about the divide between the upper and lower class", 2, 1),
	("Very useful!", 3, 2),
	("I guess I'll have to switch to team red", 1, 3)