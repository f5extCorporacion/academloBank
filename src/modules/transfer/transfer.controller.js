import User from '../users/users.model.js';
import { transferService } from './transfer.service.js';

export const createTransfer = async (req, res) => {
  try {
    const { amount, recipientAccountNumber, senderAcountNumber } = req.body;

    //buscando cuenta del que  recibe el dinero
    const recipientUserPomise = await User.findOneAcount(
      recipientAccountNumber
    );
    if (!recipientUserPomise) {
      return res.status(400).json({
        status: 'Error',
        message: 'Cuenta Que recibe no existe',
      });
    }
    //el que envia el dinero
    const senderUserPromise = await User.findOneAcount(senderAcountNumber);
    if (!senderUserPromise) {
      return res.status(400).json({
        status: 'Error',
        message: 'Cuenta que envia no existe',
      });
    }
    const [recipientUser, senderUser] = await Promise.all([
      recipientUserPomise,
      senderUserPromise,
    ]);
    //validacion si tiene dinero en la cuenta
    if (amount > senderUser.amount) {
      return res.status(400).json({
        status: 'error',
        message: 'Saldo insuficiente',
      });
    }
    //
    const newRecipientBalance = amount + recipientUser.amount;
    const newSenderBalance = senderUser.amount - amount;
    //envio de datos al service
    const updateSenderUserPromise = transferService.updateAmount(
      recipientUser,
      newRecipientBalance
    );
    const updateRecipientUserPromise = transferService.updateAmount(
      senderUser,
      newSenderBalance
    );
    const transferPromise = transferService.createTransfer(
      amount,
      senderUser.id,
      recipientUser.id
    );
    await Promise.all([
      updateSenderUserPromise,
      updateRecipientUserPromise,
      transferPromise,
    ]);
    return res.status(201).json({ transfer: 'transfer ok :)' });
  } catch (error) {
    return res.status(500).json({
      status: 'fail',
      message: 'Something went very wrong! 🧨',
    });
  }
};
