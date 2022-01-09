import { contractAddress, LCD_HOST } from "../constants";
import axios from "axios";
import dbInitializer from "../db";
const getEpochState = async () => {
  const { data } = await axios({
    method: "get",
    url: `${LCD_HOST}/wasm/contracts/${contractAddress.mmOverseer}/store`,
    params: {
      query_msg: {
        epoch_state: {},
      },
    },
    transformResponse: [
      function (data) {
        try {
          const { height, result } = JSON.parse(data);
          return {
            height,
            ...result,
          };
        } catch (error) {
          console.error(error);
        }
      },
    ],
  });
  return data;
};

export const ancCronJob = async () => {
  const db = await dbInitializer();
  await db.models.MmOverseerEpochState.upsert(await getEpochState());
};
