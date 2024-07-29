import httpStatus from 'http-status';
import asyncHandler from '../../lib/asyncHandler';
import sendResponse from '../../lib/sendResponse';
import authServices from './auth.services';

class Controllers {
  private services = authServices;

  /**
   * register a new account
   */
  register = asyncHandler(async (req, res) => {
    const result = await this.services.register(req.body);

    sendResponse(res, {
      statusCode: httpStatus.CREATED,
      message: 'User Registered successfully!',
      success: true,
      data: result,
    });
  });

  /**
   * login into account
   */
  login = asyncHandler(async (req, res) => {
    const result = await this.services.login(req.body);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      message: 'User logged in successfully!',
      success: true,
      data: result,
    });
  });

  /**
   * get self profile
   */
  self = asyncHandler(async (req, res) => {
    const result = await this.services.self(req.user.id);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      message: 'User logged in successfully!',
      success: true,
      data: result,
    });
  });


}

const authControllers = new Controllers();
export default authControllers;
