module.exports = class extends G.Mongooes {
  // constructor() {
  //   return super(tableName);
  // }

  get schema() {
    return {
      name: String,
      wuXing: String,
      yinYang: Number,
      tianGan: [String]
    };
  }

  // get index() {
  //   return {};
  // }
};
