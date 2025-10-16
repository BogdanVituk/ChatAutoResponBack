class AuthContoller {
    googleCallback = (req, res) => {
        res.redirect(process.env.CLIENT_URL);
    };

    logout = (req, res, next) => {
    req.logout(err => {
        if (err) return next(err);
        req.session.destroy(err => {
        if (err) console.error('Session destroy error:', err);
        res.clearCookie('connect.sid', { path: '/' });
        res.json({ success: true });
        });
    });
    };

    getUser = (req, res) => {
    if (req.isAuthenticated()) {
        const { _id, email, name, avatarUrl } = req.user;
        res.json({ user: { _id, email, name, avatarUrl } });
    } else {
        res.status(401).json({ user: null });
    }
    };

}

export default new AuthContoller();