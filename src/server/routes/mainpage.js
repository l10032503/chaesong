const express = require("express");
const MainPages = express.Router();
const session = require("express-session");

MainPages.post('/logout', (req, res)=>{
    let session = req.session;
    session.destroy(function(){
        req.session;
    });
    console.log("session 삭제?");
    return res.json({success: true});
});

module.exports = MainPages;