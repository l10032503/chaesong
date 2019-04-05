import express from 'express';
import MemberJoin from './memberJoin';
import MemberLogin from './MemberLogin';
import recipe from './recipe';

const router = express.Router();
router.use('/MemberJoin', MemberJoin);
router.use('/MemberLogin', MemberLogin);
router.use('/recipe', recipe);

export default router;