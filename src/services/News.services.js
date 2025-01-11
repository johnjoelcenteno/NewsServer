const News = require("../models/News.model");
exports.GetNews = async () => {
  const news = await News.getAllNews();
  return news;
};
