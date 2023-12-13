import User from './users.model.js';

export class UserService {
  //creat cuenta
  static async create(data) {
    return await User.create(data);
  }
  //validacion login fake
  static async loginservise(data) {
    return await User.findOne({
      where: {
        accountNumber: data.accountNumber,
        password: data.password,
        status: true,
      },
    });
  }

  static async history(id) {
    return await User.findOne({
      where: {
        id: id,
        status: true,
      },
    });
  }
  //Validacion de cuenta activa
  static async findOneAcount(accountNumber) {
    return await User.findOne({
      where: {
        status: true,
        accountNumber: accountNumber,
      },
    });
  }

  static async updateAmount(account, newAmount) {
    return await account.update({ amount: newAmount });
  }
}
