// import AppError from '../errors/AppError';
import { getRepository } from 'typeorm';
import Transaction from '../models/Transaction';
import CreateCategoryService from './CreateCategoryService';

interface Request {
  title: string;
  type: 'income' | 'outcome';
  value: number;
  category: string;
}

class CreateTransactionService {
  public async execute({
    title,
    type,
    value,
    category,
  }: Request): Promise<Transaction> {
    const createCategory = new CreateCategoryService();
    const checkCategory = await createCategory.execute({
      title: category,
    });

    const transactionsRepository = getRepository(Transaction);
    const transaction = transactionsRepository.create({
      title,
      type,
      value,
      category_id: checkCategory.id,
    });

    await transactionsRepository.save(transaction);

    return transaction;
  }
}

export default CreateTransactionService;
