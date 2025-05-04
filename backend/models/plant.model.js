import mongoose from 'mongoose';

// const plantSchema = new mongoose.Schema(
//   {
//     plant_id: {
//       type: String,
//       required: true,
//       unique: true,
//     },
//     family: {
//       type: String,
//       required: true,
//     },
//     scientificName: {
//       type: String,
//       required: true,
//       unique: true, // Optional: ensures no duplicates
//     },
//     collector: {
//       type: String,
//       required: true,
//     },
//     country: {
//       type: String,
//       default: '', // Allows it to be empty
//     },
//     uses: {
//       type: String,
//       required: true,
//     },
//     image: {
//       type: String, // URL or file path
//       required: true,
//     },
//   },
//   {
//     timestamps: true, // adds createdAt and updatedAt fields
//   }
// );

const cubeSchema = new mongoose.Schema(
  {
    cubeName: {
      type: String,
      required: true,
      unique: true, // Ensure each Cube name is unique
    },
    family: {
      type: String,
      required: true,
    },
    scientificName: {
      type: String,
      required: true,
      unique: true, // No two plants should have same scientific name
    },
    collector: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      default: '', // Allows country to be empty if not provided
    },
    uses: {
      type: String,
      required: true,
    },
    image: {
      type: String, // Image URL or path
      required: true,
    },
  },
  {
    timestamps: true, // Auto-adds createdAt and updatedAt
  }
);

const Cube = mongoose.model('Cube', cubeSchema);

export default Cube;
