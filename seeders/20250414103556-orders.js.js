"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    for (let i = 1; i <= 20; i++) {
      //generate random quantity and prodcutId
      const generateQuantityRandomly = Math.floor(Math.random() * 30) + 1;
      const users = i;
      //generate random amount
      const generateAmountRandomly =
        Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;

      //seed the orders table with random data
      await queryInterface.bulkInsert("orders", [
        {
          orderType: "buy",
          quantity: generateQuantityRandomly,
          productId: generateQuantityRandomly,
          userId: users,
          amount: generateAmountRandomly,
          orderDate: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ]);
    }
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("orders", null, {});
  },
};
