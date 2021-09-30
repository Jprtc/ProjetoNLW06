import {Router} from "express"
import {CreateUserController} from "./controllers/CreateUserController";
import {CreateTagController} from "./controllers/CreateTagController";
import {ensureAdmin} from "./middlewares/ensureAdmin"
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";
import {ListUserSentComplimentsController} from "./controllers/ListUserSentComplimentsController";
import {ListUserReceivedComplimentsController} from "./controllers/ListUserReceivedComplimentsController"
import { ListTagsController } from "./controllers/ListTagsController";
import {ListUserController} from "./controllers/ListUserController";
import {ListUserByEmailController} from "./controllers/ListUserByEmailController"


const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();
const createComplimentController = new CreateComplimentController();

const listTagsController = new ListTagsController();
const listUserController = new ListUserController()

const listUserSentComplimentsController = new ListUserSentComplimentsController();
const listUserReceivedComplimentsController = new ListUserReceivedComplimentsController();
const listUserByEmailController = new ListUserByEmailController();


router.post("/users", createUserController.handle);
//router.use(ensureAdmin);
router.post("/tags", ensureAuthenticated, ensureAdmin, createTagController.handle);
router.post("/login", authenticateUserController.handle);
router.post("/compliments", ensureAuthenticated, createComplimentController.handle);

router.post("/user",listUserByEmailController.handle);

router.get("/tags", listTagsController.handle);
router.get("/users",listUserController.handle);


router.get("/users/compliments/sent",ensureAuthenticated,listUserSentComplimentsController.handle)
router.get("/users/compliments/received",ensureAuthenticated,listUserReceivedComplimentsController.handle);

export {router}