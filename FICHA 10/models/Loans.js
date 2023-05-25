module.exports = (sequelize, DataTypes) =>{
    return sequelize.define('loan',{
        loan_date: {
            type: DataTypes.DATE
        },
        return_date: {
            type: DataTypes.DATE
        }
    });
}