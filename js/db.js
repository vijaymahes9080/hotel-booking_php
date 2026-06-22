// LocalStorage Database Emulation for Hotel Booking

const DEFAULT_MANAGERS = [
  { uid: 1, uname: 'mamun', upass: '1234', fullname: 'Abdullah Al Mamun', uemail: 'mamunwitchbug@gmail.com' },
  { uid: 3, uname: 'jinat', upass: 'jinat', fullname: 'Jinat Afroj', uemail: 'afrojjinat@gmail.com' },
  { uid: 6, uname: 'admin', upass: '1234', fullname: 'admin', uemail: 'admin@admin.com' }
];

const DEFAULT_ROOM_CATEGORIES = [
  { roomname: 'Duplex', room_qnty: 5, available: 5, booked: 0, no_bed: 2, bedtype: 'single', facility: 'AC, TV, Wifi', price: 1500 },
  { roomname: 'Family', room_qnty: 5, available: 5, booked: 0, no_bed: 2, bedtype: 'double', facility: 'Sofa, TV, WIFI, Balcony, AC.', price: 3500 },
  { roomname: 'Super Comfort', room_qnty: 5, available: 5, booked: 0, no_bed: 1, bedtype: 'double', facility: 'AC, TV, WIFI', price: 2200 }
];

// Initialize rooms: room_id, room_cat, checkin, checkout, name, phone, book
const DEFAULT_ROOMS = [];
// 5 Family rooms
for (let i = 23; i <= 27; i++) {
  DEFAULT_ROOMS.push({ room_id: i, room_cat: 'Family', checkin: '0000-00-00', checkout: '0000-00-00', name: '', phone: '', book: 'false' });
}
// Super Comfort rooms
DEFAULT_ROOMS.push({ room_id: 28, room_cat: 'Super Comfort', checkin: '2017-05-19', checkout: '2017-05-22', name: 'Jinat Afroj', phone: '1524587558', book: 'true' });
for (let i = 29; i <= 32; i++) {
  DEFAULT_ROOMS.push({ room_id: i, room_cat: 'Super Comfort', checkin: '0000-00-00', checkout: '0000-00-00', name: '', phone: '', book: 'false' });
}
// Duplex rooms
for (let i = 33; i <= 37; i++) {
  DEFAULT_ROOMS.push({ room_id: i, room_cat: 'Duplex', checkin: '0000-00-00', checkout: '0000-00-00', name: '', phone: '', book: 'false' });
}

function initDB() {
  if (!localStorage.getItem('managers')) {
    localStorage.setItem('managers', JSON.stringify(DEFAULT_MANAGERS));
  }
  if (!localStorage.getItem('room_categories')) {
    localStorage.setItem('room_categories', JSON.stringify(DEFAULT_ROOM_CATEGORIES));
  }
  if (!localStorage.getItem('rooms')) {
    localStorage.setItem('rooms', JSON.stringify(DEFAULT_ROOMS));
  }
}
initDB();

