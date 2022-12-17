import { Environment } from "@challenge-charlie/frontend/shared/environments";
import { environment } from "./environment";

export abstract class EnvironmentUtility {

    private readonly environment: Environment = environment;

}