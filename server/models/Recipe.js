const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  uri: {type: String },
  label: {type: String },
  image: {type: String },
  dietLabels: {type: Array },
  healthLabels: {type: Array },
  ingredientLines: {type: Array },
  calories: {type: Number },
  totalWeight: {type: Number },
  totalTime: {type: Number },
  totalNutrients: {
      ENERC_KCAL: {
          label: {type: String },
          quantity: {type: Number },
          unit: {type: String }
      },
      FAT: {
          label: {type: String },
          quantity: {type: Number },
          unit: {type: String }
      },
      FASAT: {
          label: {type: String },
          quantity: {type: Number },
          unit: {type: String }
      },
      FATRN: {
          label: {type: String },
          quantity: {type: Number },
          unit: {type: String }
      },
      FAMS: {
          label: {type: String },
          quantity: {type: Number },
          unit: {type: String }
      },
      FAPU: {
          label: {type: String },
          quantity: {type: Number },
          unit: {type: String }
      },
      CHOCDF: {
          label: {type: String },
          quantity: {type: Number },
          unit: {type: String }
      },
      FIBTG: {
          label: {type: String },
          quantity: {type: Number },
          unit: {type: String }
      },
      SUGAR: {
          label: {type: String },
          quantity: {type: Number },
          unit: {type: String }
      },
      PROCNT: {
          label: {type: String },
          quantity: {type: Number },
          unit: {type: String }
      },
      CHOLE: {
          label: {type: String },
          quantity: {type: Number },
          unit: {type: String }
      },
      NA: {
          label: {type: String },
          quantity: {type: Number },
          unit: {type: String }
      },
      CA: {
          label: {type: String },
          quantity: {type: Number },
          unit: {type: String }
      },
      MG: {
          label: {type: String },
          quantity: {type: Number },
          unit: {type: String }
      },
      K: {
          label: {type: String },
          quantity: {type: Number },
          unit: {type: String }
      },
      FE: {
          label: {type: String },
          quantity: {type: Number },
          unit: {type: String }
      },
      ZN: {
          label: {type: String },
          quantity: {type: Number },
          unit: {type: String }
      },
      P: {
          label: {type: String },
          quantity: {type: Number },
          unit: {type: String }
      },
      VITA_RAE: {
          label: {type: String },
          quantity: {type: Number },
          unit: {type: String }
    },
      VITC: {
          label: {type: String },
          quantity: {type: Number },
          unit: {type: String }
      },
      THIA: {
          label: {type: String },
          quantity: {type: Number },
          unit: {type: String }
      },
      RIBF: {
          label: {type: String },
          quantity: {type: Number },
          unit: {type: String }
      },
      NIA: {
          label: {type: String },
          quantity: {type: Number },
          unit: {type: String }
      },
      VITB6A: {
          label: {type: String },
          quantity: {type: Number },
          unit: {type: String }
      },
      FOLDFE: {
          label: {type: String },
          quantity: {type: Number },
          unit: {type: String }
      },
      FOLFD: {
          label: {type: String },
          quantity: {type: Number },
          unit: {type: String }
      },
      FOLAC: {
          label: {type: String },
          quantity: {type: Number },
          unit: {type: String }
      },
      VITB12: {
          label: {type: String },
          quantity: {type: Number },
          unit: {type: String }
      },
      VITD: {
          label: {type: String },
          quantity: {type: Number },
          unit: {type: String }
      },
      TOCPHA: {
          label: {type: String },
          quantity: {type: Number },
          unit: {type: String }
      },
      VITK1: {
          label: {type: String },
          quantity: {type: Number },
          unit: {type: String }
      }
  },
  totalDaily: {
    ENERC_KCAL: {
        label: {type: String },
        quantity: {type: Number },
        unit: {type: String }
    },
    FAT: {
        label: {type: String },
        quantity: {type: Number },
        unit: {type: String }
    },
    FASAT: {
        label: {type: String },
        quantity: {type: Number },
        unit: {type: String }
    },
    CHOCDF: {
        label: {type: String },
        quantity: {type: Number },
        unit: {type: String }
    },
    FIBTG: {
        label: {type: String },
        quantity: {type: Number },
        unit: {type: String }
    },
    PROCNT: {
        label: {type: String },
        quantity: {type: Number },
        unit: {type: String }
    },
    CHOLE: {
        label: {type: String },
        quantity: {type: Number },
        unit: {type: String }
    },
    NA: {
        label: {type: String },
        quantity: {type: Number },
        unit: {type: String }
    },
    CA: {
        label: {type: String },
        quantity: {type: Number },
        unit: {type: String }
    },
    MG: {
        label: {type: String },
        quantity: {type: Number },
        unit: {type: String }
    },
    K: {
        label: {type: String },
        quantity: {type: Number },
        unit: {type: String }
    },
    FE: {
        label: {type: String },
        quantity: {type: Number },
        unit: {type: String }
    },
    ZN: {
        label: {type: String },
        quantity: {type: Number },
        unit: {type: String }
    },
    P: {
        label: {type: String },
        quantity: {type: Number },
        unit: {type: String }
    },
    VITA_RAE: {
        label: {type: String },
        quantity: {type: Number },
        unit: {type: String }
    },
    VITC: {
        label: {type: String },
        quantity: {type: Number },
        unit: {type: String }
    },
    THIA: {
        label: {type: String },
        quantity: {type: Number },
        unit: {type: String }
    },
    RIBF: {
        label: {type: String },
        quantity: {type: Number },
        unit: {type: String }
    },
    NIA: {
        label: {type: String },
        quantity: {type: Number },
        unit: {type: String }
    },
    VITB6A: {
        label: {type: String },
        quantity: {type: Number },
        unit: {type: String }
    },
    FOLDFE: {
        label: {type: String },
        quantity: {type: Number },
        unit: {type: String }
    },
    VITB12: {
        label: {type: String },
        quantity: {type: Number },
        unit: {type: String }
    },
    VITD: {
        label: {type: String },
        quantity: {type: Number },
        unit: {type: String }
    },
    TOCPHA: {
        label: {type: String },
        quantity: {type: Number },
        unit: {type: String }
    },
    VITK1: {
        label: {type: String },
        quantity: {type: Number },
        unit: {type: String }
    }
},
  digest: [
    {
        label: {type: String },
        tag: {type: String },
        schemaOrgTag: {type: String },
        total: {type: Number },
        hasRDI: {type: Boolean },
        daily: {type: Number },
        unit: {type: String },
        sub: [
            {
              label: {type: String },
              tag: {type: String },
              schemaOrgTag: {type: String },
              total: {type: Number },
              hasRDI: {type: Boolean },
              daily: {type: Number },
              unit: {type: String },
            },
            {
              label: {type: String },
              tag: {type: String },
              schemaOrgTag: {type: String },
              total: {type: Number },
              hasRDI: {type: Boolean },
              daily: {type: Number },
              unit: {type: String },
            },
            {
              label: {type: String },
              tag: {type: String },
              schemaOrgTag: {type: String },
              total: {type: Number },
              hasRDI: {type: Boolean },
              daily: {type: Number },
              unit: {type: String },
            },
            {
              label: {type: String },
              tag: {type: String },
              schemaOrgTag: {type: String },
              total: {type: Number },
              hasRDI: {type: Boolean },
              daily: {type: Number },
              unit: {type: String },
            }
        ]
    },
    {
      label: {type: String },
      tag: {type: String },
      schemaOrgTag: {type: String },
      total: {type: Number },
      hasRDI: {type: Boolean },
      daily: {type: Number },
      unit: {type: String },
        sub: [
            {
              label: {type: String },
              tag: {type: String },
              schemaOrgTag: {type: String },
              total: {type: Number },
              hasRDI: {type: Boolean },
              daily: {type: Number },
              unit: {type: String },
            },
            {
              label: {type: String },
              tag: {type: String },
              schemaOrgTag: {type: String },
              total: {type: Number },
              hasRDI: {type: Boolean },
              daily: {type: Number },
              unit: {type: String },
            },
            {
              label: {type: String },
              tag: {type: String },
              schemaOrgTag: {type: String },
              total: {type: Number },
              hasRDI: {type: Boolean },
              daily: {type: Number },
              unit: {type: String },
            },
            {
              label: {type: String },
              tag: {type: String },
              schemaOrgTag: {type: String },
              total: {type: Number },
              hasRDI: {type: Boolean },
              daily: {type: Number },
              unit: {type: String },
            }
        ]
    },
    {
      label: {type: String },
      tag: {type: String },
      schemaOrgTag: {type: String },
      total: {type: Number },
      hasRDI: {type: Boolean },
      daily: {type: Number },
      unit: {type: String },
    },
    {
      label: {type: String },
      tag: {type: String },
      schemaOrgTag: {type: String },
      total: {type: Number },
      hasRDI: {type: Boolean },
      daily: {type: Number },
      unit: {type: String },
    },
    {
      label: {type: String },
      tag: {type: String },
      schemaOrgTag: {type: String },
      total: {type: Number },
      hasRDI: {type: Boolean },
      daily: {type: Number },
      unit: {type: String },
    },
    {
      label: {type: String },
      tag: {type: String },
      schemaOrgTag: {type: String },
      total: {type: Number },
      hasRDI: {type: Boolean },
      daily: {type: Number },
      unit: {type: String },
    },
    {
      label: {type: String },
      tag: {type: String },
      schemaOrgTag: {type: String },
      total: {type: Number },
      hasRDI: {type: Boolean },
      daily: {type: Number },
      unit: {type: String },
    },
    {
      label: {type: String },
      tag: {type: String },
      schemaOrgTag: {type: String },
      total: {type: Number },
      hasRDI: {type: Boolean },
      daily: {type: Number },
      unit: {type: String },
    },
    {
      label: {type: String },
      tag: {type: String },
      schemaOrgTag: {type: String },
      total: {type: Number },
      hasRDI: {type: Boolean },
      daily: {type: Number },
      unit: {type: String },
    },
    {
      label: {type: String },
      tag: {type: String },
      schemaOrgTag: {type: String },
      total: {type: Number },
      hasRDI: {type: Boolean },
      daily: {type: Number },
      unit: {type: String },
    },
    {
      label: {type: String },
      tag: {type: String },
      schemaOrgTag: {type: String },
      total: {type: Number },
      hasRDI: {type: Boolean },
      daily: {type: Number },
      unit: {type: String },
    },
    {
      label: {type: String },
      tag: {type: String },
      schemaOrgTag: {type: String },
      total: {type: Number },
      hasRDI: {type: Boolean },
      daily: {type: Number },
      unit: {type: String },
    },
    {
      label: {type: String },
      tag: {type: String },
      schemaOrgTag: {type: String },
      total: {type: Number },
      hasRDI: {type: Boolean },
      daily: {type: Number },
      unit: {type: String },
    },
    {
      label: {type: String },
      tag: {type: String },
      schemaOrgTag: {type: String },
      total: {type: Number },
      hasRDI: {type: Boolean },
      daily: {type: Number },
      unit: {type: String },
    },
    {
      label: {type: String },
      tag: {type: String },
      schemaOrgTag: {type: String },
      total: {type: Number },
      hasRDI: {type: Boolean },
      daily: {type: Number },
      unit: {type: String },
    },
    {
      label: {type: String },
      tag: {type: String },
      schemaOrgTag: {type: String },
      total: {type: Number },
      hasRDI: {type: Boolean },
      daily: {type: Number },
      unit: {type: String },
    },
    {
      label: {type: String },
      tag: {type: String },
      schemaOrgTag: {type: String },
      total: {type: Number },
      hasRDI: {type: Boolean },
      daily: {type: Number },
      unit: {type: String },
    },
    {
      label: {type: String },
      tag: {type: String },
      schemaOrgTag: {type: String },
      total: {type: Number },
      hasRDI: {type: Boolean },
      daily: {type: Number },
      unit: {type: String },
    },
    {
      label: {type: String },
      tag: {type: String },
      schemaOrgTag: {type: String },
      total: {type: Number },
      hasRDI: {type: Boolean },
      daily: {type: Number },
      unit: {type: String },
    },
    {
      label: {type: String },
      tag: {type: String },
      schemaOrgTag: {type: String },
      total: {type: Number },
      hasRDI: {type: Boolean },
      daily: {type: Number },
      unit: {type: String },
    },
    {
      label: {type: String },
      tag: {type: String },
      schemaOrgTag: {type: String },
      total: {type: Number },
      hasRDI: {type: Boolean },
      daily: {type: Number },
      unit: {type: String },
    },
    {
      label: {type: String },
      tag: {type: String },
      schemaOrgTag: {type: String },
      total: {type: Number },
      hasRDI: {type: Boolean },
      daily: {type: Number },
      unit: {type: String },
    },
    {
      label: {type: String },
      tag: {type: String },
      schemaOrgTag: {type: String },
      total: {type: Number },
      hasRDI: {type: Boolean },
      daily: {type: Number },
      unit: {type: String },
    },
    {
      label: {type: String },
      tag: {type: String },
      schemaOrgTag: {type: String },
      total: {type: Number },
      hasRDI: {type: Boolean },
      daily: {type: Number },
      unit: {type: String },
    }
]
},
    {
        timestamps: true
    });

const Recipe = mongoose.model('Recipe', recipeSchema);
module.exports = Recipe;
