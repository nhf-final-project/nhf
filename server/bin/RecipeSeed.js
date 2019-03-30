require("dotenv").config();
const mongoose = require("mongoose");
const Recipe = require("../models/Recipe");

const recipes = [{

  uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_4cbafb6e10d39f9a432bde8e3afe62ee",
  label: "All The Endorsement recipes",
  image: "https://www.edamam.com/web-img/559/559b7168727e456894d4c1e2f92645a6",
  dietLabels: [
      "Balanced"
  ],
  healthLabels: [
      "Sugar-Conscious",
      "Vegetarian",
      "Peanut-Free",
      "Tree-Nut-Free",
      "Alcohol-Free"
  ],
  cautions: [
      "Sulfites"
  ],
  ingredientLines: [
      "1 cup | 4.5 oz | 120 g whole wheat flour",
      "2 cups | 9 oz | 225 g all-purpose flour",
      "1/2 cup | 1.75 oz | 50 g rolled oats or 1/2 cup | 1.5 oz | 40 g wheat germ",
      "1/2 cup | 1.75 oz | 50 g rolled oats or 1/2 cup | 1.5 oz | 40 g wheat germ",
      "4 oz | 110 g organic cornstarch or rice flour",
      "2 teaspoons fine-grain sea salt",
      "2 teaspoons baking powder",
      "1 teaspoons baking soda",
      "4 cups | 1 L buttermilk",
      "1/2 cup | 4 oz | 115 g butter, melted and cooled",
      "4 eggs, separated"
  ],
  calories: 3486.2840185500004,
  totalWeight: 1843.1416565645723,
  totalTime: 40,
  totalNutrients: {
      ENERC_KCAL: {
          label: "Energy",
          quantity: 3486.2840185500004,
          unit: "kcal"
      },
      FAT: {
          label: "Fat",
          quantity: 129.5973029135,
          unit: "g"
      },
      FASAT: {
          label: "Saturated",
          quantity: 71.27901663705,
          unit: "g"
      },
      FATRN: {
          label: "Trans",
          quantity: 3.78589,
          unit: "g"
      },
      FAMS: {
          label: "Monounsaturated",
          quantity: 35.282114568850005,
          unit: "g"
      },
      FAPU: {
          label: "Polyunsaturated",
          quantity: 11.766803770575,
          unit: "g"
      },
      CHOCDF: {
          label: "Carbs",
          quantity: 473.01459152025,
          unit: "g"
      },
      FIBTG: {
          label: "Fiber",
          quantity: 29.84995422,
          unit: "g"
      },
      SUGAR: {
          label: "Sugars",
          quantity: 50.08557771100001,
          unit: "g"
      },
      PROCNT: {
          label: "Protein",
          quantity: 114.39933650374999,
          unit: "g"
      },
      CHOLE: {
          label: "Cholesterol",
          quantity: 923.065,
          unit: "mg"
      },
      NA: {
          label: "Sodium",
          quantity: 4285.1575601469,
          unit: "mg"
      },
      CA: {
          label: "Calcium",
          quantity: 2065.1942646254975,
          unit: "mg"
      },
      MG: {
          label: "Magnesium",
          quantity: 609.3917680156457,
          unit: "mg"
      },
      K: {
          label: "Potassium",
          quantity: 2820.578035425166,
          unit: "mg"
      },
      FE: {
          label: "Iron",
          quantity: 24.589897085163088,
          unit: "mg"
      },
      ZN: {
          label: "Zinc",
          quantity: 14.776418304064574,
          unit: "mg"
      },
      P: {
          label: "Phosphorus",
          quantity: 3328.38613065,
          unit: "mg"
      },
      VITA_RAE: {
          label: "Vitamin A",
          quantity: 1188.74,
          unit: "µg"
      },
      VITC: {
          label: "Vitamin C",
          quantity: 9.8,
          unit: "mg"
      },
      THIA: {
          label: "Thiamin (B1)",
          quantity: 3.5610643676500007,
          unit: "mg"
      },
      RIBF: {
          label: "Riboflavin (B2)",
          quantity: 3.8866435994249997,
          unit: "mg"
      },
      NIA: {
          label: "Niacin (B3)",
          quantity: 25.046480595749998,
          unit: "mg"
      },
      VITB6A: {
          label: "Vitamin B6",
          quantity: 1.8018206833000003,
          unit: "mg"
      },
      FOLDFE: {
          label: "Folate equivalent (total)",
          quantity: 943.6809236999999,
          unit: "µg"
      },
      FOLFD: {
          label: "Folate (food)",
          quantity: 288.6809237,
          unit: "µg"
      },
      FOLAC: {
          label: "Folic acid",
          quantity: 385,
          unit: "µg"
      },
      VITB12: {
          label: "Vitamin B12",
          quantity: 3.8797500000000005,
          unit: "µg"
      },
      VITD: {
          label: "Vitamin D",
          quantity: 5.1425,
          unit: "µg"
      },
      TOCPHA: {
          label: "Vitamin E",
          quantity: 6.81693790175,
          unit: "mg"
      },
      VITK1: {
          label: "Vitamin K",
          quantity: 14.071,
          unit: "µg"
      }
  },
  totalDaily: {
      ENERC_KCAL: {
          label: "Energy",
          quantity: 174.31420092750002,
          unit: "%"
      },
      FAT: {
          label: "Fat",
          quantity: 199.3804660207692,
          unit: "%"
      },
      FASAT: {
          label: "Saturated",
          quantity: 356.39508318525003,
          unit: "%"
      },
      CHOCDF: {
          label: "Carbs",
          quantity: 157.67153050675,
          unit: "%"
      },
      FIBTG: {
          label: "Fiber",
          quantity: 119.39981688,
          unit: "%"
      },
      PROCNT: {
          label: "Protein",
          quantity: 228.7986730075,
          unit: "%"
      },
      CHOLE: {
          label: "Cholesterol",
          quantity: 307.68833333333333,
          unit: "%"
      },
      NA: {
          label: "Sodium",
          quantity: 178.54823167278752,
          unit: "%"
      },
      CA: {
          label: "Calcium",
          quantity: 206.51942646254975,
          unit: "%"
      },
      MG: {
          label: "Magnesium",
          quantity: 145.09327809896325,
          unit: "%"
      },
      K: {
          label: "Potassium",
          quantity: 60.01229862606736,
          unit: "%"
      },
      FE: {
          label: "Iron",
          quantity: 136.61053936201716,
          unit: "%"
      },
      ZN: {
          label: "Zinc",
          quantity: 134.3310754914961,
          unit: "%"
      },
      P: {
          label: "Phosphorus",
          quantity: 475.48373295,
          unit: "%"
      },
      VITA_RAE: {
          label: "Vitamin A",
          quantity: 132.0822222222222,
          unit: "%"
      },
      VITC: {
          label: "Vitamin C",
          quantity: 10.88888888888889,
          unit: "%"
      },
      THIA: {
          label: "Thiamin (B1)",
          quantity: 296.7553639708334,
          unit: "%"
      },
      RIBF: {
          label: "Riboflavin (B2)",
          quantity: 298.9725845711538,
          unit: "%"
      },
      NIA: {
          label: "Niacin (B3)",
          quantity: 156.5405037234375,
          unit: "%"
      },
      VITB6A: {
          label: "Vitamin B6",
          quantity: 138.60159102307694,
          unit: "%"
      },
      FOLDFE: {
          label: "Folate equivalent (total)",
          quantity: 235.92023092499997,
          unit: "%"
      },
      VITB12: {
          label: "Vitamin B12",
          quantity: 161.65625000000003,
          unit: "%"
      },
      VITD: {
          label: "Vitamin D",
          quantity: 34.28333333333333,
          unit: "%"
      },
      TOCPHA: {
          label: "Vitamin E",
          quantity: 45.44625267833333,
          unit: "%"
      },
      VITK1: {
          label: "Vitamin K",
          quantity: 11.725833333333332,
          unit: "%"
      }
  },
  digest: [
      {
          label: "Fat",
          tag: "FAT",
          schemaOrgTag: "fatContent",
          total: 129.5973029135,
          hasRDI: true,
          daily: 199.3804660207692,
          unit: "g",
          sub: [
              {
                  label: "Saturated",
                  tag: "FASAT",
                  schemaOrgTag: "saturatedFatContent",
                  total: 71.27901663705,
                  hasRDI: true,
                  daily: 356.39508318525003,
                  unit: "g"
              },
              {
                  label: "Trans",
                  tag: "FATRN",
                  schemaOrgTag: "transFatContent",
                  total: 3.78589,
                  hasRDI: false,
                  daily: 0,
                  unit: "g"
              },
              {
                  label: "Monounsaturated",
                  tag: "FAMS",
                  schemaOrgTag: null,
                  total: 35.282114568850005,
                  hasRDI: false,
                  daily: 0,
                  unit: "g"
              },
              {
                  label: "Polyunsaturated",
                  tag: "FAPU",
                  schemaOrgTag: null,
                  total: 11.766803770575,
                  hasRDI: false,
                  daily: 0,
                  unit: "g"
              }
            ]
      },
      {
          label: "Carbs",
          tag: "CHOCDF",
          schemaOrgTag: "carbohydrateContent",
          total: 473.01459152025,
          hasRDI: true,
          daily: 157.67153050675,
          unit: "g",
          sub: [
              {
                  label: "Carbs (net)",
                  tag: "CHOCDF.net",
                  schemaOrgTag: null,
                  total: 443.16463730025,
                  hasRDI: false,
                  daily: 0,
                  unit: "g"
              },
              {
                  label: "Fiber",
                  tag: "FIBTG",
                  schemaOrgTag: "fiberContent",
                  total: 29.84995422,
                  hasRDI: true,
                  daily: 119.39981688,
                  unit: "g"
              },
              {
                  label: "Sugars",
                  tag: "SUGAR",
                  schemaOrgTag: "sugarContent",
                  total: 50.08557771100001,
                  hasRDI: false,
                  daily: 0,
                  unit: "g"
              },
              {
                  label: "Sugars, added",
                  tag: "SUGAR.added",
                  schemaOrgTag: null,
                  total: 0,
                  hasRDI: false,
                  daily: 0,
                  unit: "g"
              }
          ]
      },
      {
          label: "Protein",
          tag: "PROCNT",
          schemaOrgTag: "proteinContent",
          total: 114.39933650374999,
          hasRDI: true,
          daily: 228.7986730075,
          unit: "g"
      },
      {
          label: "Cholesterol",
          tag: "CHOLE",
          schemaOrgTag: "cholesterolContent",
          total: 923.065,
          hasRDI: true,
          daily: 307.68833333333333,
          unit: "mg"
      },
      {
          label: "Sodium",
          tag: "NA",
          schemaOrgTag: "sodiumContent",
          total: 4285.1575601469,
          hasRDI: true,
          daily: 178.54823167278752,
          unit: "mg"
      },
      {
          label: "Calcium",
          tag: "CA",
          schemaOrgTag: null,
          total: 2065.1942646254975,
          hasRDI: true,
          daily: 206.51942646254975,
          unit: "mg"
      },
      {
          label: "Magnesium",
          tag: "MG",
          schemaOrgTag: null,
          total: 609.3917680156457,
          hasRDI: true,
          daily: 145.09327809896325,
          unit: "mg"
      },
      {
          label: "Potassium",
          tag: "K",
          schemaOrgTag: null,
          total: 2820.578035425166,
          hasRDI: true,
          daily: 60.01229862606736,
          unit: "mg"
      },
      {
          label: "Iron",
          tag: "FE",
          schemaOrgTag: null,
          total: 24.589897085163088,
          hasRDI: true,
          daily: 136.61053936201716,
          unit: "mg"
      },
      {
          label: "Zinc",
          tag: "ZN",
          schemaOrgTag: null,
          total: 14.776418304064574,
          hasRDI: true,
          daily: 134.3310754914961,
          unit: "mg"
      },
      {
          label: "Phosphorus",
          tag: "P",
          schemaOrgTag: null,
          total: 3328.38613065,
          hasRDI: true,
          daily: 475.48373295,
          unit: "mg"
      },
      {
          label: "Vitamin A",
          tag: "VITA_RAE",
          schemaOrgTag: null,
          total: 1188.74,
          hasRDI: true,
          daily: 132.0822222222222,
          unit: "µg"
      },
      {
          label: "Vitamin C",
          tag: "VITC",
          schemaOrgTag: null,
          total: 9.8,
          hasRDI: true,
          daily: 10.88888888888889,
          unit: "mg"
      },
      {
          label: "Thiamin (B1)",
          tag: "THIA",
          schemaOrgTag: null,
          total: 3.5610643676500007,
          hasRDI: true,
          daily: 296.7553639708334,
          unit: "mg"
      },
      {
          label: "Riboflavin (B2)",
          tag: "RIBF",
          schemaOrgTag: null,
          total: 3.8866435994249997,
          hasRDI: true,
          daily: 298.9725845711538,
          unit: "mg"
      },
      {
          label: "Niacin (B3)",
          tag: "NIA",
          schemaOrgTag: null,
          total: 25.046480595749998,
          hasRDI: true,
          daily: 156.5405037234375,
          unit: "mg"
      },
      {
          label: "Vitamin B6",
          tag: "VITB6A",
          schemaOrgTag: null,
          total: 1.8018206833000003,
          hasRDI: true,
          daily: 138.60159102307694,
          unit: "mg"
      },
      {
          label: "Folate equivalent (total)",
          tag: "FOLDFE",
          schemaOrgTag: null,
          total: 943.6809236999999,
          hasRDI: true,
          daily: 235.92023092499997,
          unit: "µg"
      },
      {
          label: "Folate (food)",
          tag: "FOLFD",
          schemaOrgTag: null,
          total: 288.6809237,
          hasRDI: false,
          daily: 0,
          unit: "µg"
      },
      {
          label: "Folic acid",
          tag: "FOLAC",
          schemaOrgTag: null,
          total: 385,
          hasRDI: false,
          daily: 0,
          unit: "µg"
      },
      {
          label: "Vitamin B12",
          tag: "VITB12",
          schemaOrgTag: null,
          total: 3.8797500000000005,
          hasRDI: true,
          daily: 161.65625000000003,
          unit: "µg"
      },
      {
          label: "Vitamin D",
          tag: "VITD",
          schemaOrgTag: null,
          total: 5.1425,
          hasRDI: true,
          daily: 34.28333333333333,
          unit: "µg"
      },
      {
          label: "Vitamin E",
          tag: "TOCPHA",
          schemaOrgTag: null,
          total: 6.81693790175,
          hasRDI: true,
          daily: 45.44625267833333,
          unit: "mg"
      },
      {
          label: "Vitamin K",
          tag: "VITK1",
          schemaOrgTag: null,
          total: 14.071,
          hasRDI: true,
          daily: 11.725833333333332,
          unit: "µg"
      }
  ]
}]

mongoose.connect(process.env.DB)
    .then(() => {
        console.log("connected to mongoose")
        console.log(recipes)
    })
    .then(() => {
        return Recipe.insertMany(recipes)
    })
    .then(recipes => {
        console.log(recipes)
        mongoose.connection.close()
    })