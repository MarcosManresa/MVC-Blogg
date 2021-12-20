const router = ('express').Router();

const UserRoutes = require('./user-routes.js');
const postRoutes = require('./post-routes.js');
const commentRoutes = require('./comment-routes.js');

router.use('/users', UserRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes)

module.exports = router;