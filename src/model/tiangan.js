module.exports = class extends G.Model {
  // constructor() {
  //   return super(tableName);
  // }

  get schema() {
    return {
      name: String,
      wuxing: String,
      yinyang: Number
    };
  }

  // get index() {
  //   return {};
  // }
};