const db = {
  getManagers() {
    return JSON.parse(localStorage.getItem('managers'));
  },
  saveManagers(managers) {
    localStorage.setItem('managers', JSON.stringify(managers));
  },
  getRoomCategories() {
    return JSON.parse(localStorage.getItem('room_categories'));
  },
  saveRoomCategories(cats) {
    localStorage.setItem('room_categories', JSON.stringify(cats));
  },
  getRooms() {
    return JSON.parse(localStorage.getItem('rooms'));
  },
  saveRooms(rooms) {
    localStorage.setItem('rooms', JSON.stringify(rooms));
  },

  check_login(emailusername, password) {
    const managers = this.getManagers();
    const manager = managers.find(m => (m.uname === emailusername || m.uemail === emailusername) && m.upass === password);
    if (manager) {
      sessionStorage.setItem('login', 'true');
      sessionStorage.setItem('uid', manager.uid.toString());
      return true;
    }
    return false;
  },

  reg_user(name, username, password, email) {
    const managers = this.getManagers();
    const exists = managers.some(m => m.uname === username || m.uemail === email);
    if (!exists) {
      const newUid = managers.length > 0 ? Math.max(...managers.map(m => m.uid)) + 1 : 1;
      managers.push({ uid: newUid, uname: username, upass: password, fullname: name, uemail: email });
      this.saveManagers(managers);
      return true;
    }
    return false;
  },

  add_room(roomname, room_qnty, no_bed, bedtype, facility, price) {
    const cats = this.getRoomCategories();
    const rooms = this.getRooms();
    
    if (cats.some(c => c.roomname.toLowerCase() === roomname.toLowerCase())) {
      return false;
    }

    cats.push({
      roomname,
      room_qnty: parseInt(room_qnty),
      available: parseInt(room_qnty),
      booked: 0,
      no_bed: parseInt(no_bed),
      bedtype,
      facility,
      price: parseFloat(price)
    });
    this.saveRoomCategories(cats);

    const nextId = rooms.length > 0 ? Math.max(...rooms.map(r => r.room_id)) + 1 : 1;
    for (let i = 0; i < room_qnty; i++) {
      rooms.push({
        room_id: nextId + i,
        room_cat: roomname,
        checkin: '0000-00-00',
        checkout: '0000-00-00',
        name: '',
        phone: '',
        book: 'false'
      });
    }
    this.saveRooms(rooms);
    return true;
  },

  edit_room_cat(roomname, room_qnty, no_bed, bedtype, facility, price, old_room_cat) {
    const cats = this.getRoomCategories();
    let rooms = this.getRooms();

    // Remove existing rooms of the old category
    rooms = rooms.filter(r => r.room_cat !== old_room_cat);

    // Add new rooms under the updated category name/quantity
    const nextId = rooms.length > 0 ? Math.max(...rooms.map(r => r.room_id)) + 1 : 1;
    for (let i = 0; i < room_qnty; i++) {
      rooms.push({
        room_id: nextId + i,
        room_cat: roomname,
        checkin: '0000-00-00',
        checkout: '0000-00-00',
        name: '',
        phone: '',
        book: 'false'
      });
    }
    this.saveRooms(rooms);

    const catIndex = cats.findIndex(c => c.roomname === old_room_cat);
    if (catIndex !== -1) {
      cats[catIndex] = {
        roomname,
        room_qnty: parseInt(room_qnty),
        available: parseInt(room_qnty),
        booked: 0,
        no_bed: parseInt(no_bed),
        bedtype,
        facility,
        price: parseFloat(price)
      };
      this.saveRoomCategories(cats);
      return "Updated Successfully!!";
    }
    return "Sorry, Internal Error";
  },

  delete_room_category(room_cat) {
    let cats = this.getRoomCategories();
    let rooms = this.getRooms();

    cats = cats.filter(c => c.roomname !== room_cat);
    rooms = rooms.filter(r => r.room_cat !== room_cat);

    this.saveRoomCategories(cats);
    this.saveRooms(rooms);
  },

  check_available(checkin, checkout) {
    const rooms = this.getRooms();
    const cats = this.getRoomCategories();

    // Check overlaps: (r.checkin <= checkout && checkin <= r.checkout)
    const bookedRoomIds = rooms.filter(r => {
      if (r.book === 'false' || r.checkin === '0000-00-00' || r.checkout === '0000-00-00') {
        return false;
      }
      return (r.checkin <= checkout && checkin <= r.checkout);
    }).map(r => r.room_id);

    const availableRooms = rooms.filter(r => !bookedRoomIds.includes(r.room_id));
    
    const categoryAvailability = {};
    availableRooms.forEach(r => {
      categoryAvailability[r.room_cat] = (categoryAvailability[r.room_cat] || 0) + 1;
    });

    const availableCategories = cats.filter(c => categoryAvailability[c.roomname] > 0).map(c => {
      return {
        ...c,
        available: categoryAvailability[c.roomname]
      };
    });

    return availableCategories;
  },

  booknow(checkin, checkout, name, phone, roomname) {
    const rooms = this.getRooms();
    const cats = this.getRoomCategories();

    const bookedRoomIds = rooms.filter(r => {
      if (r.room_cat !== roomname) return false;
      if (r.book === 'false' || r.checkin === '0000-00-00' || r.checkout === '0000-00-00') {
        return false;
      }
      return (r.checkin <= checkout && checkin <= r.checkout);
    }).map(r => r.room_id);

    const availableRoom = rooms.find(r => r.room_cat === roomname && !bookedRoomIds.includes(r.room_id));
    if (availableRoom) {
      availableRoom.checkin = checkin;
      availableRoom.checkout = checkout;
      availableRoom.name = name;
      availableRoom.phone = phone;
      availableRoom.book = 'true';
      
      this.saveRooms(rooms);

      const cat = cats.find(c => c.roomname === roomname);
      if (cat) {
        cat.booked = rooms.filter(r => r.room_cat === roomname && r.book === 'true').length;
        cat.available = Math.max(0, cat.room_qnty - cat.booked);
        this.saveRoomCategories(cats);
      }

      return "Your Room has been booked!!";
    } else {
      return "No Room Is Available";
    }
  },

  edit_all_room(checkin, checkout, name, phone, id, book_status) {
    const rooms = this.getRooms();
    const cats = this.getRoomCategories();
    const room = rooms.find(r => r.room_id === parseInt(id));
    if (room) {
      room.checkin = checkin;
      room.checkout = checkout;
      room.name = name;
      room.phone = phone;
      room.book = book_status || 'true';
      this.saveRooms(rooms);

      // Update booked counts in category
      const roomname = room.room_cat;
      const cat = cats.find(c => c.roomname === roomname);
      if (cat) {
        cat.booked = rooms.filter(r => r.room_cat === roomname && r.book === 'true').length;
        cat.available = Math.max(0, cat.room_qnty - cat.booked);
        this.saveRoomCategories(cats);
      }

      return "Your Room has been booked!!";
    }
    return "Sorry, Internal Error";
  },

  get_session() {
    return sessionStorage.getItem('login') === 'true';
  },

  user_logout() {
    sessionStorage.removeItem('login');
    sessionStorage.removeItem('uid');
  }
};
