const sampleModel = require('../model/sample.model');

function sampleFunction() {
    return 'This is a sample fuction';
}

module.exports = {
    getAPI: (req, res) => {
        // sampleModel.find({}, (err, data) => {
        //     if (err) {
        //         res.send('Error occured');
        //     }
        //     res.json(data);
        // });
        res.json({ message: 'Get-API is working' });
    },
    postAPI: (req, res) => {
        // sampleModel.create(payload, (err, data) => {
        //     if (err) {
        //         res.send('error occured');
        //     }
        //     res.json({
        //         message: "Store onboarded successfully",
        //         store: req.body
        //     });
        // });
        res.json({
            message: 'post-API is working',
            requestHeader: req.body
        });
    }
};