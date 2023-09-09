const db = require('../../models')
const Tenant = db.Tenant

class TenantFuncitons {
    constructor() { }

    createTenant = async ({ owner_id, name, owner_name, total_members, merital_status, address_line_1, address_line_2, country_id, state_id, city_id, pin_code, adhaar_card_no, contact_name_1, contact_no_1, email_id_1, contact_name_2, contact_no_2, email_id_2, lease_start_date, lease_end_date, deposit_ammount, profile_photo, adhaar_card_image, signature_photo }) => {
        const tenantData = {
            owner_id: owner_id,
            name: name,
            owner_name: owner_name,
            total_members: total_members,
            merital_status: merital_status,
            address_line_1: address_line_1,
            address_line_2: address_line_2,
            country_id: country_id,
            state_id: state_id,
            city_id: city_id,
            pin_code: pin_code,
            adhaar_card_no: adhaar_card_no,
            contact_name_1: contact_name_1,
            contact_no_1: contact_no_1,
            email_id_1: email_id_1,
            contact_name_2: contact_name_2,
            contact_no_2: contact_no_2,
            email_id_2: email_id_2,
            lease_start_date: lease_start_date,
            lease_end_date: lease_end_date,
            deposit_ammount: deposit_ammount,
            profile_photo: profile_photo,
            adhaar_card_image: adhaar_card_image,
            signature_photo: signature_photo
        }
        const createTenant = await Tenant.create(tenantData)
        if (createTenant) {
            return createTenant
        } else {
            return null
        }
    }

}


module.exports = TenantFuncitons