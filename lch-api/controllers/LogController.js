const { Log } = require("../models/Log");


class LogController {

    getLogsByPart = async (req,res,next) => {
        try {
            const { partId } = req.params;
            const { user } = req;
            const query = { partId };
            
            if (!user.isAdmin()) {
                query = { 
                    ...query,
                    userId: user._id,
                }
            }
            const logs = await Log.find(query).exec();
            res.status(200).json(logs);
        } catch (e) {
            next(e);
        }
    }

    createLogByPart = async (req,res,next) => {
        try {
            const { partId } = req.params;
            const { user } = req;
            const log = new Log({
                ...req.body,
                userId: user._id,
                partId: partId,

            });
            const l = await log.save();
            res.status(200).json(l);
        } catch (e) {
            next(e);
        }
    }
}

module.exports = LogController;