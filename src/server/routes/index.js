import express from 'express';
import MemberJoin from './memberJoin';
import MemberLogin from './MemberLogin';

const router = express.Router();
router.use('/MemberJoin', MemberJoin);
router.use('/MemberLogin', MemberLogin);

export default router;