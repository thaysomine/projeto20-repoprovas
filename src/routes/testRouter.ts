import { Router } from "express";

import { insertTest, getByDiscipline, getByTeacher } from "../controllers/testController.js";
import { validateTest} from "../middlewares/joiValidation.js";
import { tokenValidation } from "../middlewares/tokenValidation.js";

const testRouter = Router();
testRouter.use(tokenValidation);

testRouter.post("/test", validateTest, insertTest);
testRouter.get("/test/disciplines", getByDiscipline);
testRouter.get("/test/teachers", getByTeacher);

export default testRouter;