
import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('6CVinyl', 'root', 'se350', {
    dialect: 'mysql',
    host: '35.202.246.241', 
});

export default sequelize;