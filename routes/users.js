const express = require('express');
const { usersMock } = require('../utils/mocks/users');

function usersApi(app) {
  const router = express.Router();
  app.use('/api/users', router);

  router.get('/', async function(req, res, next) {
    try {
      const users = await Promise.resolve(usersMock);

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
    try {
      const users = await Promise.resolve(usersMock[0]);

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
    try {
      const createdUserId = await Promise.resolve(usersMock[0].id);

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
    try {
      const updateUserId = await Promise.resolve(usersMock[0].id);

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
    try {
      const deletedUserId = await Promise.resolve(usersMock[0].id);

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
