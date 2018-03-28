module.exports = class extends G.Mongooes {
  // constructor() {
  //   return super(tableName);
  // }

  get schema() {
    return {
      name: String,
      wuxing: String,
      yinyang: Number,
      canggan: [String]
    };
  }

  // get index() {
  //   return {};
  // }
};
