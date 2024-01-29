const router = require("express").Router();

const {
  getThought,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  createReaction,
  deleteReaction,
} = require("../../controllers/thoughtsController");

// /api/thoughts GET all and POST thought
router.route("/").get(getThought).post(createThought);

// /api/thoughts/:thoughtId GET one thought, PUT and DELETE by iD
router
  .route("/:thoughtId")
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

// /api/thoughts/:thoughtId/react POST new reactions
router.route("/:thoughtId/react").post(createReaction);

// /api/thoughts/:thoughtId/react/:reactionId DELETE reaction by ID
router.route("/:thoughtId/react/:reactionId").delete(deleteReaction);

module.exports = router;
