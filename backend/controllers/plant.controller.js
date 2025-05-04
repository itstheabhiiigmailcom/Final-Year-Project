import Cube from '../models/plant.model.js'; // Your cubeSchema model
import { uploadToS3 } from '../middlewares/aws_s3.js'; // S3 upload middleware

// Create a new Cube Plant
export const createCubePlant = async (req, res) => {
  try {
    const { cubeName, family, scientificName, collector, country, uses } =
      req.body;
    const file = req.file; // comes from multer or similar middleware

    // Validate required fields
    if (
      !cubeName ||
      !family ||
      !scientificName ||
      !collector ||
      !uses ||
      !file
    ) {
      return res.status(400).json({
        status: false,
        message:
          'Missing required fields: cubeName, family, scientificName, collector, uses, or image file.',
      });
    }

    // Check if a cube with the same cubeName already exists
    const existingCube = await Cube.findOne({ cubeName });
    if (existingCube) {
      return res.status(409).json({
        status: false,
        message: 'A cube with this name already exists.',
      });
    }

    // Check if a cube with the same scientificName already exists
    const existingScientific = await Cube.findOne({ scientificName });
    if (existingScientific) {
      return res.status(409).json({
        status: false,
        message: 'A cube with this scientific name already exists.',
      });
    }

    // Upload image to AWS S3
    const uploadResult = await uploadToS3({
      filePath: file.path,
      fileName: file.originalname,
      mimetype: file.mimetype,
    });

    const imageUrl = uploadResult.Location;

    // Create and save new Cube
    const newCube = new Cube({
      cubeName,
      family,
      scientificName,
      collector,
      country: country || '', // if country is not provided, save empty
      uses,
      image: imageUrl,
    });

    await newCube.save();

    return res.status(201).json({
      status: true,
      message: 'Cube plant saved successfully.',
      cube: newCube,
    });
  } catch (error) {
    console.error('Error creating cube plant:', error.message);
    return res.status(500).json({
      status: false,
      message: 'Server error while saving cube plant.',
    });
  }
};

// Get Cube Plant by cubeName
export const getCubePlantByName = async (req, res) => {
  try {
    const { name: cubeName } = req.params;
    if (!cubeName) {
      if (!res.headersSent) {
        return res.status(400).json({
          status: false,
          message: 'cubeName parameter is required.',
        });
      }
    }

    const cube = await Cube.findOne({ cubeName });

    if (!cube) {
      if (!res.headersSent) {
        return res.status(404).json({
          status: false,
          message: 'Cube plant not found with the provided cubeName.',
        });
      }
    }
    if (!res.headersSent) {
      return res.status(200).json({
        status: true,
        cube,
      });
    }
  } catch (error) {
    console.error('Error fetching cube plant:', error.message);
    if (!res.headersSent) {
      return res.status(500).json({
        status: false,
        message: 'Server error while fetching cube plant.',
      });
    }
  }
};
