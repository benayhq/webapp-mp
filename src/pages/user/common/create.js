import User from "./user";
import Agent from "./agent";

export default class Creator{
    factory = (isAgent) => {
        return isAgent ? new Agent() : new User();
    }
}