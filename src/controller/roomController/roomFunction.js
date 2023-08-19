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
        model: RoomDetails,
        include: {
          model: RoomPortfolio
        }
      },
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
      room_cover_image: room_cover_image == null ? "" : room_cover_image[0].filename,
      address_1,
      address_2,
      bethroom,
      room,
      about,
      monthly_amount,
      deposite_amount,
    }

    const roomCreate = await RoomDetails.create(addRoomDetails)
    console.log({ room_picture });
    if (roomCreate) {
      if (room_picture) {

        let porfolioimage = []
        room_picture.forEach((item) => {
          console.log({ item });
          porfolioimage.push({ room_id: roomCreate.dataValues.id, room_pic: item.filename })

        })

        const addPortfolio = await RoomPortfolio.bulkCreate(porfolioimage)
        roomCreate.dataValues.room_portfolio = addPortfolio
      }
      return roomCreate
    } else {
      return null;
    }

  }

  editRoomDetails = async ({ room_id, user_id, room_type_id, room_cover_image, address_1, address_2, bethroom, room, about, monthly_amount, deposite_amount, room_picture }) => {
    const editRoomDetails = {
      room_type_id,
      room_cover_image: room_cover_image == null ? "" : room_cover_image[0].filename,
      address_1,
      address_2,
      bethroom,
      room,
      about,
      monthly_amount,
      deposite_amount,
    }

    const editRoom = await RoomDetails.update(editRoomDetails, {
      where: {
        id: room_id,
        user_id: user_id
      },
    })

    if (editRoom) {
      return editRoom
    } else {
      return null
    }

  }

}


module.exports = RoomFunctions