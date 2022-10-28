const router = require("express").Router();
const { search, autocomplete } = require("../controllers");

router.get("/search", async (req, res) => {
    let { keyword } = req.query;
    let data = await search(keyword);
    res.status(200).json({
        data
    })
});

router.get("/autocomplete", async (req, res) => {
    let { keyword } = req.query;
    let data = await autocomplete(keyword);
    res.status(200).json({
        data
    })
});

module.exports = router;