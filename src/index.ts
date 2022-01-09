import { ancCronJob } from "./jobs/AncJob";
import cron from "node-cron";
const every3Hours = "0 0 */3 * * *";
ancCronJob();
cron.schedule(every3Hours, ancCronJob);
