const express = require('express');
const UserService = require('../services/users');

function usersApi(app) {
  const router = express.Router();
  const userService = new UserService();

  app.use('/api/users', router);

  router.get('/', async function(req, res, next) {
    const { tags } = req.query;
    try {
      const users = await userService.getUsers({ tags });

      res.set('X-Powered-By', 'yo mero');
      res.status(200).json({
        data: users,
        message: 'users listed'
      });
    } catch (err) {
      next(err);
    }
  });

  router.get('/:userId', async function(req, res, next) {
    const { userId } = req.params;
    try {
      const users = await userService.getUser({ userId });

      res.set('X-Powered-By', 'yo mero');
      res.status(200).json({
        data: users,
        message: 'user retrieved'
      });
    } catch (err) {
      next(err);
    }
  });

  router.post('/', async function(req, res, next) {
    const { body: user } = req;

    try {
      const createdUserId = await userService.createUser({ user });

      res.set('X-Powered-By', 'yo mero');
      res.status(201).json({
        data: createdUserId,
        message: 'user created'
      });
    } catch (err) {
      next(err);
    }
  });

  router.put('/:userId', async function(req, res, next) {
    const { body: user } = req;
    const { userId } = req.params;

    try {
      const updateUserId = await userService.updateUser({ userId, user });

      res.set('X-Powered-By', 'yo mero');
      res.status(200).json({
        data: updateUserId,
        message: 'user updated'
      });
    } catch (err) {
      next(err);
    }
  });

  router.delete('/:userId', async function(req, res, next) {
    const { userId } = req.params;
    try {
      const deletedUserId = await userService.deleteUser({ userId });

      res.set('X-Powered-By', 'yo mero');
      res.status(200).json({
        data: deletedUserId,
        message: 'user deleted'
      });
    } catch (err) {
      next(err);
    }
  });
}

module.exports = {
  usersApi
};
