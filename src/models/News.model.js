const mongoose = require("mongoose");

const newsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  logo: {
    type: String, // Base64 encoded string
    required: true,
  },
  description: {
    type: String, // Long text
    required: true,
  },
  links: {
    video: {
      type: String,
      required: false,
    },
    article: {
      type: String,
      required: false,
    },
  },
  status: {
    type: String,
    enum: ["Failed", "Success"],
    required: true,
  },
});

newsSchema.statics.getAllNews = async function () {
  try {
    return await this.find().exec();
  } catch (error) {
    throw new Error("Error fetching news: " + error.message);
  }
};

const News = mongoose.model("News", newsSchema);

module.exports = News;
