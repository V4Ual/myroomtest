const bcrypt = require('bcrypt')
const fs = require('fs')
const path =require('path')
const Responcse = require('../../response')
const RoomFunctions = require('../roomController/roomFunction')
const roomFunctions = new RoomFunctions()
const response = new Responcse()

console.log(path.join(__dirname,'../../../public/roomCoverImage/'));
class RoomController {
    constructor() { }

    getRoomTypes = async (req, res) => {
        const getRoomTypes = await roomFunctions.getRoomTypes()
        if (getRoomTypes) {
            return response.success('Get All Details Room Type', getRoomTypes)
        } else {
            return response.fail('Get All Details Room Type fail', [])
        }
    }

    getRoomDetails = async (req, res) => {
        const getRoomDetails = await roomFunctions.getRoomDetails()
        if (getRoomDetails) {
            return response.success('Get All Details Room Type', getRoomDetails)
        } else {
            return response.fail('Get All Details Room Type fail', [])
        }
    }


    createRoom = async (req,res) =>{
        const { user_id, room_type_id, address_1, address_2, bethroom, room, about, monthly_amount, deposite_amount } = req.body
        const {room_picture,room_cover_image} = req.files
        
        console.log({"data":room_cover_image,room_picture});
        const addData = {
            user_id: user_id,
            room_type_id: room_type_id,
            room_cover_image: room_cover_image,
            address_1: address_1,
            address_2: address_2,
            bethroom: bethroom,
            room: room,
            about: about,
            monthly_amount: monthly_amount,
            deposite_amount: deposite_amount,
            room_picture: room_picture
          }
      
          if (room_cover_image) {
            addData.room_cover_image = room_cover_image
          }
          if(room_picture){
            addData.room_picture = room_picture
          }

          const createRoom = await roomFunctions.addRoomDetails(addData)
          if(createRoom){
            return response.success('add room successfully',createRoom)
          }else{
            return response.fail('fail to create room',[])
          }

        
        
        
        
    }
    
}


module.exports = RoomController