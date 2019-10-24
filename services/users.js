const { usersMock } = require('../utils/mocks/users');

class UserService {
  async getUsers() {
    const users = await Promise.resolve(usersMock);
    return users || [];
  }

  async getUser() {
    const users = await Promise.resolve(usersMock[0]);
    return users || {};
  }

  async createUser() {
    const createdUserId = await Promise.resolve(usersMock[0].id);
    return createdUserId || {};
  }

  async updateUser() {
    const updatedUserId = await Promise.resolve(usersMock[0].id);
    return updatedUserId || {};
  }

  async deleteUser() {
    const deletedUserId = await Promise.resolve(usersMock[0].id);
    return deletedUserId || {};
  }
}

module.exports = UserService;
