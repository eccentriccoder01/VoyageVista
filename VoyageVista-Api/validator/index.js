exports.userSignupValidator = (req, res, next) => {
    req.check('name', 'Name is Required!').notEmpty();
    req.check('email', 'Email Must Be 4 to 254 Characters Long!')
        .matches(/.+\@.+\..+/)
        .withMessage('Email must contain @')
        .isLength({
            min: 4,
            max: 254
        });
    req.check('password', 'Password is Required!').notEmpty();
    req.check('password')
        .isLength({ min: 8 })
        .withMessage('Password Must be of At Least 8 Characters!')
        .matches(/\d/)
        .withMessage('Password Must Contain a Digit!');
    const errors = req.validationErrors();
    if (errors) {
        const firstError = errors.map(error => error.msg)[0];
        return res.status(400).json({ error: firstError });
    }
    next();
};
