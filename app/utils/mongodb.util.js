//Dinh nghia lop tro giup ket noi MongoDB

// Lay thu vien MongoClient tu mongodb
const { MongoClient } = require('mongodb');

class MongoDB {
    static connect = async (uri) => {
        if (this.client) return this.client;
        this.client = await MongoClient.connect(uri);
        return this.client;
    };
}

module.exports = MongoDB;




/*
    -MongoDB là một lớp giúp quản lý kết nối đến MongoDB
    - Connect là một hàm tĩnh, tức là có thể gọi trực tiếp mà không cần tạo instance của lớp.
    - async (uri) là một hàm bất đồng bộ, nó sẽ trả về một promise. Sử dụng await để đợi kết nối thành công trước khi trả về kết quả

    - Khi gọi MongoDB.connect(uri), nó sẽ kiểm tra xem this.client đã có kết nối nào tồn tại chưa. Nếu có, nó sẽ trả về kết nối đó.
    - Nếu chưa có kết nối nào, nó sẽ tạo một kết nối mới và trả về kết nối đó. Kết nối vào uri được truyền vào hàm connect và lưu vào this.client để sử dụng sau này.

    module.exports = MongoDB; để export lớp MongoDB ra ngoài để sử dụng ở các file khác
*/