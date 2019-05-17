import express from 'express';
import MemberJoin from './memberJoin';
import MemberLogin from './MemberLogin';
import recipe from './recipe';
import scrap from './scrap';
import MainPage from './mainpage';
import personalpage from './personalpage';

import eat from './eat';

const router = express.Router();

router.use('/MemberJoin', MemberJoin);
router.use('/MemberLogin', MemberLogin);
router.use('/recipe', recipe);
router.use('/scrap', scrap);

router.use('/MainPage', MainPage);
<<<<<<< HEAD
router.use('/personalpage', personalpage);
=======
router.use('/eat', eat);

>>>>>>> eae928ccdee876c437f3290b29927e7f68bb03c7

export default router;