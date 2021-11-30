module.exports = (sequelize, Sequelize) => {
  const Sponsor = sequelize.define("sponsor", {
    name: {
      type: Sequelize.STRING
    },
    representative_name: {
      type: Sequelize.STRING
    },
    mobile_number:{
      type: Sequelize.STRING
    },
    email_id: {
      type: Sequelize.STRING
    },
    income: {
      type: Sequelize.STRING
    },
    acceptance_status: {
      type: Sequelize.STRING
    },
    sponsoring_amount: {
      type: Sequelize.STRING
    },
    comments: {
      type: Sequelize.STRING
    },
    previous_sponsorships: {
      type: Sequelize.STRING
    },
    address: {
      type: Sequelize.STRING
    }
  });

  return Sponsor;
};
