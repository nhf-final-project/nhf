require("dotenv").config();
const mongoose = require("mongoose");
const Food = require("../models/Food");

const foods = [
  {
      foodId: "food_bmllfqsb2hyu3xac1888ga9zp898",
      label: "Pork, fresh, loin, whole, separable lean and fat, raw",
      nutrients: {
          ENERC_KCAL: 198,
          PROCNT: 19.74,
          FAT: 12.58
      },
      category: "Generic foods",
      categoryLabel: "food"
  },
  {
      foodId: "food_bpsx9k3bs14wu7a6qmz3nayf4imr",
      label: "Pork, pickled pork hocks",
      nutrients: {
          ENERC_KCAL: 171,
          PROCNT: 19.11,
          FAT: 10.54
      },
      category: "Generic foods",
      categoryLabel: "food"
  },
  {
      foodId: "food_aqs45bcab0j0j2b26bbcdaxwcfyz",
      label: "Pork, fresh, loin, tenderloin, separable lean only, cooked, roasted",
      nutrients: {
          ENERC_KCAL: 143,
          PROCNT: 26.17,
          FAT: 3.51
      },
      category: "Generic foods",
      categoryLabel: "food"
  },
  {
      foodId: "food_avb9u7ea95ym4qa9oixvybw2j9xn",
      label: "Pork, cured, salt pork, raw",
      nutrients: {
          ENERC_KCAL: 748,
          PROCNT: 5.05,
          FAT: 80.5
      },
      category: "Generic foods",
      categoryLabel: "food"
  },
  {
      foodId: "food_bomgezrbylys5cbk6pplpalobe6w",
      label: "Scrapple, pork",
      nutrients: {
          ENERC_KCAL: 213,
          PROCNT: 8.06,
          FAT: 13.87,
          CHOCDF: 14.06,
          FIBTG: 0.3
      },
      category: "Generic foods",
      categoryLabel: "food"
  },
  {
      foodId: "food_bbc02zaahifwoya5x6gfpamkjbps",
      label: "Pork Stew",
      nutrients: {
          ENERC_KCAL: 113.49264879055917,
          PROCNT: 8.267522750344588,
          FAT: 5.508145596467878,
          CHOCDF: 7.604007995166877,
          FIBTG: 1.0175565973822602
      },
      category: "Generic meals",
      categoryLabel: "meal",
      foodContentsLabel: "pork; carrots; celery; onions; potatoes; garlics; bay leafs; rosemary; Salt; pepper; chicken; pork broth; water"
  },
  {
      foodId: "food_abclx4uavk14zyadlsv49bf9y1ic",
      label: "Beerwurst, pork and beef",
      nutrients: {
          ENERC_KCAL: 276,
          PROCNT: 14,
          FAT: 22.53,
          CHOCDF: 4.27,
          FIBTG: 0.9
      },
      category: "Generic foods",
      categoryLabel: "food"
  },
  {
      foodId: "food_bx4koc6ba2pbgxb73g4pvau9zb2a",
      label: "Pepperoni, pork, beef",
      nutrients: {
          ENERC_KCAL: 494,
          PROCNT: 22.9,
          FAT: 43.5
      },
      category: "Generic foods",
      categoryLabel: "food"
  },
  {
      foodId: "food_btgzgp9axi6b1rbqnynp2b5eziuo",
      label: "Bratwurst, pork, cooked",
      nutrients: {
          ENERC_KCAL: 333,
          PROCNT: 13.72,
          FAT: 29.18,
          CHOCDF: 2.85
      },
      category: "Generic foods",
      categoryLabel: "food"
  },
  {
      foodId: "food_as763f0apd64iiavt8lcwbh5cd4c",
      label: "Pork, fresh, belly, raw",
      nutrients: {
          ENERC_KCAL: 518,
          PROCNT: 9.34,
          FAT: 53.01
      },
      category: "Generic foods",
      categoryLabel: "food"
  },
  {
      foodId: "food_b0b8m5oae0piagaa397gwaktonlz",
      label: "Pork Menudo",
      nutrients: {
          ENERC_KCAL: 149.76313045388497,
          PROCNT: 7.534537685984212,
          FAT: 8.648988639630417,
          CHOCDF: 11.086089091011727,
          FIBTG: 1.3159987705697036
      },
      category: "Generic meals",
      categoryLabel: "meal",
      foodContentsLabel: "pork; potato; carrot; hotdog; pork liver; raisins; tomato sauce; white onion; garlic; cooking oil; soy sauce; bay leaf; salt; pepper"
  },
  {
      foodId: "food_a8h9cluaodpmzeb1zr7pna8hdr21",
      label: "Kalua Pork",
      nutrients: {
          ENERC_KCAL: 161.31636593081933,
          PROCNT: 16.082752845830168,
          FAT: 10.249292340453067
      },
      category: "Generic meals",
      categoryLabel: "meal",
      foodContentsLabel: "pork; liquid smoke; sea salt"
  },
  {
      foodId: "food_bk0qcfhbx5ki8qbaojfq1bt00iu8",
      label: "Pork, fresh, variety meats and by-products, tongue, raw",
      nutrients: {
          ENERC_KCAL: 225,
          PROCNT: 16.3,
          FAT: 17.2
      },
      category: "Generic foods",
      categoryLabel: "food"
  },
  {
      foodId: "food_a1lafwwa152mo3bw3fglgbn055kp",
      label: "Pork, fresh, variety meats and by-products, jowl, raw",
      nutrients: {
          ENERC_KCAL: 655,
          PROCNT: 6.38,
          FAT: 69.61
      },
      category: "Generic foods",
      categoryLabel: "food"
  },
  {
      foodId: "food_akcqrzkbm3jdreb6a7dmfa039fwk",
      label: "Pork, fresh, spareribs, separable lean and fat, raw",
      nutrients: {
          ENERC_KCAL: 277,
          PROCNT: 15.47,
          FAT: 23.4
      },
      category: "Generic foods",
      categoryLabel: "food"
    },
  {
      foodId: "food_bd6vfeyb1uw15ab2jhkrfaiftbsk",
      label: "Pork, cured, ham, shank, bone-in, separable lean and fat, unheated",
      nutrients: {
          ENERC_KCAL: 177,
          PROCNT: 21.61,
          FAT: 9.85,
          CHOCDF: 0.41
      },
      category: "Generic foods",
      categoryLabel: "food"
  },
  {
      foodId: "food_b4wm0m1bc03flzbgknkwfafw468n",
      label: "Braised Pork",
      nutrients: {
          ENERC_KCAL: 237.43750803867886,
          PROCNT: 15.25769786947633,
          FAT: 18.739454620998508,
          CHOCDF: 1.216406651583128,
          FIBTG: 0.39450466837656134
      },
      category: "Generic meals",
      categoryLabel: "meal",
      foodContentsLabel: "pork shoulder; garlic; smoked paprika; olive oil; orange; lemons"
  },
  {
      foodId: "food_b4ud30aapemlnvbvoabhga3bkm3f",
      label: "Pork Sausage",
      nutrients: {
          ENERC_KCAL: 262.0724359369086,
          PROCNT: 16.730997671805994,
          FAT: 20.957668507372055,
          CHOCDF: 0.6104398457286797,
          FIBTG: 0.20767003542827323
      },
      category: "Generic meals",
      categoryLabel: "meal",
      foodContentsLabel: "ground pork; ground sage; salt; pepper; cayenne pepper; brown sugar"
  },
  {
      foodId: "food_bm22x6lblnx4lzat9wqi4bpv8ubb",
      label: "Pork, fresh, loin, sirloin (chops or roasts), boneless, separable lean and fat, raw",
      nutrients: {
          ENERC_KCAL: 133,
          PROCNT: 22.49,
          FAT: 4.05
      },
      category: "Generic foods",
      categoryLabel: "food"
  },
  {
      foodId: "food_apj3cjnbrj0olnb40wa6cankajfw",
      label: "Pork, fresh, loin, center loin (chops), bone-in, separable lean and fat, raw",
      nutrients: {
          ENERC_KCAL: 170,
          PROCNT: 20.71,
          FAT: 9.03
      },
      category: "Generic foods",
      categoryLabel: "food"
  }
  ]

  mongoose.connect(process.env.DB, { useNewUrlParser: true } )
  .then(() => {
      console.log("connected to mongoose")
      console.log(foods)
  })
  .then(() => {
      return Food.insertMany(foods)
  })
  .then(foods => {
      console.log(foods)
      mongoose.connection.close()
  })