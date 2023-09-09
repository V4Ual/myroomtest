const TenantFuncitons = require('../tenantController/tenantFunctions')
const Responcse = require('../../response')
const response = new Responcse()
const tenantFuncitons = new TenantFuncitons()
class TenantController {
    constructor() { }

    createTenant = async (req, res) => {
        const { owner_id, name, owner_name, total_members, merital_status, address_line_1, address_line_2, country_id, state_id, city_id, pin_code, adhaar_card_no, contact_name_1, contact_no_1, email_id_1, contact_name_2, contact_no_2, email_id_2, lease_start_date, lease_end_date, deposit_ammount } = req.body
        console.log({ owner_id, name, owner_name, total_members, merital_status, address_line_1, address_line_2, country_id, state_id, city_id, pin_code, adhaar_card_no, contact_name_1, contact_no_1, email_id_1, contact_name_2, contact_no_2, email_id_2, lease_start_date, lease_end_date, deposit_ammount })
        const { profile_photo, adhaar_card_image, signature_photo } = req.files

        const tenantData = {
            owner_id: Number(owner_id),
            name: name,
            owner_name: owner_name,
            total_members: Number(total_members),
            merital_status: merital_status,
            address_line_1: address_line_1,
            address_line_2: address_line_2,
            country_id: Number(country_id),
            state_id: Number(state_id),
            city_id: Number(city_id),
            pin_code: Number(pin_code),
            adhaar_card_no: Number(adhaar_card_no),
            contact_name_1: contact_name_1,
            contact_no_1: Number(contact_no_1),
            email_id_1: email_id_1,
            contact_name_2: contact_name_2,
            contact_no_2: Number(contact_no_2),
            email_id_2: email_id_2,
            lease_start_date: lease_start_date,
            lease_end_date: lease_end_date,
            deposit_ammount: deposit_ammount,
            profile_photo: profile_photo,
            adhaar_card_image: adhaar_card_image,
            signature_photo: signature_photo
        }
        console.log(tenantData);
        if (profile_photo) {
            tenantData.profile_photo = profile_photo[0].filename
        }
        if (adhaar_card_image) {
            tenantData.adhaar_card_image = adhaar_card_image[0].filename
        }
        if (signature_photo) {
            tenantData.signature_photo = signature_photo[0].filename
        }

        console.log(tenantData);

        const createTenant = await tenantFuncitons.createTenant(tenantData)
        if (createTenant) {
            return response.success('Get All createTenant Successfully', createTenant)
        } else {
            return response.fail('Get All createTenant fail', [])
        }
    }

}


module.exports = TenantController