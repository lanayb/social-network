const { Schema, model } = require('mongoose');

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            maxlength: 280,
        },
        CreatedAt: {
            type: Date,
            default: Date.now,
        },
        // user that created this thought 
        username: {
            type: String,
            required: true,
        },
        // reactions: {

        // },
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false
    }

);


thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
  });

  const Thought = model('reaction', thoughtSchema);

module.exports = Thought;

