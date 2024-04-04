import express from 'express';
import cors from 'cors';
import Lab5 from './Lab5.js';
import ModuleRoutes from "./Kanbas/Modules/routes.js";
import CourseRoutes from "./Kanbas/Courses/routes.js";

const app = express()
app.use(cors())
app.use(express.json()) // statement occurs AFTER setting up CORS
CourseRoutes(app);
Lab5(app);
ModuleRoutes(app);
app.listen(process.env.PORT || 4000)