module.exports = (sequelize, Sequelize) => {
    const referees = sequelize.define("referees", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
      },
      name: {
        type: Sequelize.STRING
      },
      mobile_number:{
        type: Sequelize.STRING
      },
      email_id: {
        type: Sequelize.STRING
      },
      acceptance_status: {
        type: Sequelize.STRING
      }
    });
  
    return referees;
  };
  