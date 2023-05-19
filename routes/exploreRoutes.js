const express = require("express");

const {
    getRecommendedPostsByInterests,
    getRecommendedPostsByFollowing,
    getRecommendedPostsByInterestsAndFollowing,
} = require("../controllers/exploreControllers");


const router = express.Router();

router.get('/posts/', getRecommendedPostsByInterestsAndFollowing);
router.get('/posts/interests', getRecommendedPostsByInterests);
router.get('/posts/following', getRecommendedPostsByFollowing);

module.exports = router;