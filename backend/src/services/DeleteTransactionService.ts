import { getCustomRepository } from 'typeorm';

import AppError from '../errors/AppError';

import TransactionRepository from '../repositories/TransactionsRepository';

interface Request {
  id: string;
}

class DeleteTransactionService {
  public async execute({ id }: Request): Promise<void> {
    const transactionRepository = getCustomRepository(TransactionRepository);

    const findIdDelete = await transactionRepository.findOne(id);

    if (!findIdDelete) {
      throw new AppError('Id not exists.');
    }

    await transactionRepository.remove(findIdDelete);
  }
}

export default DeleteTransactionService;
