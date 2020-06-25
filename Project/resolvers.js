const user = {
  _id: "1",
  name: "Anna",
  email: "anna@gmail.com",
  picture: "https://cloudary.com/ajkdfhsakdhafd"
}

module.exports = {
  Query: {
    me: () => user
  }
};
