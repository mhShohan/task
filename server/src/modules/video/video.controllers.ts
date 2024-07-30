import httpStatus from 'http-status';
import asyncHandler from '../../lib/asyncHandler';
import sendResponse from '../../lib/sendResponse';
import videoServices from './video.services';
import APIError from '../../errorHandler/APIError';

class Controllers {
  private services = videoServices;

  upload = asyncHandler(async (req, res) => {
    const { title } = JSON.parse(req.body.data);

    if (!req.file) throw new APIError(404, 'Video not found!');

    const filePath = req.file.path

    const result = await this.services.upload({ filePath, title });

    sendResponse(res, {
      statusCode: httpStatus.CREATED,
      message: 'Upload video successfully!',
      success: true,
      data: result,
    });
  });


}

const videoControllers = new Controllers();
export default videoControllers;
