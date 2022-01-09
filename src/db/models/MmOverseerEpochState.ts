export default (sequelize, DataTypes) =>
  sequelize.define(
    "MmOverseerEpochState",
    {
      height: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      deposit_rate: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      prev_aterra_supply: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      prev_exchange_rate: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      prev_interest_buffer: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      last_executed_height: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
      },
    },
    {}
  );
