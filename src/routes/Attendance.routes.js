const express = require('express');
const { upsertAttendance, getAttendance } = require('../controllers/Attendance.controller');
const router = express.Router();

router.get('/find', getAttendance );
router.post('/upsert', upsertAttendance );

module.exports = router;