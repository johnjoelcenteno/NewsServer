const { GetNews } = require("../services/News.services");
const BaseResponse = require("../utils/BaseReponse.utils");

exports.GetNewController = async (req, res, next) => {
  try {
    let result = await GetNews();
    return res.send(new BaseResponse(result, "success", 200));
  } catch (error) {
    next(error);
  }
};
