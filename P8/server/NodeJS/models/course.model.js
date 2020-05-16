const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Subject = require('./subject.model');

let Course = new Schema({
  name: {
    type: String
  },

  code: {
    type: String
  },

  passmark: {
    type: Number
  },
  lectureIncharge: {
    type: String
  },
  subject: [{

    type: Schema.Types.ObjectId,

    ref: 'Subject'

}]
});

module.exports = mongoose.model("Course", Course);
