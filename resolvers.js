 const { AuthenticationError } = require('apollo-server');

const user = {
  _id: "1",
  name: "Anna",
  email: "anna@gmail.com",
  picture: "https://cloudary.com/ajkdfhsakdhafd"
}

const authenticated = next => (root, args, ctx, info) => {
  if (!ctx.currentUser) {
    throw new AuthenticationError("You must be logged in");
  }
  return next(root, args, ctx, info);
};

module.exports = {
  Query: {
    //me: () => user
    me: authenticated((root, args, ctx) => ctx.currentUser)
  }
};
