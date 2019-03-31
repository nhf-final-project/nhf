require("dotenv").config();
const mongoose = require("mongoose");
const Food = require("../models/Food");

const foods = [
  {
      foodId: "food_bnbh4ycaqj9as0a9z7h9xb2wmgat",
      label: "apple",
      nutrients: {
          ENERC_KCAL: 52,
          PROCNT: 0.26,
          FAT: 0.17,
          CHOCDF: 13.81,
          FIBTG: 2.4
      },
      category: "Generic foods",
      categoryLabel: "food"
  },
  {
      foodId: "food_b8rrwcpbvba3asaru2mdsbagsbs2",
      label: "Apple-Crisp Baked Apples",
      nutrients: {
          ENERC_KCAL: 106.03956616796349,
          PROCNT: 0.9362503447706831,
          FAT: 6.077002847401216,
          CHOCDF: 13.683948357131875,
          FIBTG: 2.1664565256307085
      },
      category: "Generic meals",
      categoryLabel: "meal",
      foodContentsLabel: "walnuts; pecans; brown sugar; kosher salt; ground cinnamon; cardamom; rolled oats; butter; apples; apple cider; vanilla ice cream"
  },
  {
      foodId: "food_bcruvycav1jponay8eu0oa5fkbhx",
      label: "Apple Pie Baked Apples",
      nutrients: {
          ENERC_KCAL: 134.5233856921379,
          PROCNT: 1.1491020469471132,
          FAT: 3.202887624039124,
          CHOCDF: 27.022139090138158,
          FIBTG: 2.160775443025757
      },
      category: "Generic meals",
      categoryLabel: "meal",
      foodContentsLabel: "Apples; Dark Brown Sugar; ground cinnamon; oats; all purpose flour; unsalted butter; kosher salt; orange; orange juice; honey"
  },
  {
      foodId: "food_ar85wz3bizlw0ebzrxrh6aiz44l2",
      label: "APPLE COUNTRY, APPLES",
      nutrients: {
          ENERC_KCAL: 52,
          CHOCDF: 14.289999961853027,
          FIBTG: 3.200000047683716
      },
      brand: "Apple Country",
      category: "Packaged foods",
      categoryLabel: "food",
      foodContentsLabel: " APPLE "
  },
  {
      foodId: "food_aa1c3embbqxdhna96tmdwawusiwr",
      label: "APPLES",
      nutrients: {
          ENERC_KCAL: 300,
          CHOCDF: 72.5,
          FIBTG: 7.5
      },
      brand: "WAL-MART STORES, INC.",
      category: "Packaged foods",
      categoryLabel: "food",
      foodContentsLabel: " DRIED APPLES (APPLES; SODIUM METABISULFITE AND SODIUM SULFITE (TO PRESERVE COLOR)). "
  },
  {
      foodId: "food_a6c3shkb8r5cknbhijon1bf1escf",
      label: "Apple Martini",
      nutrients: {
          ENERC_KCAL: 109.66666666666666,
          PROCNT: 0.12,
          FAT: 0.1,
          CHOCDF: 8.370000000000001,
          FIBTG: 0.8666666666666666
      },
      category: "Generic meals",
      categoryLabel: "meal",
      foodContentsLabel: "vodka; apple; apple juice"
  },
  {
      foodId: "food_bws9l24ba5vdl6bbn0q2gbev0sy2",
      label: "Apple",
      nutrients: {
          ENERC_KCAL: 47.03194926610721,
          CHOCDF: 12.933786048179483,
          FIBTG: 2.9394968291317007
      },
      brand: "Produce Marketers Association",
      category: "Packaged foods",
      categoryLabel: "food",
      foodContentsLabel: "Apple ( Organic )."
  },
  {
      foodId: "food_azhmnz7b7ufaedbbzbli1a1nquzu",
      label: "Apple",
      nutrients: {
          ENERC_KCAL: 53.719008264462815,
          PROCNT: 0.4132231404958678,
          CHOCDF: 14.049586776859504,
          FIBTG: 2.066115702479339
      },
      brand: "Produce Marketers Association",
      category: "Packaged foods",
      categoryLabel: "food",
      foodContentsLabel: "Organic Apples."
  },
  {
      foodId: "food_a3e2dnxayyubruaqv8xava5ua7s3",
      label: "APPLE",
      nutrients: {
          ENERC_KCAL: 52,
          FAT: 0.6499999761581421,
          CHOCDF: 14.289999961853027,
          FIBTG: 3.200000047683716
      },
      brand: "TREECRISP 2 GO",
      category: "Packaged foods",
      categoryLabel: "food",
      foodContentsLabel: " CRISP APPLE. "
  },
  {
      foodId: "food_bohnrzrbvidf0oa21o9s0bioj5vu",
      label: "APPLE",
      nutrients: {
          ENERC_KCAL: 52,
          FAT: 0.6499999761581421,
          CHOCDF: 14.289999961853027,
          FIBTG: 3.200000047683716
      },
      brand: "TREECRISP 2 GO",
      category: "Packaged foods",
      categoryLabel: "food",
      foodContentsLabel: " CRISP APPLE. "
  },
  {
      foodId: "food_abyyro0am8ebvlahj7yzlbin9n5y",
      label: "APPLES",
      nutrients: {
          ENERC_KCAL: 52,
          PROCNT: 0.3199999928474426,
          CHOCDF: 14.289999961853027,
          FIBTG: 3.200000047683716
      },
      brand: "Meijer, Inc.",
      category: "Packaged foods",
      categoryLabel: "food",
      foodContentsLabel: " APPLES. "
  },
  {
      foodId: "food_brs4na2abvko40av4vkn5ae26wue",
      label: "APPLES",
      nutrients: {
          ENERC_KCAL: 52,
          CHOCDF: 14.289999961853027,
          FIBTG: 3.200000047683716
      },
      brand: "Apple Country",
      category: "Packaged foods",
      categoryLabel: "food",
      foodContentsLabel: " APPLES "
  },
  {
      foodId: "food_al8fpouakjzo4hanozgo4ayjilw5",
      label: "APPLES",
      nutrients: {
          ENERC_KCAL: 52,
          CHOCDF: 14.289999961853027,
          FIBTG: 3.200000047683716
      },
      brand: "Chelan Fresh Marketing",
      category: "Packaged foods",
      categoryLabel: "food",
      foodContentsLabel: " APPLE. "
  },
  {
      foodId: "food_bp6m7ytaogwr4iasp4uu8a4xmw2y",
      label: "APPLES",
      nutrients: {
          ENERC_KCAL: 52,
          CHOCDF: 14.289999961853027,
          FIBTG: 3.200000047683716
      },
      brand: "MOUNTAINEER",
      category: "Packaged foods",
      categoryLabel: "food",
      foodContentsLabel: " APPLES "
  },
  {
      foodId: "food_asnylxfac7fvq1bq0raqdatuu9j6",
      label: "APPLES",
      nutrients: {
          ENERC_KCAL: 52,
          CHOCDF: 14.289999961853027,
          FIBTG: 3.200000047683716
      },
      brand: "PINKIDS",
      category: "Packaged foods",
      categoryLabel: "food",
      foodContentsLabel: " APPLES. "
  },
  {
      foodId: "food_alf84wbbmji99xb55awb5b2n2g01",
      label: "APPLES",
      nutrients: {
          ENERC_KCAL: 54,
          PROCNT: 0.4099999964237213,
          CHOCDF: 14.050000190734863,
          FIBTG: 2.0999999046325684
      },
      brand: "Produce Marketing Association",
      category: "Packaged foods",
      categoryLabel: "food",
      foodContentsLabel: " APPLES. "
  },
  {
      foodId: "food_bb629lpa16ra3dacq0nivaw6unnv",
      label: "Apple",
      nutrients: {
          ENERC_KCAL: 51.94805194805195,
          CHOCDF: 13.636363636363637,
          FIBTG: 2.5974025974025974
      },
      brand: "Panera Bread",
      category: "Fast foods",
      categoryLabel: "meal"
  },
  {
      foodId: "food_awtilwybcoi3khbmhj5zja17u6x5",
      label: "Apple",
      nutrients: {
          ENERC_KCAL: 53.33333333333333,
          CHOCDF: 14.666666666666666,
          FIBTG: 3.333333333333333
      },
      brand: "Apples",
      category: "Packaged foods",
      categoryLabel: "food",
      foodContentsLabel: "Apple"
  },
  {
      foodId: "food_a17zvbibzshv16ayxky5zax6dddx",
      label: "APPLES",
      nutrients: {
          ENERC_KCAL: 54,
          PROCNT: 0.4099999964237213,
          CHOCDF: 14.050000190734863,
          FIBTG: 2.0999999046325684
      },
      brand: "Produce Marketing Association",
      category: "Packaged foods",
      categoryLabel: "food",
      foodContentsLabel: " MICHIGAN APPLES "
  },
  {
      foodId: "food_bjretfbbp3x4sdazqo29pbf6gwbu",
      label: "APPLES",
      nutrients: {
          ENERC_KCAL: 52,
          CHOCDF: 14.289999961853027,
          FIBTG: 3.200000047683716
      },
      brand: "Produce Marketing Association",
      category: "Packaged foods",
      categoryLabel: "food",
      foodContentsLabel: " ROME APPLES "
  }]

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