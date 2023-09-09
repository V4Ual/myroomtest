const { DataTypes } = require('sequelize');
const CLOUDNAIRY_IMAGE_PROFILEPHOTO = process.env.CLOUDNAIRY_IMAGE_PROFILEPHOTO
const CLOUDNAIRY_IMAGE_ADHAARPHOTO = process.env.CLOUDNAIRY_IMAGE_ADHAARPHOTO
const CLOUDNAIRY_IMAGE_SINGATUREPHOTO = process.env.CLOUDNAIRY_IMAGE_SINGATUREPHOTO

module.exports = (sequelize, Sequelize) => {
    const Tenant = sequelize.define('tenant_details',
        {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER,
            },
            owner_id: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            room_id: {
                type: DataTypes.INTEGER
            },
            name: {
                type: DataTypes.STRING,
            },
            owner_name: {
                type: DataTypes.STRING,
            },
            total_members: {
                type: DataTypes.INTEGER,
            },
            merital_status: {
                type: DataTypes.STRING,
            },
            profile_photo: {
                type: DataTypes.STRING,
                get: function () {
                    return CLOUDNAIRY_IMAGE_PROFILEPHOTO + this.getDataValue('profile_photo')
                }
            },
            address_line_1: {
                type: DataTypes.STRING,
            },
            address_line_2: {
                type: DataTypes.STRING,
            },
            country_id: {
                type: DataTypes.INTEGER,
            },
            state_id: {
                type: DataTypes.INTEGER,
            },
            city_id: {
                type: DataTypes.INTEGER,
            },
            pin_code: {
                type: DataTypes.INTEGER,
            },
            adhaar_card_no: {
                type: DataTypes.INTEGER,
            },
            adhaar_card_image: {
                type: DataTypes.STRING,
                get: function () {
                    return CLOUDNAIRY_IMAGE_ADHAARPHOTO + this.getDataValue('profile_photo')
                }
            },
            contact_name_1: {
                type: DataTypes.STRING,
            },
            contact_no_1: {
                type: DataTypes.INTEGER,
            },
            email_id_1: {
                type: DataTypes.STRING,
            },
            contact_name_2: {
                type: DataTypes.STRING,
            },
            contact_no_2: {
                type: DataTypes.INTEGER,
            },
            email_id_2: {
                type: DataTypes.STRING,
            },
            lease_start_date: {
                type: DataTypes.STRING,
            },
            lease_end_date: {
                type: DataTypes.STRING,
            },
            deposit_ammount: {
                type: DataTypes.DECIMAL(10, 2),
            },
            signature_photo: {
                type: DataTypes.STRING,
                get: function () {
                    return CLOUDNAIRY_IMAGE_SINGATUREPHOTO + this.getDataValue('profile_photo')
                }
            },
            createdAt: {
                allowNull: false,
                type: DataTypes.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: DataTypes.DATE,
            },

        }, {
        modelName: 'tenant_details',

    });
    return Tenant;
};