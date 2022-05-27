import { getAuth } from "firebase/auth";

import app from "../../config/config";

export const auth = getAuth(app);
