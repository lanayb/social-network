const { Schema, model } = require('mongoose');

const userSchema = new Schema (
{
    userName: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        validate: isEmail,
    },
    // thoughts: {

    // },
    // friends: {

    // },
    
},
{
    toJSON: {
        virtuals: true
    }
}

);


userSchema.virtual('friendCount').get(function () {
    return this.friends.length;
  });

  const User = model('user', userSchema);


module.exports = User;

