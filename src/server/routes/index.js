import express from 'express';
import MemberJoin from './memberJoin';
import MemberLogin from './MemberLogin';
import recipe from './recipe';
import scrap from './scrap';
import MainPage from './mainpage';
import personalpage from './personalpage';

const router = express.Router();

router.use('/MemberJoin', MemberJoin);
router.use('/MemberLogin', MemberLogin);
router.use('/recipe', recipe);
router.use('/scrap', scrap);
router.use('/MainPage', MainPage);
router.use('/personalpage', personalpage);

export default router;