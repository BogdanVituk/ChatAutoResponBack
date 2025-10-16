import { Router } from "express"
import passport from "passport";
import AuthConroller from "../controllers/AuthConroller.js";

const router = new Router();

router.get('/auth/google',
    passport.authenticate('google', {
        scope: ['profile', 'email'],
        prompt: 'select_account'
    })
)

router.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/' }), AuthConroller.googleCallback
)

router.get('/auth/logout', AuthConroller.logout)

router.get('/auth/user', AuthConroller.getUser)

export default router;