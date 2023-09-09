const tenantRoutes = require('express').Router()
const TenantController = require('../../controller/tenantController/tenantController')
const upload = require('../../services/imageServices')
const tenantController = new TenantController()


tenantRoutes.post('/create-tenant', upload.fields([{ name: 'adhaar_card_image', maxCount: 1 }, { name: 'profile_photo', maxCount: 1 }, { name: 'signature_photo', maxCount: 1 },]), async (req, res) => {
    const result = await tenantController.createTenant(req, res)
    res.send(result)
})

tenantRoutes.put('/update-tenant', upload.fields([{ name: 'adhaar_card_image', maxCount: 1 }, { name: 'profile_photo', maxCount: 1 }, { name: 'signature_photo', maxCount: 1 },]), async (req, res) => {
    const result = await tenantController.updateTenant(req, res)
    res.send(result)
})

tenantRoutes.get('/get-tenant-details/:tenant_id', async (req, res) => {
    const result = await tenantController.getTenant(req, res)
    res.send(result)
})



module.exports = tenantRoutes