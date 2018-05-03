module.exports = class extends G.Model {
  // constructor() {
  //   return super(tableName);
  // }

  get schema() {
    return {
      name: String,
      wuXing: String,
      yinYang: Number
    };
  }

  // get index() {
  //   return {};
  // }
};
