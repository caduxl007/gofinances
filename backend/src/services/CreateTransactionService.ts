import { getCustomRepository, getRepository } from 'typeorm';
import Transaction from '../models/Transaction';
import Category from '../models/Category';

import TransactionsRepository from '../repositories/TransactionsRepository';
import AppError from '../errors/AppError';

interface Request {
  title: string;
  value: number;
  type: 'income' | 'outcome';
  category: string;
}

class CreateTransactionService {
  public async execute({
    title,
    value,
    type,
    category,
  }: Request): Promise<Transaction> {
    const transactionsRepository = getCustomRepository(TransactionsRepository);
    const categoryRepository = getRepository(Category);

    const { total } = await transactionsRepository.getBalance();

    if (type === 'outcome' && total < value) {
      throw new AppError('You do note have enough balance');
    }

    let categoryExicts = await categoryRepository.findOne({
      where: { title: category },
    });

    if (!categoryExicts) {
      categoryExicts = categoryRepository.create({
        title: category,
      });

      await categoryRepository.save(categoryExicts);
    }

    const transaction = transactionsRepository.create({
      title,
      type,
      value,
      category: categoryExicts,
    });

    await transactionsRepository.save(transaction);

    return transaction;
  }
}

export default CreateTransactionService;
