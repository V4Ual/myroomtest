const db = require('../../models')
const RoomTypes = db.RoomTypes
const RoomDetails = db.RoomDetails
const Users = db.Users
const RoomPortfolio = db.RoomPortfolio
class RoomFunctions {
  constructor() { }

  getRoomTypes = async () => {
    const getRoomTypes = await RoomTypes.findAll()
    if (getRoomTypes) {
      return getRoomTypes
    } else {
      return null
    }
  }

  getRoomDetails = async () => {
    const getRoomAll = await Users.findAll({
      include: {
        model: RoomDetails
      }
    })
    if (getRoomAll) {
      return getRoomAll
    } else {
      return null
    }
  }

  addRoomDetails = async ({ user_id, room_type_id, room_cover_image, address_1, address_2, bethroom, room, about, monthly_amount, deposite_amount, room_picture }) => {

    const addRoomDetails = {
      user_id,
      room_type_id,
      room_cover_image:room_cover_image == null ? "" : room_cover_image[0].filename,
      address_1,
      address_2,
      bethroom,
      room,
      about,
      monthly_amount,
      deposite_amount,

    }

    const roomCreate = await RoomDetails.create(addRoomDetails)
    if (roomCreate) {
      if (room_picture) {

        let porfolioimage = []
        for (let i = 0; i < room_picture.length; i++) {
          porfolioimage.push({ room_id: roomCreate.dataValues.id, room_pic: room_picture[i].filename })
        }
        await RoomPortfolio.bulkCreate(porfolioimage)
      }
      return roomCreate
    } else {
      return null;
    }

  }


}


module.exports = RoomFunctions