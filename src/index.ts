/*
  Video at: ??
*/
import { listen, trigger, reset } from "polyrhythm";

// HMR-friendliness
reset();
console.clear();

listen("track/play", ({ payload }) => {
  console.log("track/play", payload);
});

trigger("track/play", { id: 1 });
