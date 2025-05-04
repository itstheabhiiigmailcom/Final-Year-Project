import User from '../models/user.model.js';

export const trackPlantVisit = async (req, res) => {
  try {
    const { cubeName } = req.body;
    const user_id = req.user.user_id; // Assuming authentication middleware sets this

    const user = await User.findOne({ user_id });
    if (!user) {
      console.log('User not found.');
      if (!res.headersSent) {
        return res
          .status(404)
          .json({ status: false, message: 'User not found' });
      }
    }

    // Find if the user already visited this plant
    const visitCubeIndex = user.visitedPlants.findIndex(
      (p) => p.cubeName === cubeName
    );

    if (visitCubeIndex !== -1) {
      // If plant already exists, increment visit count
      user.visitedPlants[visitCubeIndex].visitCount += 1;
    } else {
      // If plant doesn't exist in the array, add it as a new entry
      user.visitedPlants.push({ cubeName, visitCount: 1 });
    }

    // Save updated user document
    await user.save();

    if (!res.headersSent) {
      return res.status(200).json({
        status: true,
        message: 'Plant visit tracked successfully',
        visitedPlants: user.visitedPlants,
      });
    }
  } catch (error) {
    console.error('Error tracking plant visit:', error.message);
    if (!res.headersSent) {
      return res.status(500).json({ status: false, message: 'Server error' });
    }
  }
};
