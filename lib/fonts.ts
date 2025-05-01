// export fonts from next/font/google [Bebas Neue, Roboto]

import { Bebas_Neue, Roboto } from "next/font/google";


export const roboto = Roboto({
  weight: ['300',"400", "500", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});
export const bebasNeue = Bebas_Neue({
  weight: ["400"],
  subsets: ["latin"],
  
  display: "swap",
});
