import { raceInit } from "./service/raceService.js";
import { playRace } from "./controller/raceController.js";

const { cars, round } = await raceInit();

playRace(cars, round);
