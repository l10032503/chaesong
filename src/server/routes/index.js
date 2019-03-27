import express from 'express';
import MemberJoins from './MemberJoins';

const router = express.Router();
router.use('/MemberJoins', MemberJoins);

export default router;