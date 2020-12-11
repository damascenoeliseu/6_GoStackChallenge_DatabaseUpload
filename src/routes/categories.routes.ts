import { Router } from 'express';

// import categoriesRepository from '../repositories/categoriesRepository';
import CreateCategoryService from '../services/CreateCategoryService';
// import Deletecategorieservice from '../services/Deletecategorieservice';
// import ImportcategoriesService from '../services/ImportcategoriesService';

const categoriesRouter = Router();

// categoriesRouter.get('/', async (request, response) => {
//   // TODO
// });

categoriesRouter.post('/', async (request, response) => {
  const { title } = request.body;
  const createCategory = new CreateCategoryService();
  const category = await createCategory.execute({ title });

  return response.json(category);
});

// categoriesRouter.delete('/:id', async (request, response) => {
//   // TODO
// });

// categoriesRouter.post('/import', async (request, response) => {
//   // TODO
// });

export default categoriesRouter;
