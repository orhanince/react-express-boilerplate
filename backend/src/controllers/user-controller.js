class UserController {
  constructor() {}

  /**
   *
   * @param {*} req
   * @param {*} res
   * @retrun all users
   */
  static getUsers(req, res) {
    res.json({ data: "Foo from the controller" });
  }

  /**
   *
   * @param {*} req
   * @param {*} res
   * @return single user
   */
  static getUser(req, res) {
    res.send(`User with the id ${req.params.id}`);
  }
}

module.exports = UserController;
