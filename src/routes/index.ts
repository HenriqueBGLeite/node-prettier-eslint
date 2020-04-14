import { Router } from 'express';
import appotimentsRouter from './appointments.routes';

const routes = Router();

routes.use('/appointments', appotimentsRouter);

export default routes;
