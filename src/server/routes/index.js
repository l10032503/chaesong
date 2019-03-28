import express from 'express';
import MemberJoin from './memberJoin';

const router = express.Router();
router.use('/MemberJoin', MemberJoin);

export default router;