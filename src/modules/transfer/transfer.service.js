import Transfer from './transfer.model.js';

export class transferService {
  //metodos de la clase
  static async findOneCuenta(id, status = 'pending') {
    return await Transfer.findOne({
      where: {
        id,
        status: status,
      },
    });
  }

  //actualizacion del monto
  static async updateAmount(account, newAmount) {
    return await account.update({
      amount: newAmount,
    });
  }

  static async createRecordTransfer(amount, senderUserid) {
    return await Transfer.create({
      amount,
      senderUserId,
      receiverUseId,
    });
  }
}
